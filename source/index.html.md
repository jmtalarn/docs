---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>
search: true
---

# Getting Started

[microlink.io](https://microlink.io) is an API for get information fron any URL.

The service is oriented for build embebed previsualizations of third party links in your website.

Providing an URL as input, we can detect the following information:

- Author
- Date
- Description
- Image
- Logo
- Favicon
- Publisher
- Url
- Title

Additionally, we can perform the following actions

- Take an screenshot of the website
- Get palette colours of all images detected.

The following documentation is related about all you need to know about the API, like response format, rate limit and configurable parameters.

# Authentication

If you are using **Community** plan, then you don't have any kind of authentication, but be careful about reach daily [rate limit](#rate-limit).

For **Professional** plan, authentication will be done providing your `API_KEY_SECRET` as `key` parameter into your query request.

```shell
$ curl https://api.microlink.io/1.0?key=yeahboi
```

# Versioning

The API version is specified in the url before query params.

```shell
$ curl https://api.microlink.io/1.0
```

Currently version supported is **1.0**.

# Rate limit

For **Community** plan, we allow a maximum of **3000 requests per 24h hours**.

Under **Professional** plan, there is not rate limit.

# Response Format

All the responses as served as **JSON** – unless you use the [embedded support](#embedded-support) – using [JSend](https://labs.omniti.com/labs/jsend) format specification.

The API will be response with  `status` and `data` and `message` fields.

## status

*required*<br>
**type**: `string`

The status associated with the response. The value can be


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

# Caching

We follow a query caching politic for successive and same parameters request in order to provide fast response after the first request.

The first time that you make a request, it takes a little of time to response, but next requests will be resolved instantly.

The order of the query parameters no matters, we serve successive requests based on the first request result.

For the **Community** plan, the first request will be cached for the next 24 hours.

If you have **Professional** plan, caching is custom, just contact with [hello@microlink.io](mailto:hello@microlink.io).

# API Parameters

## url

*required*<br>
**type**: `string`

The URL for get information based on the content.

```shell
$ curl https://api.microlink.io/1.0?url=https://vimeo.com/188175573
```

## prerender

**type**: `boolean`<br>
**default** `false`

<aside class="notice">
This parameter can be the response time slow, avoid it if you don't really need it.
</aside>

Pre load the URL as a browser before extract the data. Sometimes it's necessary if the content of the url is not server side.

```shell
$ curl https://api.microlink.io/1.0?url=https://www.instagram.com/p/BWUDBntl3_Z&prerender
```

## screenshot

**type**: `boolean`|`string`<br>
**default** `false`

```shell
$ curl https://api.microlink.io/1.0?url=https://github.com&screenshot
```

Take a screenshot of the website.

If you provide the device identifier, the screenshot will be taken according with the device screen dimensions.

<aside class="notice">You can provide device name in lower case.</aside>

### Supported devices

```shell
$ curl https://api.microlink.io/1.0?url=https://github.com&screenshot=ipad
```

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

```shell
$ curl https://api.microlink.io/1.0?url=https://github.com&screenshot&fullpage
```

You can specific options related with the screenshot settings as well.

Parameter    | Description                                           |
------------ | ----------------------------------------------------- |
`type`             | **string** Specify screenshot type, could be either `'jpeg'` or `'png'` (defaults is `'png'`). |
`quality`  | **number** The quality of the image, between `0` to `100`. Not applicable to `'png'` images. |
`omitbackground`          | **boolean** Hides default white background and allows capturing screenshots with transparency (default to `true`). |
`fullpage`          | **boolean** When `true`, takes a screenshot of the full scrollable page. (default to `false`). |
`width`          | **number** Page width in pixels. |
`height`          | **number** Page height in pixels. |
`ismobile`          | **boolean** Whether the meta viewport tag is taken into account (default to `false`). |
`hastouch`          | **boolean or string** Specifies if viewport supports touch events. (default to `false`). |
`islandscape`          | **boolean** Specifies if viewport is in landscape mode (defaults to `false`). |
`devicescalefactor`          | **number** Specify device scale factor (defaults to `1`). |
  
## palette

**type**: `boolean`<br>
**default** `false`

```shell
$ https://api.microlink.io/1.0?url=https://news.ycombinator.com&palette
```

Get palette colors from the images detected. It will returns an `Array` of colors sorted from most dominant colours to least.

# API Endpoint

## Extract information from any link

**HTTP Request**: `GET http://api.microlink.io/v1/`

Given an URL, returns all the information extracted from the content.

## Embed information from any link

Additionally you can embed whatever field of the response.

The thing you need to do for enable it is provide `embed` as query parameter, following by the value related to the data.

**HTTP Request**: `GET http://api.microlink.io/v1/{field}/`

Given an URL, it will return the field extracted from the content and specified in the API call.