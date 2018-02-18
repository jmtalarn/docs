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

You can use it for Get relevant information from any link. The service is oriented for build embed previsualizations of third party links in your site.

From the ${<InternalLink href="#url">url</InternalLink>} provided as input, we can detect the following information:

- \`author\` — eg. *SpaceX*<br/>
  A human-readable representation of the author's name.

- \`date\` — eg. *2018-01-24T18:39:47.000Z*<br/>
  An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) representation of the date the article was published.

- \`description\` — eg. *First static fire test of Falcon Heavy…* <br/>
  The publisher's chosen description of the article.

- \`image\` — eg. *https://cdninstagram.com/…/26867070_171196260320789.jpg*<br/>
  An image URL that best represents the article.

- \`video\` — eg. *https://cdninstagram.com/…/26867070_171196260320789.mp4*<br/>
  A video URL that best represents the article.

- \`lang\` — eg. *en*<br/>
  An [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) representation of the url content language.

- \`logo\` — eg. *https://www.instagram.com/static/images/ico/favicon-192.png/b407fa101800.png*<br/>
  An image URL that best represents the publisher brand.

- \`publisher\` — eg. *Instagram*<br/>
  A human-readable representation of the publisher's name.

- \`title\` — eg. *SpaceX on Instagram*<br/>
  The publisher's chosen title of the article.

- \`url\` — eg. *https://www.instagram.com/p/BeV6tOhFUor*<br/>
  The URL of the article.

Complementing the information obtained, we provide you a set of extra features that enrich your links previsualizations and improve your engagement:

- Take a ${<InternalLink href="#screenshot">screenshot</InternalLink>} of the website (partial or full page).
- Get a predominant color ${<InternalLink href="#palette">palette</InternalLink>} per each image detected.
- Make easy ${<InternalLink href="#embed">embed</InternalLink>} content directly in your HTML markup.
- ${<InternalLink href="#prerender">Prerendering</InternalLink>} mode, useful for getting more information from websites that use client-side frameworks.
- Export to PDF (*soon*, [ping us](https://twitter.com/microlinkhq) if you are interested!)
`,
    markdown(components)`
Entering a URL, you will receive the information behind the link.

${<TerminalInput>{`curl https://api.microlink.io?url=https://www.instagram.com/p/BeV6tOhFUor`}</TerminalInput>}

The above API request generate the following response:

${<Code syntax="json">{`{
  "status": "success",
  "data": {
    "lang": "en",
    "author": "spacex",
    "title": "SpaceX on Instagram: “First static fire test of Falcon Heavy complete—one step closer to first test flight!”",
    "publisher": "Instagram",
    "image": {
      "width": 1080,
      "height": 607,
      "type": "jpg",
      "url": "https://scontent-iad3-1.cdninstagram.com/vp/68093557a1e21266afd48b71782770fc/5A837225/t51.2885-15/s1080x1080/e15/fr/26867070_171196260320789_7698587573655961600_n.jpg"
    },
    "description": "“First static fire test of Falcon Heavy complete—one step closer to first test flight!”",
    "date": "2018-01-24T18:39:47.000Z",
    "video": {
      "width": 640,
      "height": 360,
      "type": "h264",
      "url": "https://scontent-iad3-1.cdninstagram.com/vp/8b8a3ca167df137bb67cc4c3025b754b/5A836752/t50.2886-16/26680591_1497085977080751_971884209264132096_n.mp4"
    },
    "logo": {
      "width": 192,
      "height": 192,
      "type": "png",
      "url": "https://www.instagram.com/static/images/ico/favicon-192.png/b407fa101800.png"
    },
    "url": "https://www.instagram.com/p/BeV6tOhFUor"
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
