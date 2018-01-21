import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import { Code } from '../../../text/code'
import immutable from '../../../../lib/immutable-component'

function Parameters() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
## url

**type**: \`string\`

The embed parameter is for embedding a field directly in your HTML markup, using the properly encoding (text, images, etc).

You can use dot notation to reference a nested data field of the payload.

For example, if you want to embed an image just provide \`embed=image.src\` and the image will be rendered.
`,
    markdown(components)`

You can call the API directly from a html tag:

${<Code syntax="json">{`<img
  src="https://api.microlink.io?url=https://news.ycombinator.com&embed=logo"
/>
`}</Code>}

It will render the hacker news logo:

${<img
  src="https://api.microlink.io?url=https://news.ycombinator.com&embed=logo"
  style={{width: '64px', marginTop: '.5rem'}}
/>}
`
  ]
]
      }
    />
  )
}

export default immutable(Parameters)
