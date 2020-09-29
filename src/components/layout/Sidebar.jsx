import { Link } from 'gatsby'
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa'
import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <TopWrapper>
        <h1>Christina Yun</h1>
        <p>Self-taught frontend developer documenting her learning experience and a dog lover.</p>
      </TopWrapper>
      <NavLinks>
        <li><Link to='/'>portfolio</Link></li>
        <li><Link to='/notes'>notes</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/contact'>contact</Link></li>
      </NavLinks>
      <SocialLinks>
        <li><a href='https://github.com/yjcyun' target='_blank' rel='noreferrer'><FaGithubAlt className='icon' /></a></li>
        <li><a href='https://github.com/yjcyun' target='_blank' rel='noreferrer'><FaLinkedinIn className='icon' /></a></li>
      </SocialLinks>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.nav`
  padding: 1.5rem;
  a {
    color: var(--dark-clr);
    text-transform: uppercase;
    transition: 0.3s all;
  }
  a:hover {
    color: var(--accent-clr);
    text-decoration: underline;
  }
`
const TopWrapper = styled.div`
  p{
    margin: 1rem 0;
    color: var(--grey-clr);
  }
`
const NavLinks = styled.ul`
  li{
    margin: 0.8rem 0;
  }
  margin: 3rem 0;
`
const SocialLinks = styled.ul`
  display: flex;
  li {
    margin: 0 0.5rem 0 0;
    border-radius: 50%;
    border: 1px solid var(--grey-clr);
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      vertical-align: middle;
      margin-bottom: 3px;
    }
  }
`

export default Sidebar