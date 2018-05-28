import markdown from 'markdown-in-js'

import withDoc, { components } from '../../../lib/with-doc'

import { kiko } from '../../../lib/data/team'
import { TerminalInput } from '../../../components/text/terminal'
import { InternalLink } from '../../../components/text/link'
import { Code } from '../../../components/text/code'
import CardClassNames from '../../../components/card-classnames'
import MicrolinkCard from '../../../components/microlink'

const DEMO_LINK =
  'https://www.theverge.com/tldr/2018/2/7/16984284/tesla-space-falcon-heavy-launch-elon-musk'

// prettier-ignore
export default withDoc({
  title: 'React',
  date: '19 January 2018',
  authors: [kiko]
})(markdown(components)`

## Installation

It is available as a [npm package](https://www.npmjs.com/package/react-microlink):

${<TerminalInput>{`npm install react-microlink styled-components --save`}</TerminalInput>}

Then you can interact with it as a regular React component:

${<Code>{`import MicrolinkCard from 'react-microlink'

// Just provide a URL to create a card
<MicrolinkCard
  url='${DEMO_LINK}'
/>
`}</Code>}

${<MicrolinkCard
  url={`${DEMO_LINK}`}
  style={{margin: 'auto'}}
/>}

${<Code>{`import MicrolinkCard from 'react-microlink'

// Customizing the card
<MicrolinkCard
  url='${DEMO_LINK}'
  size='large'
/>
`}</Code>}

${<MicrolinkCard
  url={`${DEMO_LINK}`}
  style={{margin: 'auto'}}
  size='large'
/>}

${<Code>{`import MicrolinkCard from 'react-microlink'

// You can pass extra props
<MicrolinkCard
  url='${DEMO_LINK}'
  target='_blank'
/>
`}</Code>}

${<MicrolinkCard
  url={`${DEMO_LINK}`}
  style={{margin: 'auto'}}
/>}

Check the ${<InternalLink href='#static-deployment'>API reference</InternalLink>} in order to know what options you can use.

## Styling

We don't inject any CSS in your application. The card previsualization is shipped with a default minimal inline style.

In order to make easy adapt *look and feel*, we provide different approach for customizing the style.

### Using CSS Selectors

${<CardClassNames />}

This is the approach used to support customization using [CSS Modules](https://github.com/css-modules/css-modules) or similar approaches in the React ecosystem using CSS class names:

${<Code>{`<style>
  .microlink-card {
    font-family: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace';
  }
</style>
`}</Code>}

### Using inline style

By default, the card's components are shipped with a default and minimal style.

The component itself accepts a \`style\` property. You can use this to add your own inline styles, like:

${<Code>{`<MicrolinkCard
  url="https://vimeo.com/188175573"
  style={{fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace'}}
/>
`}</Code>}

Also, this is the approach used for more high level abstraction; like [fela](http://fela.js.org), [styled components](https://www.styled-components.com) or other similar JSS solutions:

${<Code>{`import MicrolinkCard from 'react-microlink'
import styled from 'styled-components'

const myCustomCard = styled(MicrolinkCard)\`
  font-family: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace';
  max-width: 100%;
  border-radius: .42857em;
\`
`}</Code>}

and voilá!

${<MicrolinkCard
  url={`${DEMO_LINK}`}
  style={{
    fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
    maxWidth: '100%',
    borderRadius: '.42857em'
  }}
/>}
`)
