import markdown from 'markdown-in-js'
import React from 'react'
import Section, { components } from '../../section'
import { Code } from '../../../text/code'
import { ExternalLink } from '../../../text/link'
import { HeadersTable, Row, Cell, BoldCell } from '../../table'
import immutable from '../../../../lib/immutable-component'
import { TerminalInput } from '../../../text/terminal'

function RateLimit() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`

For the **Free** plan, we allow a maximum of **500 requests every 24 hours** and **one request per second**.

We limit the number of calls you can make over a certain period of time.
Rate limits vary and are specified by the following header in all responses:

${<HeadersTable>
  <Row>
    <BoldCell>X-Rate-Limit-Limit</BoldCell>
    <Cell>The maximum number of requests that the consumer is permitted to
    make per minute.</Cell>
  </Row>
  <Row>
    <BoldCell>X-Rate-Limit-Remaining</BoldCell>
    <Cell>The number of requests remaining in the current rate limit window.</Cell>
  </Row>
  <Row>
    <BoldCell>X-Rate-Limit-Reset</BoldCell>
    <Cell>The time at which the current rate limit window resets in UTC
    epoch seconds.</Cell>
  </Row>
</HeadersTable>}

Under the **Professional** plan, rate limits start from **1,000 requests every 24 hours** with **unlimited concurrency**.

When the rate limit is **exceeded** an error is returned with the status **429 Too Many Requests**.

When you exceeded your daily quota, you need to wait until quota reset or increment your plan. See [pricing](https://microlink.io/#pricing) for more information.

If you already have a **Professional** plan but you need to increment your daily quota, ${<ExternalLink href="mailto:hello@microlink.io?subject=Increment API quota">contact us</ExternalLink>}.
    `,
    markdown(components)`

You can check your rate limit quota with \`x-rate\` header on the response:

${<TerminalInput>curl --header "x-api-key: MyApiToken" https://pro.microlink.io?url=http://a.co/cWDWLda -i | grep -i "x-pricing-plan"</TerminalInput>}

It should be looks like:

${<Code syntax="json">{`x-rate-limit-reset: 86400
  x-rate-limit-remaining: 497
  x-rate-limit-limit: 500
`}</Code>}
    `
  ]
]
      }
    />
  )
}

export default immutable(RateLimit)
