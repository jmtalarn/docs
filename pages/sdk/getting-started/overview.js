import React from 'react'
import markdown from 'markdown-in-js'
import MicrolinkCard from 'react-microlink'
import { ExternalLink } from '../../../components/text/link'

import withDoc, { components } from '../../../lib/with-doc'
import { kiko } from '../../../lib/data/team'

const DEMO_LINK = 'https://www.amazon.com/dp/B06XCM9LJ4'

// prettier-ignore
export default withDoc({
  title: 'Overview',
  date: '19 January 2018',
  authors: [kiko],
})(markdown(components)`

**microlink** enables you to create beautiful previews, from any link.

Using it, you can simply convert

${<ExternalLink href={`${DEMO_LINK}`}>{`${DEMO_LINK}`}</ExternalLink>}

into 👇

${<MicrolinkCard
  url={`${DEMO_LINK}`}
/>}

It's the perfect complement to improve the engagement of your articles or blog publications, bringing your user to see what's behind any link.

In this documentation you can find the official API clients to consume our API.

The following steps show you how to integrate **microlink** in your web page.
`)
