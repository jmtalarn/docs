import React from 'react'
import markdown from 'markdown-in-js'

import { InternalLink } from '../../../components/text/link'
import withDoc, { components } from '../../../lib/with-doc'
import { kiko } from '../../../lib/data/team'

// prettier-ignore
export default withDoc({
  title: 'Considerations',
  date: '19 January 2018',
  authors: [kiko],
})(markdown(components)`

## API Clients Design

We've provided multiple ways to integrate **microlink** with your site and your code. Our API Libraries are isomorphic, they all follow the same interface with the same parameter interface (based on our ${<InternalLink href="/api">API</InternalLink>} endpoint).

## Pollyfills

Our API clients use the standard [fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) in order to perform asynchronous HTTP calls to our ${<InternalLink href="/api">API</InternalLink>} endpoint.

Each connector is developed to be as tiny possible, targeting modern browsers. This means that **we don't ship any polyfill with the API clients**.

In order to support older browsers versions, you'll need to attach your own polyfill first. Looking for a tiny \`fetch\` polyfill? We suggest [unfetch](https://github.com/developit/unfetch).

`)
