import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
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

Specify the user agent to be used in the moment of extract the content of the target URL.

Normally you don't need to specify this value but some websites can be different output based on User Agent.
`
  ]
]
      }
    />
  )
}

export default immutable(Parameters)
