import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <LayoutWrapper className='page-center'>
      <Sidebar />
      <main>{children}</main>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display: grid;

  @media(min-width:768px) {
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
  }
`

export default Layout