import react from 'react'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <nav>
      <Name>Ruben Ramirez</Name>
      <div>About</div>
      <div>Projects</div>
      <div>Contact</div>
    </nav>
  )
}

const Name = styled.div`
  font-weight: 900;
  font-size: 2rem;
`

export default Navigation
