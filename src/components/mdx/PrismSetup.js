import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"
import styled from "styled-components"

const PrismWrapper = props => {
  const className = props.children.props.className
  const language = className.replace(/language-/, "")

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )
      }}
    </Highlight>
  )
}

const Pre = styled.pre`
  background: #1e1e1e;
  padding: 1rem 1.5rem;
  border-radius: var(--radius);
  margin: 3rem 0;
  font-size: 0.9rem;
  font-family: "Courier New", Courier, monospace;
  overflow-x: auto;
  .token-line {
    line-height: 1.5;
  }
`

export default PrismWrapper