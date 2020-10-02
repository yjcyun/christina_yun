import React from 'react'

const Text = ({children}) => {
  return (
    <p style={{lineHeight: '1.5', margin:'1rem 0'}}>
      {children}
    </p>
  )
}

export default Text