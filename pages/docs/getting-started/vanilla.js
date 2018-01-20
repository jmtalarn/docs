import markdown from 'markdown-in-js'
import MicrolinkCard from 'react-microlink'

import withDoc, { components } from '../../../lib/with-doc'

import { kiko } from '../../../lib/data/team'
import { TerminalInput } from '../../../components/text/terminal'
import { Code } from '../../../components/text/code'
import { InternalLink } from '../../../components/text/link'

// prettier-ignore
export default withDoc({
  title: 'Vanilla',
  date: '19 January 2018',
  authors: [kiko],
})(markdown(components)`

## Installation

It is available as a [npm package](https://www.npmjs.com/package/microlinkjs):

${<TerminalInput>{`npm install microlinkjs --save`}</TerminalInput>}

Optionally you can link it directly from the **CDN** as well:

${<Code>{`<!-- Microlink SDK Vanilla/UMD bundle -->
<script type="text/javascript" src="//unpkg.com/microlinkjs@latest/umd/microlink.min.js"></script>
`}</Code>}

${<Code>{`<!-- Microlink SDK AMD bundle -->
<script type="text/javascript" src="//unpkg.com/microlinkjs@latest/amd/microlink.min.js"></script>
`}</Code>}

${<Code>{`<!-- Microlink SDK CJS bundle -->
<script type="text/javascript" src="//unpkg.com/microlinkjs@latest/cjs/microlink.min.js"></script>
`}</Code>}

## Basic Usage

Microlink SDK provides the \`microlink\` method which takes a CSS selector (similar to jQuery/Zepto) for targeting elements you want to convert into beautiful preview cards.

Here are some usage examples:

${<Code>{`<script>
  // Example 1
  // Replace all \`a\` tags for microlink cards
  microlink('a')

  // Example 2
  // Replace all elements with \`link-preview\` class
  // for microlink cards
  microlink('.link-previews')

  // Example 3
  // Replace all elements with \`link-preview\` class
  // for microlink cards, passing API specific options
  microlink('.link-previews', { rounded: true })
</script>
`}</Code>}

## Don't runt it too late!

You need to add **microlink** to the page early in the page load.

We recommend call \`microlink\` method before the DOM finishes loading:

${<Code>{`<!-- Add microlink before the closing body tag. -->
<script type="text/javascript" src="//unpkg.com/microlinkjs@latest/umd/microlink.min.js"></script>

<!-- Call microlink for replacing links for cards previews -->
<script>
  microlink('.link-preview')
</script>
</body>
`}</Code>}

...or on DOMContentLoaded:

${<Code>{`<script>
  // Replace all elements with \`link-preview\` class
  // after DOM loaded
  document.addEventListener('DOMContentLoaded', function (event) {
    microlink('.link-previews')
  })
</script>
`}</Code>}

## Customization

You can pass specific ${<InternalLink href="/api">API parameters</InternalLink>} to \`microlink\` as second argument:

${<Code>{`<script>
// Replace all elements with \`link-preview\` class
// for microlink round cards
microlink('.link-previews', {
  round: true
})
</script>
`}</Code>}

These options will be applied for all the microlink cards.

If you want to provide specific options, you can provide it as \`data-attribute\` in the HTML markup of each element:

${<Code>{`<a class="link" data-round="true" href="http://microlink.js.org">microlink.js.org</a>`}</Code>}

Check ${<InternalLink href="#static-deployment">API parameters</InternalLink>} reference in order to know what options you can use.

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
  url="https://vimeo.com/188175573"
  style={{
    fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
    maxWidth: '100%'
  }}
/>}
`)
