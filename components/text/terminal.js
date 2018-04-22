import { Component } from 'react'
import PropTypes from 'prop-types'
import CodeCopy from 'react-codecopy'

import { CODE_STYLE, COLOR_BG_CODE, COLOR_CODE } from '../css-config'
import { GenericLink } from './link'

export const TerminalInput = ({ children }, { darkBg = false }) => (
  <CodeCopy theme={darkBg ? 'dark' : 'light'} text={children}>
    <div className={darkBg ? 'dark' : ''}>
      {Array.isArray(children) ? (
        <span>{children}</span>
      ) : (
        children.split(/\r?\n/).map((item, index) => <span key={index}>{item}</span>)
      )}

      <style jsx>
        {`
          div {
            ${CODE_STYLE};
            background: ${COLOR_BG_CODE};
            color: ${COLOR_CODE};
          }
          div span {
            display: block;
          }
          div span::before {
            content: '$ ';
          }
          div.dark {
            border: 1px solid #333;
            background: #000;
            color: white;
          }
        `}
      </style>
    </div>
  </CodeCopy>
)

TerminalInput.contextTypes = {
  darkBg: PropTypes.bool
}

export class TerminalOutput extends Component {
  static childContextTypes = {
    darkBg: PropTypes.bool
  }

  getChildContext() {
    return { darkBg: true }
  }

  render() {
    const { children } = this.props
    return (
      <div className="output">
        {children}
        <style jsx>
          {`
            .output {
              background: #000;
              color: #fff;
              font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
                Bitstream Vera Sans Mono, Courier New, monospace, serif;
              font-size: 13px;
              line-height: 20px;
              margin: 40px 0;
              padding: 20px;
            }

            .output :global(pre) {
              margin: 0;
              font-family: inherit;
              font-size: inherit;
              line-height: inherit;
              white-space: pre-wrap;
            }
          `}
        </style>
      </div>
    )
  }
}

export const TerminalLink = props => (
  <span>
    <GenericLink {...props} />
    <style jsx>
      {`
        span :gloabl(a) {
          text-decoration: underline;
        }
      `}
    </style>
  </span>
)
