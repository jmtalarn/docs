import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import immutable from '../../../../lib/immutable-component'
import { InternalLink } from '../../../text/link'

function Parameters() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
**type**: \`boolean\`<br/>
**default** \`false\`

By default the API will be cache consecutive API calls. See ${<InternalLink href="#api-basics/cache">cache</InternalLink>} section for more information.

This parameter has been designed to invalidate the cache responses, avoiding the minimum time necessary to revalidate them.

Providing it, you are forcing to invalidate the current state of the cache for the response and generate a new one.
`
  ]
]
      }
    />
  )
}

export default immutable(Parameters)
