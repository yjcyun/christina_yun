import React from 'react'

const Code = ({ children }) => {
  return (
    <code
      style={{
        background: '#F2F3F5',
        color: 'tomato',
        padding: '0.5rem',
        borderRadius: 'var(--radius)',
        display: 'inline-block',
        margin:'0'
      }}
    >
      {children}
    </code>
  )
}

export default Code