import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import immutable from '../../../../lib/immutable-component'

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

Under a **Professional** plans, the endpoint is \`https://pro.microlink.io\`.

Just call \`/\` with method \`GET\`. Nothing else.
`
  ]
]
      }
    />
  )
}

export default immutable(Endpoint)
