import react from 'react'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <Nav>
      <Side>
        <Logo>Ruben Ramirez</Logo>
      </Side>
      <NavLink href='#'>About</NavLink>
      <NavLink href='#'>Projects</NavLink>
      <NavLink href='#'>Contact</NavLink>
      <Side />
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
`
const Side = styled.div`
  flex: 1;
`
const Logo = styled.div`
  font-weight: 900;
  font-size: 2rem;
`
const NavLink = styled.a`
  display: block;
`

export default Navigation
