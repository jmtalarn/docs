import PropTypes from 'prop-types'

import { COLOR_CODE } from '../css-config'

export const P = ({ children }) => (
  <p>
    {children}
    <style jsx>
      {`
        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 1.9;
        }
      `}
    </style>
  </p>
)

export const PDIV = ({ children }) => (
  <div>
    {children}
    <style jsx>
      {`
        div {
          font-weight: 400;
          font-size: 14px;
          line-height: 1.9;
          margin-bottom: 20px;
        }
      `}
    </style>
  </div>
)

export const B = ({ children }, { darkBg } = {}) => (
  <span>
    {children}
    <style jsx>
      {`
        span {
          font-weight: 600;
          color: ${darkBg ? COLOR_CODE : 'inherit'};
        }
      `}
    </style>
  </span>
)

B.contextTypes = {
  darkBg: PropTypes.bool
}

export const HR = () => (
  <div>
    <style jsx>{`
      div {
        border: 0;
        border-bottom: 1px solid #ccc;
        margin: 50px 30px;
      }
    `}</style>
  </div>
)

export const Quote = ({ children }, { darkBg } = {}) => (
  <blockquote className={darkBg ? 'dark' : ''}>
    {children}
    <style jsx>{`
      blockquote {
        padding: 10px 20px;
        border-left: 5px solid #000;
        margin: 20px 0;
        color: #888;
      }

      blockquote.dark {
        border-left-color: #fff;
      }

      blockquote :global(div) {
        margin: 0;
      }
    `}</style>
  </blockquote>
)

Quote.contextTypes = {
  darkBg: PropTypes.bool
}

P.B = B
