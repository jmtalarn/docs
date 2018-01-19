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

We even provided different ways to integrate **microlink** with your site and your code, our API Libraries is isomorphic: All of them follow the same interface.

Even we provide a different ways to integrate **microlink** in your web page, our API clients follow an isomorphic API: All of them have the same parameters interface based in your ${<InternalLink href="/api">API</InternalLink>} endpoint.

## Pollyfills

Our API clients use the standard [fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) in order to perform asynchronous HTTP calls to our ${<InternalLink href="/api">API</InternalLink>} endpoint.

Each connector is developed to be as tiny possible, targeting modern browsers.

This means that **we don't ship any polyfill with the API connectors**.

If you want to support older browsers versions, you need to attach your own polyfill first.

If you're looking for a tiny \`fetch\` polyfill, we recommend you use [unfetch](https://github.com/developit/unfetch).

`)
