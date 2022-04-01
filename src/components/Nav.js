import react from 'react'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <Header>
      <Side>
        <Logo>Ruben Ramirez</Logo>
      </Side>
      <Nav>
        <NavLink href='#'>About</NavLink>
        <NavLink href='#'>Projects</NavLink>
        <NavLink href='#'>Contact</NavLink>
      </Nav>
      <Side />
    </Header>
  )
}

const Header = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  padding: 0 32px;
`
const Side = styled.div`
  flex: 1;
`
const Logo = styled.div`
  font-weight: 900;
  font-size: 2rem;
`
const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0 48px;
`
const NavLink = styled.a`
  text-decoration: none;
`

export default Navigation
