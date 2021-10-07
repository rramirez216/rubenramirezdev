import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Nav>
      <LinkWrapper>
        <NavLink to='/'>About</NavLink>
      </LinkWrapper>
      <LinkWrapper>
        <NavLink to='/projects'>Projects</NavLink>
      </LinkWrapper>
      <LinkWrapper>
        <NavLink to='contact'>Contact</NavLink>
      </LinkWrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 8px;
  font-size: 1.5rem;
  margin-bottom: 100px;
`

const LinkWrapper = styled.div`
  width: 100px;
`

const NavLink = styled(Link)`
  display: block;
  text-align: center;
  width: 100%;
  border-radius: 32px;
  background-color: white;
  color: hsl(133, 30%, 41%);
  &:link {
    text-decoration: none;
  }
  
`