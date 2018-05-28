import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import { Code, InlineCode } from '../../../text/code'
import { TerminalInput } from '../../../text/terminal'
import immutable from '../../../../lib/immutable-component'
import { HeadersTable, Row, Cell, BoldCell } from '../../table'
import { ExternalLink } from '../../../text/link'
import { B } from '../../../text/paragraph'

function Parameters() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
**type**: \`boolean\`<br />
**default** \`false\`

Enabling it will return you more information related with color schema of the images detected:

${<HeadersTable headers={['Field', 'Description']}>
  <Row>
    <BoldCell>palette</BoldCell>
  <Cell><strong style={{display: 'block'}}>array</strong>A collection of hexadecimal colors from most dominant color to least.</Cell>
  </Row>
  <Row>
    <BoldCell>background_color</BoldCell>
    <Cell>
      <strong style={{display: 'block'}}>string</strong>
      The best color with good <ExternalLink href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">WCAG contrast ratio</ExternalLink> that can be used as background color representation of the image.
    </Cell>
  </Row>
  <Row>
    <BoldCell>color</BoldCell>
    <Cell>
      <strong style={{display: 'block'}}>string</strong>
      The best color  overlayed over <InlineCode>background_color</InlineCode>.
    </Cell>
  </Row>
  <Row>
    <BoldCell>alternative_color</BoldCell>
    <Cell>
      <strong style={{display: 'block'}}>string</strong>
      It will be the second best color. If there are only two colors parsed, it will default to <InlineCode>color</InlineCode>.
    </Cell>
  </Row>
</HeadersTable>}
`,
    markdown(components)`

Adding \`palette\` as query string parameter in your API call makes it possible to get more information about your images color composition:

${<TerminalInput>curl https://api.microlink.io/?url=https://news.ycombinator.com&<B>palette</B>&filter=image</TerminalInput>}

${<Code syntax="json">{`{
  "status": "success",
  "data": {
    "image": {
      "width": 18,
      "height": 18,
      "type": "gif",
      "url": "https://news.ycombinator.com/y18.gif",
      "palette": [
        #fc6404",
        "#fca46c",
        "#833301"
      ],
      "background_color": "#FCA46C",
      "color": "#712D01",
      "alternative_color": "#813201"
    }
  }
}`}</Code>}

`
  ]
]
      }
    />
  )
}

export default immutable(Parameters)
