import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import { Code } from '../../../text/code'
import { TerminalInput } from '../../../text/terminal'
import immutable from '../../../../lib/immutable-component'
import { B } from '../../../text/paragraph'

function Cache() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
In order to use the lowest bandwidth capacity possible, microlink supports **brotli** and **gzip** compression.

Compression could reduce the payload size up to 70%, so we strongly recommend always use it.

If you are performing the API request using a web browser or our [SDK](https://docs.microlink.io/sdk/), compression will be enabled by default.

Otherwise, ensure to specify it using [Accept-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) header.
`
  , markdown(components)`
As part of the negotiation process you need to specify \`accept-encoding\` header for indicate what encoding you want to use:

${<TerminalInput>curl -H "<B>accept-encoding</B>: br,gzip" -I -X GET https://api.microlink.io/?url=https%3A%2F%2Fwww.reddit.com | grep -i "content-encoding"</TerminalInput>}

Check the \`content-encoding\` header in the response for determinate what encoding was used:

${<Code syntax="json">{`Content-Encoding: br`}</Code>}
  `
  ]
]
      }
    />
  )
}

export default immutable(Cache)
