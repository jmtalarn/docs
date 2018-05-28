import { createElement } from 'react'
import MicrolinkCard from 'react-microlink'

const { MICROLINK_API_KEY } = process.env

const microlink = props =>
  createElement(MicrolinkCard, {
    ...props,
    apiKey: MICROLINK_API_KEY
  })

export default microlink
