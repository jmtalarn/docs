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

Welcome to [microlink.io](https://microlink.io) API. You can use it for get relevant information from any link. The service is oriented for build embed previsualizations of third party links in your site.

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

**type**: `boolean`|`string`<br>
**default** `false`

Take a screenshot of the website. The image will be hosted at [imgur.com](https://imgur.com).

At **Professional** plan, we can places the images in your own image hosting (S3, Cloudinary, whatever). Just contact with [hello@microlink.io](mailto:hello@microlink.io).

<br>

If you provide the device identifier, the screenshot will be taken according with the device screen dimensions.

<aside class="notice">You can provide device name in lower case.</aside>

### Devices supported

- `Blackberry PlayBook`
- `Blackberry PlayBook landscape`
- `BlackBerry Z30`
- `BlackBerry Z30 landscape`
- `Galaxy Note 3`
- `Galaxy Note 3 landscape`
- `Galaxy Note II`
- `Galaxy Note II landscape`
- `Galaxy S III`
- `Galaxy S III landscape`
- `Galaxy S5`
- `Galaxy S5 landscape`
- `iPad`
- `iPad landscape`
- `iPad Mini`
- `iPad Mini landscape`
- `iPad Pro`
- `iPad Pro landscape`
- `iPhone 4`
- `iPhone 4 landscape`
- `iPhone 5`
- `iPhone 5 landscape`
- `iPhone 6`
- `iPhone 6 landscape`
- `iPhone 6 Plus`
- `iPhone 6 Plus landscape`
- `Kindle Fire HDX`
- `Kindle Fire HDX landscape`
- `LG Optimus L70`
- `LG Optimus L70 landscape`
- `Microsoft Lumia 550`
- `Microsoft Lumia 950`
- `Microsoft Lumia 950 landscape`
- `Nexus 10`
- `Nexus 10 landscape`
- `Nexus 4`
- `Nexus 4 landscape`
- `Nexus 5`
- `Nexus 5 landscape`
- `Nexus 5X`
- `Nexus 5X landscape`
- `Nexus 6`
- `Nexus 6 landscape`
- `Nexus 6P`
- `Nexus 6P landscape`
- `Nexus 7`
- `Nexus 7 landscape`
- `Nokia Lumia 520`
- `Nokia Lumia 520 landscape`
- `Nokia N9`
- `Nokia N9 landscape`

### Specific parameters

You can specific options related with the screenshot settings as well.

Parameter    | Description                                           |
------------ | ----------------------------------------------------- |
`type`             | **string** Specify screenshot type, could be either `'jpeg'` or `'png'` (defaults is `'png'`). |
`quality`  | **number** The quality of the image, between `0` to `100`. Not applicable to `'png'` images. |
`omit_background`          | **boolean** Hides default white background and allows capturing screenshots with transparency (default to `true`). |
`full_page`          | **boolean** When `true`, takes a screenshot of the full scrollable page. (default to `false`). |
`width`          | **number** Page width in pixels. |
`height`          | **number** Page height in pixels. |
`is_mobile`          | **boolean** Whether the meta viewport tag is taken into account (default to `false`). |
`has_touch`          | **boolean or string** Specifies if viewport supports touch events. (default to `false`). |
`is_landscape`          | **boolean** Specifies if viewport is in landscape mode (defaults to `false`). |
`device_scale_factor`          | **number** Specify device scale factor (defaults to `1`). |

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

- **palette**: A collection of hexadecimal colors from most dominant color to least.

- **background_color**: The best color with good [WCAG contrast ratio](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) that can be used as background color representation of the image.

- **color**:  The best color  overlayed over `background_color`.

- **alternative_color**: It will be the second best color. If there are only two colors parsed, it will default to `color`.

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

> You can call the API directly from an html `img` tag - images are returned inline. For example:

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
