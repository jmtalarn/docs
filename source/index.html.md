---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - ruby
  - python
  - javascript

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>
search: true
---

# Getting Started

[microlink.io](https://microlink.io) is an API for extract information fron any URL.

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
- Get palette colors of all images detected.

The following documentation is related about all you need to know about the API, like response format, rate limit and configurable parameters.

# Authentication

If you are using **Community** plan, then you don't have any kind of authentication, but be careful about reach daily [rate limit](#rate-limit).

For **Professional** plan, authentication will be done providing your `API_KEY_SECRET` as `key` parameter into your query request:

```bash
$ curl custom.microlink.io?key=yeahboi&url=https://kikobeats.com
```

# Rate limit

For **Community** plan, we allow a maximum of 100 requests per 24h hours per each client connection.

Under **Professional** plan, there is not rate limit.

# Response Format

All the responses as serve as **JSON** using [JSend](https://labs.omniti.com/labs/jsend) format specification.

This means that every microlink API response has the fields describes below.

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

*required*<br>
**type**: `object`

Your API response payload. Here you can found all the information related with the link provided, like `description`, `title`, `image`, etc.

## message

**type**: `string`|`object`

An optional field to attach extra information, like error message or explanation.

# Caching level

We follow a query caching politic for successive and same parameters request in order to provide fast response after the first request.

The first time that you make a request, it takes a little of time to response, but next requests will be resolved instanly.

The order of the query parameters no matters, we serve successive requests based on the first request result.

For the **Community** plan, we cached the original request as a maximum time of 24 hours, so every day we reset our caching layer for be possible fetch new content.

If you have **Professional** plan, caching time can be adapted, just contact with [hello@microlink.io](mailto:hello@microlink.io).

# API Parameters

## url

*required*<br>
**type**: `string`

The URL for extract the data based on the content.

## prerender

**type**: `boolean`<br>
**default** `false`

Pre load the URL as a browser before extract the data.

## screenshot

**type**: `boolean`|`string`<br>
**default** `false`

Take a screenshot of the website.

Prodiving a text value as one of the supported device identifier the screenshot will be taken according with the device screen dimensions.

### Supported devices

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
`omitBackground`          | **boolean** Hides default white background and allows capturing screenshots with transparency (default to `false`). |
`fullPage`          | **boolean** When `true`, takes a screenshot of the full scrollable page. (default to `false`). |
`width`          | **number** Page width in pixels. |
`height`          | **number** Page height in pixels. |
`isMobile`          | **boolean** Whether the meta viewport tag is taken into account (default to `false`). |
`hasTouch`          | **boolean or string** Specifies if viewport supports touch events. (default to `false`). |
`isLandscape`          | **boolean** Specifies if viewport is in landscape mode (defaults to `false`). |
`deviceScaleFactor`          | **number** Specify device scale factor (defaults to `1`). |
  
## palette

**type**: `boolean`<br>
**default** `false`

Get palette colors from the images detected. It will returns an `Array` of colors sorted from most dominant colour to least.

# API endpoint

## Extract information from any link

**HTTP Request**: `GET http://api.microlink.io/v1/`

Given an URL, returns all the information extracted from the content.

## Embed information from any link

**HTTP Request**: `GET http://api.microlink.io/v1/{field}/`

Given an URL, it will return the field extracted from the content and specified in the API call.