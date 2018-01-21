import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import { TerminalInput } from '../../../text/terminal'
import immutable from '../../../../lib/immutable-component'

function Parameters() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
**type**: \`boolean\`<br/>
**default** \`true\`

Preload all elements from the URL in preparation of extracting the data.
`,
    markdown(components)`
If the target url doesn't need prerending, you can explicitly disable it

${<TerminalInput>curl https://api.microlink.io/?url=https://reddit.com&prerender=false</TerminalInput>}
`
  ]
]
      }
    />
  )
}

export default immutable(Parameters)
