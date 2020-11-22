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

  @media(min-width:996px) {
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
  }
  @media(min-width: 1200px) {
    grid-template-columns: 1fr 4fr;
  }
`

export default Layout