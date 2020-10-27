import React from 'react'
import { Link } from 'gatsby'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import styled from 'styled-components'

const links = [
  { to: '/', text: 'portfolio' },
  // { to: '/notes', text: 'notes' },
  { to: '/about', text: 'about' },
  { to: '/contact', text: 'contact' },
]

const Sidebar = () => {
  return (
    <SidebarWrapper className='p-1'>
      <TopWrapper>
        <Link to='/'><h1>Christina Yun</h1></Link>
        <p>Frontend developer documenting her learning experience. <br/>🐾🌱👩‍💻 </p>
      </TopWrapper>
      <NavLinks>
        {links.map((link, index) => (
          <Link key={index} to={link.to} activeClassName='active'>{link.text}</Link>
        ))}
      </NavLinks>
      <SocialLinks>
        <li>
          <a
            href='https://github.com/yjcyun'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub className='icon' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/xtina-yun/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn className='icon' />
          </a>
        </li>
      </SocialLinks>
      <div className='vertical-line'></div>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.nav`
  position: relative;
  .vertical-line{
    width: 100%;
    height: 1px;
    margin-top: 2rem;
    background-color: #ececec;
  }
  @media(min-width:768px) {
    .vertical-line{
      margin-top: 0;
      position: absolute;
      top: 1.5rem;
      right: 0;
      width: 1px;
      height: 25rem;
    }
  }
  a {
    color: var(--black);
    text-transform: uppercase;
    transition: 0.3s all;
  }
  a:hover {
    color: var(--accent-clr);
  }
`
const TopWrapper = styled.div`
  p{
    margin: 1rem 0;
    color: var(--grey-clr);
  }
  a{
    text-transform: capitalize;
  }
  a:hover {
    color: var(--dark-color);
  }
  h1 {
    font-size: 1.3rem;
  }
`
const NavLinks = styled.div`
  a{
    margin: 0.4rem 0;
  }
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  .active {
    color: var(--accent-clr);
    text-decoration: underline;
  }
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