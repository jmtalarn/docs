const glob = require('glob-promise')

module.exports = {
  webpack: function(cfg) {
    const originalEntry = cfg.entry
    cfg.entry = async () => {
      const entries = await originalEntry()
      entries['main.js'].unshift('./polyfills.js')
      return entries
    }

    return cfg
  },

  exportPathMap: async function() {
    const paths = await glob('pages/**')
    const pages = paths.map(path => {
      path = path.replace(/^pages/, '')
      path = path.replace('index.js', '')
      path = path.replace('.js', '')

      if (path === '/') return path

      path = path.replace(/\/$/, '')
      return path
    })

    const pageMap = pages.reduce((map, page) => {
      map[page] = { page }
      return map
    }, {})

    return pageMap
  }
}
