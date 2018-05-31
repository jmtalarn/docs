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

**type**: \`boolean\`<br />
**default** \`false\`

> **NOTE**: It makes response time a bit slower.

By default, the API can only detect video content present in the HTML markup of the target URL.

Enabling \`video\` parameter makes possible detect the original streaming video source.

This is useful specially when you are working with video contente sites like YouTube, Instagram, Vimeo, etc.
`,
  markdown(components)`
Extending the video content is useful specially when you are working with visual content, like link previews

${<TerminalInput>curl https://api.microlink.io/?url=https://instagram.com/p/BeV6tOhFUor&<B>video</B></TerminalInput>}
`
  ]
]
      }
    />
  )
}

export default immutable(Parameters)
