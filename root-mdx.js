import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code, Blockquote, PrismSetup } from './src/components/mdx/index'

const components = {
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup
}

export const wrapMDX = ({ element }) => (
  <MDXProvider components={components}>
    {element}
  </MDXProvider>
)