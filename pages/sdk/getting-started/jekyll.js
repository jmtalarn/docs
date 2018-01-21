import markdown from 'markdown-in-js'
import MicrolinkCard from 'react-microlink'

import withDoc, { components } from '../../../lib/with-doc'

import { kiko } from '../../../lib/data/team'
import { Code } from '../../../components/text/code'
import { InternalLink } from '../../../components/text/link'

const DEMO_LINK = 'http://overwatch.wikia.com/wiki/Sombra'

// prettier-ignore
export default withDoc({
  title: 'Jekyll',
  date: '20 January 2018',
  authors: [kiko],
})(markdown(components)`

## Installation

The Jekyll integration is pretty similar to ${<InternalLink href="/docs/getting-started/vanilla">vanilla</InternalLink>} approach.

Just you need to be sure to load the script. For example, at the end of \`_layouts/default.html\`:

${<Code>{`
<script type="text/javascript" src="//unpkg.com/microlinkjs@latest"></script>
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    microlink('.card-preview', {round: true})
  });
</script>
`}</Code>}

## Basic Usage

In the code above, we are associating microlink cards with the class \`card-preview\`, so now, when we write a new markdown post, we are going to use the \`card-preview\` class to associate the link:

${<Code>{`[](https://blog.codinghorror.com/computers-are-lousy-random-number-generators){:.card-preview}`}</Code>}

${<MicrolinkCard
  url={`${DEMO_LINK}`}
  style={{margin: 'auto'}}
/>}

You can pass custom option as well:

${<Code>{`[](https://www.random.org/randomness){:.card-preview data-image="logo"}`}</Code>}

${<MicrolinkCard
  url={`${DEMO_LINK}`}
  image={['logo']}
  style={{margin: 'auto'}}
/>}

## Styling

We don't inject any CSS in your application. The card previsualization is shipped with a default minimal inline style.

If you need to adapt the *look and feel*, each component of the card has been assigned a [BEM](http://getbem.com/introduction) class name:

- **microlink_card**: The root \`div\` of the card.
- **microlink_card__image**: The wrapper \`div\` around the image preview of the link.
- **microlink_card__content**: The wrapper \`div\` around the content preview of the link.
- **microlink_card__content_title**: The \`p\` tag of the card title.
- **microlink_card__content_description**: The \`p\` tag of the card description.
- **microlink_card__content_url**: The \`span\` tag of the card url link.

In order to apply your specific style, just declare your custom CSS rules using the properly class name.

For example, lets modify the font family used in the preview cards:

${<Code>{`<style>
  .microlink-card {
    font-family: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace';
    max-width: 100%;
  }
</style>
`}</Code>}

and voilá!

${<MicrolinkCard
  url={`${DEMO_LINK}`}
  style={{
    fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
    maxWidth: '100%'
  }}
/>}

`)
