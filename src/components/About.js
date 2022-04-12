import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <h2>About</h2>
      <p>
        Hi there! I'm Ruben Ramirez, a self-motivated Frontend Web Developer
        based in San Diego, CA. I have a passion for learning new things,
        solving problems, and bringing joy to others through code.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`
export default About
