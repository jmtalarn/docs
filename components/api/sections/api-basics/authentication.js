import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import { Code, InlineCode } from '../../../text/code'
import { TerminalInput } from '../../../text/terminal'
import immutable from '../../../../lib/immutable-component'
import { ExternalLink } from '../../../text/link'
import { B } from '../../../text/paragraph'

function Authentication() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
We apply different API quota based [pricing](https://microlink.io#pricing) plans.

Unauthenticated requests use **Free** plans. It doesn't need to do nothing additional.

Under a **Professional** plans, you need to authenticate your requests.

It should be done providing the header \`x-api-key\` with your API Key as value in all your requests.

If you have any trouble, please ${<ExternalLink href="mailto:hello@microlink.io?subject=Problem with API Authentication">contact us</ExternalLink>}.
`,
    markdown(components)`
The authentication will be done adding your API Key as value of the  ${<InlineCode>x-api-key</InlineCode>} header on your requests:

${<TerminalInput>curl --header "<B>x-api-key</B>: MyApiToken" https://pro.microlink.io?url=http://a.co/cWDWLda -i | grep -i "x-pricing-plan"</TerminalInput>}

You can check the pricing plan associated with the request with \`x-pricing-plan\` header on the response:

${<Code syntax="json">{`x-pricing-plan: pro`}</Code>}
`
  ]
]
      }
    />
  )
}

export default immutable(Authentication)
