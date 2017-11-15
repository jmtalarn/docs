---
title: Microlink API Documentation

language_tabs: # must be one of https://git.io/vQNgJ
  - Shell

toc_footers:
  - <a href='https://headwayapp.co/microlink-changelog' target="_blank">see changelog</a>
  - <a href='https://github.com/microlinkhq/support' target="_blank">report an issue</a>
  - <a href='https://microlink.io' target="_blank">visit website</a>
search: false
---

# Getting Started

Welcome to [microlink.io](https://microlink.io) API. You can use it for get relevant information from any website. The service is oriented for build embed previsualizations of third party links in your site.

> Entering an URL, you will receive the information behind the link. Easy peasy.

```bash
$ curl https://api.microlink.io?url=https://vimeo.com/188175573
```

> The above API request generate the following response:

```json
{
  "status": "success",
  "data": {
    "author": null,
    "date": null,
    "description":
      "Converse has spent a good part of this year updating some of their classics. Our past is constantly catching up to us, but we rarely get to see the relationship…",
    "favicon": {
      "width": 180,
      "height": 180,
      "type": "png",
      "url": "https://i.vimeocdn.com/favicon/main-touch_180"
    },
    "image": {
      "width": 1280,
      "height": 720,
      "type": "jpg",
      "url": "https://i.vimeocdn.com/video/598160082_1280x720.jpg"
    },
    "logo": null,
    "publisher": "Vimeo",
    "title": "Converse - Past meets Present - Montage",
    "url": "https://vimeo.com/188175573"
  }
}
```

From the [url](#url) provided as input, we can detect the following information:

- Author
- Date
- Description
- Image
- Logo
- Favicon
- Publisher
- URL
- Title

Complementing the information obtained, we provide you a set of extra features to enrich more your links previsualizations and improve your engagement:

- Take an [screenshot](#screenshot) of the website (partial or full page).
- Get predominant [palette](#palette) colors per each image detected.
- Make easy [embed](#embeded-support) content directly in your HTML markup.
- [Prerendering](#prerender) mode, useful for get more information from website that uses client sides frameworks.
- Export to PDF (*soon*, [ping us](https://twitter.com/microlinkio) if you are interested!)

</br>

The API is shipped as microservice. Just call `/` with method `GET`. Nothing else.

All requests should be made over SSL. All request and response bodies, including errors, are encoded in JSON.

# Authentication

```shell
$ curl https://api.microlink.io?key=yeahboi
```

> If you don't provide the `key` you will see a response like:

```json
{
  "status": "fail",
  "data": {
    "key": "<required<; API secret key."
  }
}
```

If you are using **Free** plan, then you don't have any kind of authentication, but be careful about reach daily [rate limit](#rate-limit).

For **Professional** plan, authentication is required. It will be done providing your `API_KEY_SECRET` as `key` parameter into your query request.

# Rate limit

```bash
$ curl http://api.microlink.io?url=https://github.com -i
```

```text
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Access-Control-Request-Method: GET
Access-Control-Allow-Credentials: true
Content-Type: application/json; charset=utf-8
X-Rate-Limit-Limit: 300
X-Rate-Limit-Remaining: 299
X-Rate-Limit-Reset: 86400
X-Cache: NOHIT
Content-Length: 753
Vary: Accept-Encoding
Date: Thu, 19 Oct 2017 15:05:38 GMT
Connection: keep-alive
```

For **Free** plan, we allow a maximum of **1,000 requests per each 24h hours**.

You can check your rate limit status seeing the HTTP headers we attach to every request.

HTTP Header | Description
| ----------| ---------- |
**X-Rate-limit-limit** | The rate limit time window in milliseconds.
**X-Rate-limit-remaining** | The number of requests left for the time window.
**X-Rate-limit-reset** | The remaining window before the rate limit resets, in milliseconds.

<br>

Under **Professional** plan, rate limits start from **10,000 requests per each 24h**.

# Response Format

All the responses as served as **JSON** – unless you use the [embedded support](#embedded-support).

Our response format is based on [JSend](https://labs.omniti.com/labs/jsend) specification.

This means sthat every API call generate a response with `status`, `data` and `message` fields.

## status

*required*<br>
**type**: `string`

The status associated with the response. The value can be:


Status          | HTTP Status | Description                                                        |
-------------------| -------------------- | -------------------------------------------------------------------- |
`success`   | `2xx`             | The request was resolved successfully. This is the expected behavior.        |
`fail`         | `4xx`             | The request failed. Probably a missing or wrong value for a parameter. |
`error`       | `5xx`             | Oh oh. Something not expected happened.    |

A simple rule here is, if the request was resolved successful, then `success` status will be associated. In other case check for `fail` or `error`.

## data

**type**: `object`

Your API response payload. Here you can found all the information related with the link provided, like `description`, `title`, `image`, etc.

## message

**type**: `string`

An optional field to attach extra information, like error message or explanation.

# Request Cache

<aside class="notice">
You can check the HTTP header <b>X-Cache</b> for know if the response was or not a cached version.
</aside>

We follow a query caching politic for successive API calls based on query requests, in order to provide fast response and server a cached version from the first request.

This means that maybe the first requests can take more time, but, after that, the next successive API calls will be resolved instantly.

The order of the query parameters no matters, we serve successive requests based on the first request result.

For the **Free** plan, the first request will be cached for the next 5 days.

If you have **Professional** plan, caching politic can be customize, adapting your user case. Please, contact with [hello@microlink.io](mailto:hello@microlink.io?subject=Adjust request cache) for that.

# API Parameters

## url

*required*<br>
**type**: `string`

The URL for get information based on the content.

## prerender

**type**: `boolean`<br>
**default** `false`

<aside class="warning">
This parameter can do response time slow, avoid it if you don't really need it.
</aside>

Preload all elements from the URL in preparation for extract the data.

## screenshot

> When you take an screenshot snapshot such as

```shell
$ curl https://api.microlink.io/?url=https%3A%2F%2Fproducthunt.com&screenshot&filter=screenshot
```

> The image will be hosted at  [imgur.com](https://imgur.com) as `png` by default.

```json
{
  "status": "success",
  "data": {
    "screenshot": {
      "url": "https://i.imgur.com/Jv9yqlI.png",
      "type": "png",
      "width": 1280,
      "height": 800
    }
  }
}
```

**type**: `boolean`|`string`<br>
**default** `false`

Take a screenshot of the website. The image will be hosted at [imgur.com](https://imgur.com).

At **Professional** plan, we can places the images in your own image hosting (S3, Cloudinary, whatever). Just contact with [hello@microlink.io](mailto:hello@microlink.io).

### Device emulation

> Providing a device name supported as value for `screenshot`, we will take the screenshot using the specific device settings (viewport, width, height, etc).

```html
<img
  style="max-width: 250px"
  src="https://api.microlink.io/?url=https%3A%2F%2Fproducthunt.com&screenshot=iphone%206&embed=screenshot.url"
```

> <img style="max-width: 250px" src="https://api.microlink.io/?url=https%3A%2F%2Fproducthunt.com&screenshot=iphone%206&embed=screenshot.url"
/>

The specific parameter `device` is a helper to setup a determinate viewport settings based in a device name.

For use it just provide a device name supported.

<aside class="notice">You can provide device name in lower case.</aside>

The devices supported are:

| name | width | height | scale | mobile? | touch? | landscape? |
|------|-------|--------| ----- |----------|----------|-------------|
| `BlackBerry Z30` | 360 | 640 | 2 | true | true | false |
| `BlackBerry Z30 landscape` | 640 | 360 | 2 | true | true | true |
| `Blackberry PlayBook` | 600 | 1024 | 1 | true | true | false |
| `Blackberry PlayBook landscape` | 1024 | 600 | 1 | true | true | true |
| `Galaxy Note 3` | 360 | 640 | 3 | true | true | false |
| `Galaxy Note 3 landscape` | 640 | 360 | 3 | true | true | true |
| `Galaxy Note II` | 360 | 640 | 2 | true | true | false |
| `Galaxy Note II landscape` | 640 | 360 | 2 | true | true | true |
| `Galaxy S III` | 360 | 640 | 2 | true | true | false |
| `Galaxy S III landscape` | 640 | 360 | 2 | true | true | true |
| `Galaxy S5` | 360 | 640 | 3 | true | true | false |
| `Galaxy S5 landscape` | 640 | 360 | 3 | true | true | true |
| `Kindle Fire HDX` | 800 | 1280 | 2 | true | true | false |
| `Kindle Fire HDX landscape` | 1280 | 800 | 2 | true | true | true |
| `LG Optimus L70` | 384 | 640 | 1.25 | true | true | false |
| `LG Optimus L70 landscape` | 640 | 384 | 1.25 | true | true | true |
| `Macbook Pro 13` | 1280 | 800 | 1 | false | false | false |
| `Macbook Pro 15` | 1440 | 900 | 1 | false | false | false |
| `Microsoft Lumia 550` | 640 | 360 | 2 | true | true | false |
| `Microsoft Lumia 950` | 360 | 640 | 4 | true | true | false |
| `Microsoft Lumia 950 landscape` | 640 | 360 | 4 | true | true | true |
| `Nexus 10` | 800 | 1280 | 2 | true | true | false |
| `Nexus 10 landscape` | 1280 | 800 | 2 | true | true | true |
| `Nexus 4` | 384 | 640 | 2 | true | true | false |
| `Nexus 4 landscape` | 640 | 384 | 2 | true | true | true |
| `Nexus 5` | 360 | 640 | 3 | true | true | false |
| `Nexus 5 landscape` | 640 | 360 | 3 | true | true | true |
| `Nexus 5X` | 412 | 732 | 2.625 | true | true | false |
| `Nexus 5X landscape` | 732 | 412 | 2.625 | true | true | true |
| `Nexus 6` | 412 | 732 | 3.5 | true | true | false |
| `Nexus 6 landscape` | 732 | 412 | 3.5 | true | true | true |
| `Nexus 6P` | 412 | 732 | 3.5 | true | true | false |
| `Nexus 6P landscape` | 732 | 412 | 3.5 | true | true | true |
| `Nexus 7` | 600 | 960 | 2 | true | true | false |
| `Nexus 7 landscape` | 960 | 600 | 2 | true | true | true |
| `Nokia Lumia 520` | 320 | 533 | 1.5 | true | true | false |
| `Nokia Lumia 520 landscape` | 533 | 320 | 1.5 | true | true | true |
| `Nokia N9` | 480 | 854 | 1 | true | true | false |
| `Nokia N9 landscape` | 854 | 480 | 1 | true | true | true |
| `iMac 21.5` | 1980 | 1080 | 1 | false | false | false |
| `iMac 27` | 2560 | 1440 | 1 | false | false | false |
| `iPad` | 768 | 1024 | 2 | true | true | false |
| `iPad Mini` | 768 | 1024 | 2 | true | true | false |
| `iPad Mini landscape` | 1024 | 768 | 2 | true | true | true |
| `iPad Pro` | 1024 | 1366 | 2 | true | true | false |
| `iPad Pro landscape` | 1366 | 1024 | 2 | true | true | true |
| `iPad landscape` | 1024 | 768 | 2 | true | true | true |
| `iPhone 4` | 320 | 480 | 2 | true | true | false |
| `iPhone 4 landscape` | 480 | 320 | 2 | true | true | true |
| `iPhone 5` | 320 | 568 | 2 | true | true | false |
| `iPhone 5 landscape` | 568 | 320 | 2 | true | true | true |
| `iPhone 6` | 375 | 667 | 2 | true | true | false |
| `iPhone 6 Plus` | 414 | 736 | 3 | true | true | false |
| `iPhone 6 Plus landscape` | 736 | 414 | 3 | true | true | true |
| `iPhone 6 landscape` | 667 | 375 | 2 | true | true | true |

### Specific parameters

> Without providing any extra configuration, the screenshot will be taken with a `8:5` aspect ratio resolution. If you want to use a different aspect ratio (for example `16:9`) just provide a resolution for do that as extra parameters:

```shell
$ curl https://api.microlink.io/?url=https%3A%2F%2Fproducthunt.com&screenshot&filter=screenshot&width=2560&height=1440
```

> The output will be:

```json
{
  "status": "success",
  "data": {
    "screenshot": {
      "url": "https://i.imgur.com/CGNezUs.png",
      "type": "png",
      "width": 2560,
      "height": 1440
    }
  }
}
```

> The screenshot dimensions could be too large but you want to keep aspect ratio resolution. You can scale the dimension using `device_scale_factor`:

```shell
$ curl https://api.microlink.io/?url=https%3A%2F%2Fproducthunt.com&screenshot&filter=screenshot&width=2560&height=1440&device_scale_factor=0.5
```

> Now screenshot is `16:9` and file size is enough:

```json
{
  "status": "success",
  "data": {
    "screenshot": {
      "url": "https://i.imgur.com/kf1D7Gl.png",
      "type": "png",
      "width": 1280,
      "height": 720
    }
  }
}
```

Additionally you can setup a set of variable related with screenshot properties.

Parameter    | Description                                           |
------------ | ----------------------------------------------------- |
`device_scale_factor`          | **number** Specify device scale factor (defaults to `1`). |
`full_page`          | **boolean** When `true`, takes a screenshot of the full scrollable page. (default to `false`). |
`has_touch`          | **boolean or string** Specifies if viewport supports touch events. (default to `false`). |
`height`          | **number** Page height in pixels. |
`is_landscape`          | **boolean** Specifies if viewport is in landscape mode (default to `false`). |
`is_mobile`          | **boolean** Whether the meta viewport tag is taken into account (default to `false`). |
`omit_background`          | **boolean** Hides default white background and allows capturing screenshots with transparency (default to `true`). |
`quality`  | **number** The quality of the image, between `0` to `100`. Not applicable to `'png'` images. |
`type`             | **string** Specify screenshot type, could be either `'jpeg'` or `'png'` (default to `'png'`). |
`width`          | **number** Page width in pixels. |
`user_agent` | **string** Specific user agent to use. |

## palette

> Adding `palette` as query string parameter in your API call make possible get more information about your images color composition:

```bash
$ curl https://api.microlink.io/?url=https://news.ycombinator.com&palette&filter=image
```

```json
{
  "status": "success",
  "data": {
    "image": {
      "width": 18,
      "height": 18,
      "type": "gif",
      "url": "https://news.ycombinator.com/y18.gif",
      "palette": [
        "#fc6404",
        "#fca46c",
        "#833301"
      ],
      "background_color": "#FCA46C",
      "color": "#712D01",
      "alternative_color": "#813201"
    }
  }
}
```

**type**: `boolean`<br>
**default** `false`

Enabling it will be return you more information related with color schema of the images detected:

| Field             | Description                                                                                                                                                                                                |
| ----------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| palette           | **array** A collection of hexadecimal colors from most dominant color to least.                                                                                                                            |
| background_color  | **string** The best color with good [WCAG contrast ratio](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) that can be used as background color representation of the image.|
| color             | **string** The best color  overlayed over `background_color`.                                                                                                                                              |
| alternative_color | **string** It will be the second best color. If there are only two colors parsed, it will default to `color`.                                                                                              |

## filter

> It's a good practice filter just the values that you're going to consume:

```bash
$ curl https://api.microlink.io/?url=https://news.ycombinator.com&filter=url,title
```

```json
{
  "status": "success",
  "data": {
    "url": "https://news.ycombinator.com/",
    "title": "Hacker News"
  }
}
```

> This reduces bandwidth and improves response times.

**type**: `array`<br>

A comma separate list of the requested values.

Probably you don't want to consume all the response data, so this parameter is designed for make the response as tiny as possible.

# API Endpoint

This API is a **microservice**. Just  `GET`  method will be used.

Following this approach, we offer two ways to consume the response.

## All data detected

Given an URL, returns all the information extracted from the content. You can pass all the [API params](#api-params).

This is the default behavior.

## Embeded support

> You can call the API directly from an html `img` tag - images are returned inline:

```html
<img
  src="https://api.microlink.io?url=https://news.ycombinator.com&embed=favicon"
/>
```

> Return’s Hackers News favicon:

> <img
  src="https://api.microlink.io?url=https://news.ycombinator.com&embed=favicon"
/>

<aside class="notice">
Use dotted notation for reference nested data of the payload.
</aside>

Complementary to response with [all data detected](#all-data-detected), **embeded support**.

The only different thing that you need to do for enable it is provide `embed` as query parameter following by the value at path of object data.

For example, if you want to embed an image just provide `embed=image.src` and the image will be rendered.

This is useful when you want to render API content directly from your HTML.
