import React from 'react'
import styled from 'styled-components'
import { Menu, X } from 'react-feather'

const Navigation = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <Header>
      <Side>
        <Logo>Ruben Ramirez</Logo>
      </Side>
      <Nav>
        <NavLink href='#'>About</NavLink>
        <NavLink href='#'>Projects</NavLink>
        <NavLink href='#'>Contact</NavLink>
        <MenuButton onClick={() => setIsNavOpen(true)} />
      </Nav>
      <MobileNav>
        <CloseButton onClick={() => setIsNavOpen(false)} />
      </MobileNav>
      <Side />
    </Header>
  )
}
const Side = styled.div`
  @media (min-width: 34.375rem) {
    flex: 1;
  }
`
const Header = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 16px;
  & ${Side}:nth-child(3) {
    display: none;
  }
  @media (min-width: 34.375rem) {
    & ${Side}:nth-child(3) {
      display: block;
    }
  }
`

const Logo = styled.div`
  font-weight: 900;
  font-size: 2rem;
  /* width: max-content; */
`
const MobileNav = styled.nav`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: green;
`
const CloseButton = styled(X)`
  height: 32px;
  width: 32px;
  position: fixed;
  top: 16px;
  right: 16px;
`
const Nav = styled.nav`
  display: flex;
  align-self: center;
  /* gap: 48px; */
  /* margin: 0 48px; */
`
const MenuButton = styled(Menu)`
  width: 32px;
  height: 32px;
`
const NavLink = styled.a`
  text-decoration: none;
  display: none;
  @media (min-width: 34.375rem) {
    display: block;
  }
`

export default Navigation