import React from 'react'
import markdown from 'markdown-in-js'
import MicrolinkCard from 'react-microlink'

import withDoc, { components } from '../../../lib/with-doc'
import { kiko } from '../../../lib/data/team'

// prettier-ignore
export default withDoc({
  title: 'Overview',
  date: '19 January 2018',
  authors: [kiko],
})(markdown(components)`

**microlink** lets you create beautiful link previews from any website.

Using it, you can convert simply links, like that:

<a href="https://vimeo.com/188175573">https://vimeo.com/188175573</a>

into fancy previews

${<MicrolinkCard
  url="https://vimeo.com/188175573"
/>}

It is a perfect complement to improve the engagement of your articles or blog publications, bringing your user to see what is behind any link.

In this documentation you can find the official API clients to consume our API.


The following steps show you how to integrate **microlink** in your web page.
`)
