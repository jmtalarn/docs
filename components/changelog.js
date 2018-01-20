import React, { Component } from 'react'

export default class Changelog extends Component {
  componentDidMount() {
    if (!window.HW_config) {
      window.HW_config = {
        selector: '.changelog',
        account: 'xMYKgx'
      }
    }

    const script = document.createElement('script')
    script.src = '//cdn.headwayapp.co/widget.js'
    script.async = true
    document.body.appendChild(script)
  }

  render() {
    return <span className="changelog" />
  }
}
