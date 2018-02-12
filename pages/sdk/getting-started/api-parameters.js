import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { kiko } from '../../../lib/data/team'

// prettier-ignore
export default withDoc({
  title: 'API Parameters',
  date: '19 January 2018',
  authors: [kiko],
})(markdown(components)`

## url

*Required*<br/>
Type: \`string\`

The URL for which to retrieve Microlink data.

## apiEndpoint

Type: \`string\`<br/>
Default: \`'https://api.microlink.io'\`

The API endpoint where the request is made.

## apiKey

Type: \`string\`<br/>
Default: \`undefined\`

The API Key used for authenticating your requests as \`x-api-key\` header.

See more at [docs.microlink.io#authentication](https://docs.microlink.io/#authentication).

The API endpoint where the request is made.

## contrast

Type: \`boolean\`<br/>
Default: \`false\`

When enabled, it will generate a high contrast card based on predominant colors detected in the feature image from the provided \`url\`.

## image

Type: \`string|array\`<br/>
Default: \`['screenshot', 'image', 'logo']\`

Setup the image to use for the card.

The value will be determined the property to get from the [API response](https://docs.microlink.io). If you set up the value as an \`array\` of values, then they will be applied as fallback values until finding the first value that resolves.

## is

Type: \`string\`<br/>
Default: \`'a'\`

Determine the type of the root node element for rendering the card.

## round

Type: \`boolean|string\`<br/>
Default: \`false\`

Determine if the card preview should have round corners or not.

If you provided a \`string\` value, it will be passed as the \`border-radius\`.

## size

Type: \`string\`<br/>
Default: \`'normal'\`

It determines the card layout. Currently we have two layouts supported:

- \`'normal'\` (default, no parameter required).
- \`'large'\`

## prerender

Type: \`boolean\`<br/>
Default: \`true\`

Perform an API call using [prerender](https://docs.microlink.io/#prerender) feature.

## screenshot

Type: \`boolean|string\`<br/>
Default: \`false\`

Take a [screenshot](https://docs.microlink.io/#screenshot) of the target url and use it as card image.

## autoPlay

Type: \`boolean\`<br/>
Default: \`true\`

Determinate if the video will automatically start playing as soon as it can do so without stopping.

## muted

Type: \`boolean\`<br/>
Default: \`true\`

It specifies that the audio output of the video should be muted.

## loop

Type: \`boolean\`<br/>
Default: \`true\`

It specifies that the video will start over again, every time it is finished.
`)
