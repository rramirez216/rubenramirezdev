import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Menu, X } from 'react-feather'

const Navigation = ({ isNavOpen, setIsNavOpen }) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: '-100%' },
  }
  return (
    <Header>
      <Side>
        <Logo>Ruben Ramirez</Logo>
      </Side>
      <Nav>
        <NavLink href='#about'>About</NavLink>
        <NavLink href='#projects'>Projects</NavLink>
        <NavLink href='#contact'>Contact</NavLink>
        <MenuButton onClick={() => setIsNavOpen(true)} />
      </Nav>
      <MobileNav
        variants={variants}
        initial='closed'
        animate={() => (isNavOpen ? 'open' : 'closed')}
      >
        <CloseButton onClick={() => setIsNavOpen(false)} />
        <MobileNavLink onClick={() => setIsNavOpen(false)} href='#about'>
          About
        </MobileNavLink>
        <MobileNavLink onClick={() => setIsNavOpen(false)} href='#projects'>
          Projects
        </MobileNavLink>
        <MobileNavLink onClick={() => setIsNavOpen(false)} href='#contact'>
          Contact
        </MobileNavLink>
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
  & ${Side}:nth-child(4) {
    display: none;
  }
  @media (min-width: 37.375rem) {
    & ${Side}:nth-child(4) {
      display: block;
    }
  }
`

const Logo = styled.div`
  font-weight: 900;
  font-size: 2rem;
  width: max-content;
`
const MobileNav = styled(motion.nav)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 96px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: hsl(138, 81%, 29%);
`
const MobileNavLink = styled(motion.a)`
  display: block;
  text-decoration: none;
  &:link {
    color: hsl(0, 0%, 100%);
  }
  &:visited {
    color: hsl(0, 0%, 100%);
  }
`
const CloseButton = styled(X)`
  height: 32px;
  width: 32px;
  position: fixed;
  top: 16px;
  right: 16px;
  color: white;
`
const Nav = styled.nav`
  display: flex;
  align-self: center;
  @media (min-width: 34.375rem) {
    margin-left: auto;
    margin: 0 24px;
  }

  @media (min-width: 44.375rem) {
    gap: 48px;
    margin: 0 48px;
  }
`
const MenuButton = styled(Menu)`
  width: 32px;
  height: 32px;
  @media (min-width: 37.375rem) {
    display: none;
  }
`
const NavLink = styled(motion.a)`
  text-decoration: none;
  display: none;
  padding: 4px 16px;
  border: 1px solid hsl(0, 0%, 100%);
  border-radius: 8px;
  &:hover {
    border-color: hsl(0, 0%, 80%);
    background-color: hsl(0, 0%, 93%);
  }
  &:link {
    /* color: hsl(138, 81%, 29%); */
    color: hsl(0, 0%, 25%);
  }
  &:visited {
    /* color: hsl(138, 81%, 29%); */
    color: hsl(0, 0%, 25%);
  }
  @media (min-width: 37.375rem) {
    display: block;
  }
`

export default Navigation
