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

## apiKey

Type: \`string\`<br/>
Default: \`undefined\`

The API Key used for authenticating your requests as \`x-api-key\` header.

See more at [docs.microlink.io#authentication](https://docs.microlink.io/#authentication).

The API endpoint where the request is made.

## data

Type: \`object\`<br/>
Default: \`undefined\`

The content rendered onto the card. This property can be used for two purposes:

- If you made an API call outside of the microlink component - and you want to render _that_ data - pass the payload response here in order to avoid making the request again.
- If you want to render custom content inside the card, pass it following the [API payload schema](https://docs.microlink.io/api/#introduction).

## contrast

Type: \`boolean\`<br/>
Default: \`false\`

When enabled, it will generate a high contrast card based on predominant colors detected in the feature image from the provided \`url\`.

## image

Type: \`string|array\`<br/>
Default: \`['screenshot', 'image', 'logo']\`

Setup the image to use for the card.

The value will be determined the property to get from the [API response](https://docs.microlink.io). If you set up the value as an \`array\` of values, then they will be applied as fallback values until finding the first value that resolves.

## reverse

Type: \`boolean\`<br/>
Default: \`false\`

Reverses the (flex) direction of the card:

- On a \`normal\` card, the media will appear to the right of the content.
- On a \`large\` card, the media will appear below the content.

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

- \`'normal'\`: Displays the regular summary card (default, no parameter required).
- \`'large'\`: Displays the large summary card.

## prerender

Type: \`boolean|string\`<br/>
Default: \`auto\`

It determines the technique used to get content from the target URL.

Read more about [prerender](https://docs.microlink.io/#prerender).

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

It specifies that the video will start over again, every time it finishes.

## controls

Type: \`boolean\`<br/>
Default: \`true\`

Display UI controls to handle playing/pausing the cards video.

## playsInline

Type: \`boolean\`<br/>
Default: \`true\`

Whether the video should play _inline_, on supported devices (<a href="https://webkit.org/blog/6784/new-video-policies-for-ios/" target="_blank">read more</a>).
`)
