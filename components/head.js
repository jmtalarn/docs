import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'next/router'
import NextHead from 'next/head'
import NProgress from 'nprogress'
import debounce from 'lodash.debounce'
import RouterEvents from '../lib/router-events'

import { COLOR_SUCCESS } from './css-config'

const start = debounce(NProgress.start, 200)
RouterEvents.on('routeChangeStart', start)
RouterEvents.on('routeChangeComplete', () => {
  start.cancel()
  NProgress.done()
})
RouterEvents.on('routeChangeError', () => {
  start.cancel()
  NProgress.done()
})

if (global.document) {
  const info = [
    `Check out our code here: https://github.com/microlinkhq`,
    `Have a good (hack) day!`
  ]

  for (const message of info) {
    // eslint-disable-next-line no-console
    console.log(message)
  }
}

class Head extends React.PureComponent {
  render() {
    const description =
      this.props.ogDescription ||
      this.props.description ||
      'A quick-start guide to extract well structured data from any link, create beautiful link previsualization and integrate it easily in your code'

    const { darkBg } = this.context

    const url =
      this.props.url ||
      `https://docs.microlink.io${this.props.router.asPath}` ||
      'https://docs.microlink.io'

    const image = this.props.image || 'https://microlink.io/preview.png'
    const title = this.props.ogTitle || this.props.title
    const siteName = 'Microlink Documentation'

    return (
      <div>
        <NextHead>
          <title>{`${this.props.title} | ${siteName}`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="twitter:card"
            content={this.props.image ? 'summary_large_image' : 'summary'}
          />
          <meta name="twitter:site" content="@microlinkio" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:type" content="website" />
          <meta name="og:title" content={this.props.ogTitle || this.props.title} />
          <meta property="og:locale" content="en" />
          <meta property="og:url" content={url} />
          <link rel="canonical" href={url} />

          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          {this.props.video
            ? [
                <meta property="og:type" content="video" key="0" />,
                <meta property="og:video" content={this.props.video} key="1" />,
                <meta property="og:video:type" content="video/mp4" key="2" />
              ]
            : null}
          <link rel="shortcut icon" href="https://microlink.io/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
             {
               "@type": "WebPage",
               "url": "${url}",
               "headline": "${title}",
               "description": "${description}",
               "image": "${image}",
               "name": "${siteName}",
               "author": {
                 "@type": "Person",
                 "name": "Microlink"
               },
               "publisher": {
                 "@type": "Organization",
                 "logo": {
                   "@type": "ImageObject",
                   "url": "https://microlink.io/logo-trim.png"
                 },
                 "name": "Microlink"
               },
               "@context": "http://schema.org"
             }
           `
            }}
          />
          {this.props.children}
        </NextHead>
        <style jsx global>
          {`
            #nprogress {
              pointer-events: none;
            }
            #nprogress .bar {
              position: fixed;
              z-index: 2000;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
            }
            #nprogress .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              opacity: 1;
              transform: rotate(3deg) translate(0px, -4px);
            }
          `}
        </style>
        <NextHead>
          <style>
            {`
            #nprogress .bar {
              background: ${darkBg ? '#fff' : COLOR_SUCCESS};
            }

            #nprogress .peg {
              box-shadow: ${darkBg ? '0 0 10px #fff, 0 0 5px #fff' : '0 0 10px #ccc, 0 0 5px #ccc'};
            }

            #HW_badge_cont {
              width: 0 !important;
              height: 0 !important;
              bottom: 8px !important;
            }
          `}
          </style>
        </NextHead>
      </div>
    )
  }
}

Head.contextTypes = {
  darkBg: PropTypes.bool
}

export default withRouter(Head)
