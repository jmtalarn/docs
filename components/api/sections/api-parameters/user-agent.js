import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import immutable from '../../../../lib/immutable-component'
import { TerminalInput } from '../../../text/terminal'
import { B } from '../../../text/paragraph'

function Parameters() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
**type**: \`string\`

Specify the user agent to be used in the moment of extract the content of the target URL.

Normally you don't need to specify this value but some websites can be different output based on User Agent.
`, markdown(components)`
Some websites can serve image format on [WebP](https://en.wikipedia.org/wiki/WebP) when they detect you are browsing using Chrome:

${<TerminalInput>curl https://api.microlink.io/?url=https://vimeo.com/188175573&<B>userAgent</B>=Chrome%20mobile</TerminalInput>}
`
  ]
]
      }
    />
  )
}

export default immutable(Parameters)
