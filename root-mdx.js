import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code, Blockquote, PrismSetup, Text } from './src/components/mdx/index'

const components = {
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
  p: Text
}

export const wrapMDX = ({ element }) => (
  <MDXProvider components={components}>
    {element}
  </MDXProvider>
)