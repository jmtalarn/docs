import PropTypes from 'prop-types'
import { CODE_INLINE_STYLE, CODE_STYLE } from '../css-config'

export const Code = ({ children, syntax }, { darkBg } = {}) => (
  <pre className={(darkBg ? 'dark' : '') + (syntax ? ` ${syntax}` : '')}>
    <code>{children}</code>
    <style jsx>
      {`
        pre {
          ${CODE_STYLE};
        }
        pre.dark {
          border-color: #333;
        }
        .dark code {
          color: #fff;
        }
        .dark.shell code {
          color: #50e3c2;
        }
      `}
    </style>
  </pre>
)

Code.contextTypes = {
  darkBg: PropTypes.bool
}

export const InlineCode = ({ children, noWrap }) => (
  <code className={noWrap && 'no-wrap'}>
    {children}
    <style jsx>
      {`
        code {
          ${CODE_INLINE_STYLE};
        }

        code.no-wrap {
          white-space: nowrap;
        }
      `}
    </style>
  </code>
)
