import markdown from 'markdown-in-js'
import {components} from '../lib/with-doc'
export default () => markdown(components)`
  We don't inject any CSS in your application. The card previsualization is shipped with a default minimal inline style.

  If you need to adapt the *look and feel*, each component of the card has been assigned a [BEM](http://getbem.com/introduction) class name:

  - **microlink_card**: The root \`div\` of the card.
  - **microlink_card__media_image**: The \`div\` holding the \`background-image\` of the image preview of the link.
  - **microlink_card__media_video_wrapper**: The wrapper \`div\` around the video preview of the link.
  - **microlink_card__media_video**: The \`video\` element for the video preview of the link.
  - **microlink_card__content**: The wrapper \`div\` around the content preview of the link.
  - **microlink_card__content_title**: The \`p\` tag of the card title.
  - **microlink_card__content_description**: The \`p\` tag of the card description.
  - **microlink_card__content_url**: The \`span\` tag of the card url link.
`
