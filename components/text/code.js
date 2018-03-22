import CodeCopy from 'react-codecopy'
import PropTypes from 'prop-types'

import {
  CODE_INLINE_STYLE,
  CODE_STYLE,
  COLOR_BG_CODE,
  COLOR_CODE,
  COLOR_PRIMARY
} from '../css-config'

export const Code = ({ children, syntax }, { darkBg }) => (
  <CodeCopy theme={darkBg ? 'dark' : 'light'}>
    <pre className={(darkBg ? 'dark' : '') + (syntax ? ` ${syntax}` : '')}>
      <code>{children}</code>
      <style jsx>
        {`
          pre {
            ${CODE_STYLE};
            background: ${COLOR_BG_CODE};
            color: ${COLOR_CODE};
          }
          pre.dark {
            border: 1px solid #333;
            background: #000;
            color: white;
          }
          .dark code {
            color: #fff;
          }
          .dark.json code {
            color: #f1fa8c;
          }
        `}
      </style>
    </pre>
  </CodeCopy>
)

Code.contextTypes = {
  darkBg: PropTypes.bool
}

export const InlineCode = ({ children, noWrap }, { darkBg } = {}) => {
  return (
    <code className={(darkBg ? 'dark' : '') + (noWrap ? ' no-wrap' : '')}>
      {children}
      <style jsx>
        {`
          code {
            ${CODE_INLINE_STYLE};
            color: ${COLOR_PRIMARY};
            border: 1px solid #dee2e6;
          }

          code.dark {
            color: #999;
            border: 1px solid #999;
          }

          code.no-wrap {
            white-space: nowrap;
          }
        `}
      </style>
    </code>
  )
}

InlineCode.contextTypes = {
  darkBg: PropTypes.bool
}
