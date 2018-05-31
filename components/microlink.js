import { createElement } from 'react'
import MicrolinkCard from 'react-microlink'

const microlink = props =>
  createElement(MicrolinkCard, {
    ...props,
    apiKey: process.env.MICROLINK_API_KEY
  })

export default microlink
