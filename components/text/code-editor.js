import { Children } from 'react'
import PropTypes from 'prop-types'
import CodeCopy from 'react-codecopy'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/styles/hljs'

import styled from 'styled-components'

import { CODE_STYLE } from '../css-config'

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
  margin-top: 0px;
  padding-bottom: 12px !important;
  margin-bottom: 12px;

  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`

const serializeComponent = children =>
  Children.map(children, child => (typeof child === 'string' ? child : child.props.children)).join(
    ''
  )

const TerminalWindow = styled.div`
  border-radius: 5px;
  margin: 50px 0;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
`

const TerminalHeader = styled.div`
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  display: flex;
  height: 36px;
  background: #282a36;
  align-items: center;
  padding: 1rem;
`

const TerminalButton = styled.div`
  border-radius: 50px;
  width: 12px;
  height: 12px;
  margin: 0 0.2rem;
  background ${({ color }) => color};
`

const TerminalTitle = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-left: -3rem;
  color: #999;
  font-size: 12px;
`

const TerminalText = styled.div`
  ${CODE_STYLE};
  padding: 0 20px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background: #282a36;
  color: #fff;
  display: flex;
  align-items: center;
`

const TerminalTextWrapper = styled.div`
  word-break: break-all;
`

const Terminal = ({ title, children, dark }) => (
  <TerminalWindow dark={dark}>
    <TerminalHeader dark={dark}>
      <TerminalButton dark={dark} color="#FF5F56" />
      <TerminalButton dark={dark} color="#FFBD2E" />
      <TerminalButton dark={dark} color="#27C93F" />
      <TerminalTitle dark={dark}>{title}</TerminalTitle>
    </TerminalHeader>
    <TerminalText dark={dark}>{children}</TerminalText>
  </TerminalWindow>
)

const CustomCodeCopy = styled(CodeCopy)`
  top: -4px !important;
`

const CodeEditor = (
  { children, language = 'javascript', showLineNumbers = true },
  { darkBg = false }
) => {
  return (
    <Terminal dark={darkBg}>
      <div style={{ width: '100%' }}>
        <CustomCodeCopy theme={'dark'} text={serializeComponent(children)}>
          <TerminalTextWrapper dark={darkBg}>
            <CustomSyntaxHighlighter
              lineNumberStyle={{ color: '#6272A4' }}
              showLineNumbers={showLineNumbers}
              language={language}
              style={dracula}
            >
              {children}
            </CustomSyntaxHighlighter>
          </TerminalTextWrapper>
        </CustomCodeCopy>
      </div>
    </Terminal>
  )
}

CodeEditor.contextTypes = {
  darkBg: PropTypes.bool
}

export default CodeEditor
