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
**type**: \`boolean\`|\`string\`<br/>
**default** \`'auto'\`

You define how the content will be searched from the target URL.

Prerendering is a technique for retrieving the HTML content simulating the user browser navigation.

Although it will provide better data, it will take more time to respond. Most popular services do not need it.

In order to improve the response timing, we provide an **auto** value by default. This means that the service will determinate if the target URL need or not use prerendering technique.
`,
    markdown(components)`
If you want to enable/disable prerendering, do it explicitly

${<TerminalInput>curl https://api.microlink.io/?url=https://reddit.com&prerender=false</TerminalInput>}
`
  ]
]
      }
    />
  )
}

export default immutable(Parameters)
