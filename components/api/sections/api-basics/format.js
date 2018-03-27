import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import { InlineCode } from '../../../text/code'
import immutable from '../../../../lib/immutable-component'
import { HeadersTable, Row, Cell, BoldCell } from '../../table'

function Format() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
All the responses are served as **JSON** – unless you use the [embedded support](#embedded).

Our response format is based on [JSend](https://labs.omniti.com/labs/jsend) specification.

This means that every API call generates a response with \`status\`, \`data\` and \`message\` fields.

## status

*required*<br />
**type**: \`string\`

The status associated with the response. The value can be:

${<HeadersTable headers={['Status', 'Description']}>
  <Row>
    <BoldCell>success</BoldCell>
  <Cell>The request was resolved successfully. Associated with <InlineCode>2xx</InlineCode> HTTP status code.</Cell>
  </Row>
  <Row>
    <BoldCell>fail</BoldCell>
  <Cell>The request failed. Probably a missing or wrong value for a parameter. Associated with <InlineCode>4xx</InlineCode> HTTP status code.</Cell>
  </Row>
  <Row>
    <BoldCell>error</BoldCell>
  <Cell>Uh oh. Something unexpected happened. Associated with <InlineCode>5xx</InlineCode> HTTP status code.</Cell>
  </Row>
</HeadersTable>}

A simple rule here is, if the request was resolved successfully, then the \`success\` status will be associated. In other case check for \`fail\` or \`error\`.

## data

**type**: \`object\`

Your API response payload. Here you can find all the information related with the link provided, like \`description\`, \`title\`, \`image\`, etc.

## message

**type**: \`string\`

An additional field to attach extra information, such as an error message or explanation.
    `
  ]
]
      }
    />
  )
}

export default immutable(Format)
