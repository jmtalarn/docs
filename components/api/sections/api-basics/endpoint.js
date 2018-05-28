import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import immutable from '../../../../lib/immutable-component'
import { TerminalInput } from '../../../text/terminal'
import { B } from '../../../text/paragraph'

function Endpoint() {
  return (
    <Section
      title="Endpoint"
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
The API is shipped as a microservice exposed as an HTTP service over SSL.

For the **Free** plan, the endpoint is \`https://api.microlink.io\`

Under a **Professional** plan, the endpoint is \`https://pro.microlink.io\`.

Just call \`/\` with method \`GET\`. Nothing else.
`,
    markdown(components)`
The API Parameters need to be provided as query parameters in the request.

${<TerminalInput>curl https://api.microlink.io?url=https://www.instagram.com/p/BeV6tOhFUor&<B>userAgent</B>=myBrowser</TerminalInput>}

It does not matter if you use a camel or snake case, both are supported

${<TerminalInput>curl https://api.microlink.io?url=https://www.instagram.com/p/BeV6tOhFUor&<B>user_agent</B>=myBrowser</TerminalInput>}
`
  ]
]
      }
    />
  )
}

export default immutable(Endpoint)
