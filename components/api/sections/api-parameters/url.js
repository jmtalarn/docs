import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import { TerminalInput } from '../../../text/terminal'
import immutable from '../../../../lib/immutable-component'
import { B } from '../../../text/paragraph'

function Url() {
  return (
    <Section
      contents={[
        // prettier-ignore
        [
          markdown(components)`
*required*<br />
**type**: \`string\`

The URL for getting information based on the content.
`, markdown(components)`
At least you need to provide an \`url\` to get information

${<TerminalInput>curl https://api.microlink.io/?<B>url</B>=https://theverge.com</TerminalInput>}
`
        ]
      ]}
    />
  )
}

export default immutable(Url)
