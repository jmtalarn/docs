import { Children, Component } from 'react'
import PropTypes from 'prop-types'
import CodeCopy from 'react-codecopy'

import styled, { css, keyframes } from 'styled-components'

import { CODE_STYLE, COLOR_CODE } from '../css-config'
import { GenericLink } from './link'

const serializeComponent = children =>
  Children.map(children, child => (typeof child === 'string' ? child : child.props.children)).join(
    ''
  )

const TerminalWindow = styled.div`
  border-radius: 5px;
  margin: 50px 0;

  ${({ dark }) =>
    !dark &&
    css`
      box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
    `} ${({ dark }) =>
    dark &&
    css`
      border: 1px solid #333;
    `};
`

const TerminalHeader = styled.div`
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  display: flex;
  height: 36px;
  background: ${({ dark }) => (dark ? '#333' : '#fff')};
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

const blink = keyframes`
  from { opacity: 1.0; } to { opacity: 0.0; }
`

const TerminalText = styled.div`
  ${CODE_STYLE};
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${({ dark }) => (dark ? '#000' : 'transparent')};
  height: 100px;
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  display: flex;
  align-items: center;
`

const TerminalTextWrapper = styled.div`
  word-break: break-all;

  &::before {
    content: '$ ';
  }

  &::after {
    content: '';
    animation-name: ${blink};
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(1, 0, 0, 1);
    animation-duration: 1s;
    display: inline-block;
    width: 1px;
    height: 14px;
    border-radius: 3px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background: ${props => (props.dark ? COLOR_CODE : '#000')};
    margin-left: 4px;
    position: relative;
    top: 3px;
    margin-right: 1px;
  }
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

export const TerminalInput = ({ children }, { darkBg = false }) => {
  const content = Array.isArray(children)
    ? children
    : children.split(/\r?\n/).map((item, index) => <span key={index}>{item}</span>)

  return (
    <Terminal dark={darkBg}>
      <div style={{ width: '100%' }}>
        <CustomCodeCopy theme={darkBg ? 'dark' : 'light'} text={serializeComponent(children)}>
          <TerminalTextWrapper dark={darkBg}>{content}</TerminalTextWrapper>
        </CustomCodeCopy>
      </div>
    </Terminal>
  )
}

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
        span :global(a) {
          text-decoration: underline;
        }
      `}
    </style>
  </span>
)
