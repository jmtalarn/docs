import markdown from 'markdown-in-js'
import React from 'react'

import Section, { components } from '../../section'
import immutable from '../../../../lib/immutable-component'
import { InternalLink } from '../../../text/link'
import { Code } from '../../../text/code'
import { TerminalInput } from '../../../text/terminal'

function Introduction() {
  return (
    <Section
      contents={
        // prettier-ignore
        [
  [
    markdown(components)`

Welcome to microlink API!

You can use it for get relevant information from any website. The service is oriented for build embed previsualizations of third party links in your site.

From the ${<InternalLink href="#url">url</InternalLink>} provided as input, we can detect the following information:

- \`author\` — eg. *Noah Kulwin*<br/>
  A human-readable representation of the author's name.

- \`date\` — eg. *2016-05-27T00:00:00.000Z*<br/>
  An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) representation of the date the article was published.

- \`description\` — eg. *Converse has spent a good part…* <br/>
  The publisher's chosen description of the article.

- \`image\` — eg. *https://i.vimeocdn.com/video/598160082_1280x720.jpg*<br/>
  An image URL that best represents the article.

- \`lang\` — eg. *en*<br/>
  An [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) representation of the url content language.

- \`logo\` — eg. *https://i.vimeocdn.com/favicon/main-touch_180*<br/>
  An image URL that best represents the publisher brand.

- \`publisher\` — eg. *Vimeo*<br/>
  A human-readable representation of the publisher's name.

- \`title\` — eg. *Converse - Past meets Present - Montage*<br/>
  The publisher's chosen title of the article.

- \`url\` — eg. *https://vimeo.com/188175573*<br/>
  The URL of the article.

Complementing the information obtained, we provide you a set of extra features that enrich your links previsualizations and improve your engagement:

- Take a ${<InternalLink href="#screenshot">screenshot</InternalLink>} of the website (partial or full page).
- Get a predominant color ${<InternalLink href="#palette">palette</InternalLink>} per each image detected.
- Make easy ${<InternalLink href="#embed">embed</InternalLink>} content directly in your HTML markup.
- ${<InternalLink href="#prerender">Prerendering</InternalLink>} mode, useful for getting more information from websites that use client-side frameworks.
- Export to PDF (*soon*, [ping us](https://twitter.com/microlinkhq) if you are interested!)

- Take a [screenshot](#screenshot) of the website (partial or full page).
- Get a predominant color [palette](#palette) per each image detected.
- Make easy [embed](#embed) content directly in your HTML markup.
- [Prerendering](#prerender) mode, useful for getting more information from websites that use client-side frameworks.
- Export to PDF (*soon*, [ping us](https://twitter.com/microlinkhq) if you are interested!)
`,
    markdown(components)`
Entering a URL, you will receive the information behind the link.

${<TerminalInput>{`curl https://api.microlink.io?url=https://vimeo.com/188175573`}</TerminalInput>}

The above API request generate the following response:

${<Code syntax="json">{`{
  "status": "success",
  "data": {
    "author": null,
    "date": null,
    "description":
      "Converse has spent a good part of this year updating some of their classics. Our past is constantly catching up to us, but we rarely get to see the relationship…",
    "image": {
      "width": 1280,
      "height": 720,
      "type": "jpg",
      "url": "https://i.vimeocdn.com/video/598160082_1280x720.jpg"
    },
    "logo": "https://i.vimeocdn.com/favicon/main-touch_180",
    "publisher": "Vimeo",
    "title": "Converse - Past meets Present - Montage",
    "url": "https://vimeo.com/188175573"
  }
}`}</Code>}
    `,
  ]
]
      }
    />
  )
}

export default immutable(Introduction)
