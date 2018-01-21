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

Just call \`/\` with method GET. Nothing else.

All request and response bodies, including errors, are encoded in \`Content-Type: application/json\`.
    `
  ]
]
      }
    />
  )
}

export default immutable(Endpoint)
