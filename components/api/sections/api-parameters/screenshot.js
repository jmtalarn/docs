import markdown from 'markdown-in-js'
import Section, { components } from '../../section'
import { Code, InlineCode } from '../../../text/code'
import { TerminalInput } from '../../../text/terminal'
import immutable from '../../../../lib/immutable-component'
import { HeadersTable, Row, Cell, BoldCell } from '../../table'

const { strong } = components

function Parameters() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`
**type**: \`boolean\`|\`string\`<br />
**default** \`false\`

Take a screenshot of the website. The image will be hosted at [imgur.com](https://imgur.com).

### Device emulation

The API supports take screenshots using different viewport configuration.

In order to setup the viewport settings, we provide \`device\` that it's a list of device presets viewports you can use.

To use it just provide one of the supported device names:

${<HeadersTable
  headers={['device descriptor', 'width', 'height', 'scale', 'mobile?', 'touch?', 'landscape?']}>

  <Row>
    <BoldCell>blackberry z30</BoldCell>
    <Cell>360</Cell>
    <Cell>640</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>blackberry z30 landscape</BoldCell>
    <Cell>640</Cell>
    <Cell>360</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>blackberry playbook</BoldCell>
    <Cell>600</Cell>
    <Cell>1024</Cell>
    <Cell>1</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>blackberry playbook landscape</BoldCell>
    <Cell>1024</Cell>
    <Cell>600</Cell>
    <Cell>1</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>galaxy note 3</BoldCell>
    <Cell>360</Cell>
    <Cell>640</Cell>
    <Cell>3</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>galaxy note 3 landscape</BoldCell>
    <Cell>640</Cell>
    <Cell>360</Cell>
    <Cell>3</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>galaxy note ii</BoldCell>
    <Cell>360</Cell>
    <Cell>640</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>galaxy note ii landscape</BoldCell>
    <Cell>640</Cell>
    <Cell>360</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>galaxy s iii</BoldCell>
    <Cell>360</Cell>
    <Cell>640</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>galaxy s iii landscape</BoldCell>
    <Cell>640</Cell>
    <Cell>360</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>galaxy s5</BoldCell>
    <Cell>360</Cell>
    <Cell>640</Cell>
    <Cell>3</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>galaxy s5 landscape</BoldCell>
    <Cell>640</Cell>
    <Cell>360</Cell>
    <Cell>3</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>kindle fire hdx</BoldCell>
    <Cell>800</Cell>
    <Cell>1280</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>kindle fire hdx landscape</BoldCell>
    <Cell>1280</Cell>
    <Cell>800</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>lg optimus l70</BoldCell>
    <Cell>384</Cell>
    <Cell>640</Cell>
    <Cell>1.25</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>lg optimus l70 landscape</BoldCell>
    <Cell>640</Cell>
    <Cell>384</Cell>
    <Cell>1.25</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>macbook pro 13</BoldCell>
    <Cell>1280</Cell>
    <Cell>800</Cell>
    <Cell>1</Cell>
    <Cell>false</Cell>
    <Cell>false</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>macbook pro 15</BoldCell>
    <Cell>1440</Cell>
    <Cell>900</Cell>
    <Cell>1</Cell>
    <Cell>false</Cell>
    <Cell>false</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>microsoft lumia 550</BoldCell>
    <Cell>640</Cell>
    <Cell>360</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>microsoft lumia 950</BoldCell>
    <Cell>360</Cell>
    <Cell>640</Cell>
    <Cell>4</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>microsoft lumia 950 landscape</BoldCell>
    <Cell>640</Cell>
    <Cell>360</Cell>
    <Cell>4</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 10</BoldCell>
    <Cell>800</Cell>
    <Cell>1280</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 10 landscape</BoldCell>
    <Cell>1280</Cell>
    <Cell>800</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 4</BoldCell>
    <Cell>384</Cell>
    <Cell>640</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 4 landscape</BoldCell>
    <Cell>640</Cell>
    <Cell>384</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 5</BoldCell>
    <Cell>360</Cell>
    <Cell>640</Cell>
    <Cell>3</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 5 landscape</BoldCell>
    <Cell>640</Cell>
    <Cell>360</Cell>
    <Cell>3</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 5x</BoldCell>
    <Cell>412</Cell>
    <Cell>732</Cell>
    <Cell>2.625</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 5x landscape</BoldCell>
    <Cell>732</Cell>
    <Cell>412</Cell>
    <Cell>2.625</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 6</BoldCell>
    <Cell>412</Cell>
    <Cell>732</Cell>
    <Cell>3.5</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 6 landscape</BoldCell>
    <Cell>732</Cell>
    <Cell>412</Cell>
    <Cell>3.5</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 6p</BoldCell>
    <Cell>412</Cell>
    <Cell>732</Cell>
    <Cell>3.5</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 6p landscape</BoldCell>
    <Cell>732</Cell>
    <Cell>412</Cell>
    <Cell>3.5</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 7</BoldCell>
    <Cell>600</Cell>
    <Cell>960</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>nexus 7 landscape</BoldCell>
    <Cell>960</Cell>
    <Cell>600</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>nokia lumia 520</BoldCell>
    <Cell>320</Cell>
    <Cell>533</Cell>
    <Cell>1.5</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>nokia lumia 520 landscape</BoldCell>
    <Cell>533</Cell>
    <Cell>320</Cell>
    <Cell>1.5</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>nokia n9</BoldCell>
    <Cell>480</Cell>
    <Cell>854</Cell>
    <Cell>1</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>nokia n9 landscape</BoldCell>
    <Cell>854</Cell>
    <Cell>480</Cell>
    <Cell>1</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>imac 21.5</BoldCell>
    <Cell>1980</Cell>
    <Cell>1080</Cell>
    <Cell>1</Cell>
    <Cell>false</Cell>
    <Cell>false</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>imac 27</BoldCell>
    <Cell>2560</Cell>
    <Cell>1440</Cell>
    <Cell>1</Cell>
    <Cell>false</Cell>
    <Cell>false</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>ipad</BoldCell>
    <Cell>768</Cell>
    <Cell>1024</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>ipad mini</BoldCell>
    <Cell>768</Cell>
    <Cell>1024</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>ipad mini landscape</BoldCell>
    <Cell>1024</Cell>
    <Cell>768</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>ipad pro</BoldCell>
    <Cell>1024</Cell>
    <Cell>1366</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>ipad pro landscape</BoldCell>
    <Cell>1366</Cell>
    <Cell>1024</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>ipad landscape</BoldCell>
    <Cell>1024</Cell>
    <Cell>768</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>iphone 4</BoldCell>
    <Cell>320</Cell>
    <Cell>480</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>iphone 4 landscape</BoldCell>
    <Cell>480</Cell>
    <Cell>320</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>iphone 5</BoldCell>
    <Cell>320</Cell>
    <Cell>568</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>iphone 5 landscape</BoldCell>
    <Cell>568</Cell>
    <Cell>320</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>iphone 6</BoldCell>
    <Cell>375</Cell>
    <Cell>667</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>iphone 6 plus</BoldCell>
    <Cell>414</Cell>
    <Cell>736</Cell>
    <Cell>3</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>false</Cell>
  </Row>
  <Row>
    <BoldCell>iphone 6 plus landscape</BoldCell>
    <Cell>736</Cell>
    <Cell>414</Cell>
    <Cell>3</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>
  <Row>
    <BoldCell>iphone 6 landscape</BoldCell>
    <Cell>667</Cell>
    <Cell>375</Cell>
    <Cell>2</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
    <Cell>true</Cell>
  </Row>

</HeadersTable>}

### Specific parameters

Although \`device\` is a list of popular device presets, you can setup viewports settings manually:

${<HeadersTable headers={['Parameter', 'Description']}>
  <Row>
    <BoldCell>device_scale_factor</BoldCell>
    <Cell>
      <strong style={{display: 'block'}}>number</strong>Specify device scale factor
      (defaults to <InlineCode>1</InlineCode>).
    </Cell>
  </Row>
  <Row>
    <BoldCell>full_page</BoldCell>
    <Cell>
    <strong style={{display: 'block'}}>boolean</strong>When <InlineCode>true</InlineCode>, takes a screenshot of the full scrollable page (defaults to <InlineCode>false</InlineCode>).
    </Cell>
  </Row>
  <Row>
    <BoldCell>has_touch</BoldCell>
    <Cell>
    <strong style={{display: 'block'}}>boolean or string</strong>Specifies if viewport supports touch events (defaults to <InlineCode>false</InlineCode>).
    </Cell>
  </Row>
  <Row>
    <BoldCell>height</BoldCell>
    <Cell>
    <strong style={{display: 'block'}}>number</strong> Page height in pixels.
    </Cell>
  </Row>
  <Row>
    <BoldCell>is_landscape</BoldCell>
    <Cell>
    <strong style={{display: 'block'}}>boolean</strong> Specifies if viewport is in landscape mode (defaults to <InlineCode>false</InlineCode>).
    </Cell>
  </Row>
  <Row>
    <BoldCell>is_mobile</BoldCell>
    <Cell>
    <strong style={{display: 'block'}}>boolean</strong> Whether the meta viewport tag is taken into account (defaults to <InlineCode>false</InlineCode>).
    </Cell>
  </Row>
  <Row>
    <BoldCell>omit_background</BoldCell>
    <Cell>
    <strong style={{display: 'block'}}>boolean</strong> Hides default white background and allows capturing screenshots with transparency (defaults to <InlineCode>true</InlineCode>).
    </Cell>
  </Row>
  <Row>
    <BoldCell>quality</BoldCell>
    <Cell>
    <strong style={{display: 'block'}}>number</strong> The quality of the image, between <InlineCode>0</InlineCode> to <InlineCode>100</InlineCode>. Not applicable to <InlineCode>'png'</InlineCode> images.
    </Cell>
  </Row>
  <Row>
    <BoldCell>type</BoldCell>
    <Cell>
    <strong style={{display: 'block'}}>string</strong> Specify screenshot type, could be either <InlineCode>'jpeg'</InlineCode> or <InlineCode>'png'</InlineCode> (defaults to <InlineCode>'png'</InlineCode>).
    </Cell>
  </Row>
  <Row>
    <BoldCell>width</BoldCell>
    <Cell>
    <strong style={{display: 'block'}}>number</strong> Page width in pixels.
    </Cell>
  </Row>
  <Row>
    <BoldCell>user_agent</BoldCell>
    <Cell>
    <strong style={{display: 'block'}}>string</strong> Specify the user agent to use.
    </Cell>
  </Row>
</HeadersTable>}
`,
    markdown(components)`

When you take a screenshot snapshot such as

${<TerminalInput>curl https://api.microlink.io/?url=https%3A%2F%2Fproducthunt.com&screenshot&filter=screenshot</TerminalInput>}

The image will be hosted at  [imgur.com](https://imgur.com) as \`png\` by default.

${<Code syntax="json">{`{
  "status": "success",
  "data": {
    "screenshot": {
      "url": "https://i.imgur.com/Jv9yqlI.png",
      "type": "png",
      "width": 1280,
      "height": 800
    }
  }
}
`}</Code>}

Providing a device name supported as value for screenshot, we will take the screenshot using the specific device settings (viewport, width, height, etc).

${<Code syntax="json">{`<img
  style="max-width: 250px"
  src="https://api.microlink.io/?url=https%3A%2F%2Fproducthunt.com&screenshot=iphone%206&embed=screenshot.url"
/>
`}</Code>}

${<img
  src="https://api.microlink.io/?url=https%3A%2F%2Fproducthunt.com&screenshot=iphone%206&embed=screenshot.url"
  style={{maxWidth: '250px'}}
/>}
`
  ]
]
      }
    />
  )
}

export default immutable(Parameters)
