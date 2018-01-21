import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import { Code } from '../../../text/code'
import { TerminalInput } from '../../../text/terminal'
import immutable from '../../../../lib/immutable-component'
import { ExternalLink, InternalLink } from '../../../text/link'

function Cache() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
In order to improve response timing, we follow a query caching policy for successive API calls.

- The first time you query for a resource that not was previously served, we will create it.
- The successive requests for the resource will consume the cached version of the resource.

The order of the query parameters doesn't matter.

For the **Free** plan, the first request will be cached for the next 5 days.

If you have the **Professional** plan, your caching policy can be custom, adapting the expiration to your user case. Please, ${<ExternalLink href="mailto:hello@microlink.io?subject=Adjust request cache">contact us</ExternalLink>}.

If you want to invalidate a response cache and regenerate the cache value you should use the ${<InternalLink href="#force">force</InternalLink>} parameter.
`
  , markdown(components)`
The first time an uncached resource is queried, the API will extract the information from the link:

${<TerminalInput>curl https://api.microlink.io/?url=https%3A%2F%2Fwww.reddit.com | grep -i "x-cache"</TerminalInput>}

You can check that from \`x-cache\` headers of the response. First time, the value will be \`MISS\`:

${<Code syntax="json">{`x-cache: MISS`}</Code>}

Now if you query again for the same resource, a cached version will be served based on the first request, and \`X-Cache\` value will be \`HIT\`:

${<Code syntax="json">{`x-cache: HIT`}</Code>}
  `
  ]
]
      }
    />
  )
}

export default immutable(Cache)
