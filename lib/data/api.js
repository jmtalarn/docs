const { parse } = require('url')

const data = [
  {
    id: 'gettingStarted',
    name: 'Getting Started',
    posts: [
      {
        id: 'introduction',
        name: 'Introduction',
        href: '/api#introduction',
        aliases: ['/api', '/api#']
      }
    ]
  },

  {
    id: 'apiBasics',
    name: 'API Basics',
    posts: [
      {
        id: 'endpoint',
        name: 'Endpoint',
        href: '/api#api-basics/endpoint'
      },
      {
        id: 'authentication',
        name: 'Authentication',
        href: '/api#api-basics/authentication'
      },
      {
        id: 'rateLimit',
        name: 'Rate Limit',
        href: '/api#api-basics/rate-limit'
      },
      {
        id: 'format',
        name: 'Format',
        href: '/api#api-basics/format'
      },
      {
        id: 'cache',
        name: 'Cache',
        href: '/api#api-basics/cache'
      }
    ]
  },

  {
    id: 'apiParameters',
    name: 'API Parameters',
    posts: [
      {
        id: 'url',
        name: 'url',
        href: '/api#api-parameters/url'
      },
      {
        id: 'prerender',
        name: 'prerender',
        href: '/api#api-parameters/prerender'
      },
      {
        id: 'screenshot',
        name: 'screenshot',
        href: '/api#api-parameters/screenshot'
      },
      {
        id: 'palette',
        name: 'palette',
        href: '/api#api-parameters/palette'
      },
      {
        id: 'filter',
        name: 'filter',
        href: '/api#api-parameters/filter'
      },
      {
        id: 'embed',
        name: 'embed',
        href: '/api#api-parameters/embed'
      },
      {
        id: 'userAgent',
        name: 'user agent',
        href: '/api#api-parameters/user-agent'
      },
      {
        id: 'force',
        name: 'force',
        href: '/api#api-parameters/force'
      }
    ]
  }
]

export default data.map(({ posts, ...rest }) => {
  return {
    ...rest,
    posts: posts.map(p => {
      const { hash } = parse(p.href)
      return { ...p, hash }
    })
  }
})
