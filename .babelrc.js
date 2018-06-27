const env = {
  VERSION: require('./package').version,
  'process.env.NODE_ENV': process.env.NODE_ENV,
  'process.env.MICROLINK_API_KEY': process.env.MICROLINK_API_KEY,
  IMAGE_ASSETS_URL: '/static',
  VIDEO_ASSETS_URL: '/static',
  RAW_ASSETS_URL: '/static'
}

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ],
    ['transform-define', env],
    'markdown-in-js/babel'
  ]
}
