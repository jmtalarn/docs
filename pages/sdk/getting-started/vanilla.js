import markdown from 'markdown-in-js'

import withDoc, { components } from '../../../lib/with-doc'

import { kiko } from '../../../lib/data/team'
import { TerminalInput } from '../../../components/text/terminal'
import { Code } from '../../../components/text/code'
import { InternalLink } from '../../../components/text/link'
import CardClassNames from '../../../components/card-classnames'
import MicrolinkCard from '../../../components/microlink'

const DEMO_LINK =
  'https://www.theverge.com/2017/11/16/16667366/tesla-semi-truck-announced-price-release-date-electric-self-driving'

// prettier-ignore
export default withDoc({
  title: 'Vanilla',
  date: '19 January 2018',
  authors: [kiko]
})(markdown(components)`

## Installation

It is available as a [npm package](https://www.npmjs.com/package/microlinkjs):

${<TerminalInput>{`npm install microlinkjs --save`}</TerminalInput>}

Optionally you can link it directly from the **CDN** as well:

${<Code>{`<!-- Microlink SDK Vanilla/UMD bundle -->
<script src="//cdn.jsdelivr.net/npm/microlinkjs@latest/umd/microlink.min.js"></script>
`}</Code>}

${<Code>{`<!-- Microlink SDK AMD bundle -->
<script src="//cdn.jsdelivr.net/npm/microlinkjs@latest/amd/microlink.min.js"></script>
`}</Code>}

${<Code>{`<!-- Microlink SDK CJS bundle -->
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/microlinkjs@latest/cjs/microlink.min.js"></script>
`}</Code>}

## Basic Usage

Microlink SDK provides the \`microlink\` method which takes a CSS selector (similar to jQuery/Zepto) to target elements you want to convert into beautiful preview cards.

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
  microlink('.link-previews')
</script>
`}</Code>}

${<MicrolinkCard
  url={`${DEMO_LINK}`}
  style={{margin: 'auto'}}
/>}

## Don't run it too late!

You need to add **microlink** to the page early in the page load.

We recommend calling the \`microlink\` method before the DOM finishes loading:

${<Code>{`<!-- Add microlink before the closing body tag. -->
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/microlinkjs@latest/umd/microlink.min.js"></script>

<!-- Call microlink to replace links with cards previews -->
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

You can pass specific ${<InternalLink href='/api'>API parameters</InternalLink>} to \`microlink\` as a second argument:

${<Code>{`<script>
// Replace all elements with \`link-preview\` class
// for microlink large cards
microlink('.link-previews', {
  size: 'large'
})
</script>
`}</Code>}

${<MicrolinkCard
  url={`${DEMO_LINK}`}
  style={{margin: 'auto'}}
  round
/>}

You can also pass parameters as a \`data-attribute\` in the HTML markup of each element:

${<Code>{`<a class="link" data-size="large" href="http://microlink.js.org">microlink.js.org</a>`}</Code>}

${<MicrolinkCard
  url={`${DEMO_LINK}`}
  style={{margin: 'auto'}}
  size='large'
  round
/>}

Check ${<InternalLink href='#static-deployment'>API parameters</InternalLink>} reference in order to know what options you can use.

## Styling

${<CardClassNames />}

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

## Recipes

### Specifying a selector

You need to pass a selector to \`microlink\` in order to replace them with beautiful link previews.

Probably if you do that for all \`a\` present in the site, the result will not be as you expected: The selector's too generic.

A better strategy could be use a class and associate the class with the elements that you want to convert into links previews.

For example, you can use \`.link-preview\` for this purpose in your HTML markup:

${<Code>{`<p>
  <a class="link-preview" href="https://github.com/zeit/next.js/"></a>
</p>`}</Code>}

and then initialize \`microlink\` for these links:

${<Code>{`<script>
microlink('.link-preview')
</script>
`}</Code>}

Also, you can associate a minimal CSS style for these links.

The following CSS adds some basic style resets to your link previews, also center aligning them horizontally:

${<Code>{`<style>
  .link-preview {
    margin: auto;
    display: block;
    font-weight: normal;
    text-decoration: none;
    max-width: 500px;
  }
</style>
`}</Code>}
`)
