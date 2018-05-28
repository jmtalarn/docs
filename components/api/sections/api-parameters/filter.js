import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import { Code } from '../../../text/code'
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
**type**: \`string\`

A comma-separated list of property paths to pick from response payload.

It supports nested path as well using dot notation.

This parameter has been designed to make API payload tiny as possible, improving response bandwidth timing.
`,
    markdown(components)`

It's a good practice to filter just the values that you're going to consume:

${<TerminalInput>curl curl https://api.microlink.io/?url=https://news.ycombinator.com&filter=url,title</TerminalInput>}

${<Code syntax="json">{`{
  "status": "success",
  "data": {
    "url": "https://news.ycombinator.com/",
    "title": "Hacker News"
  }
}
`}</Code>}
`
  ]
]
      }
    />
  )
}

export default immutable(Parameters)
