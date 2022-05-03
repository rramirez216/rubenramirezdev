import React from 'react'
import styled from 'styled-components'
import Accordian from './Accordian'

const About = ({ isToggled, setIsToggled, hoverVariant }) => {
  return (
    <Wrapper>
      <Heading>About</Heading>
      <Paragraph>
        Hi there! I'm Ruben Ramirez, a self-motivated Frontend Web Developer
        based in San Diego, CA. I have a passion for learning new things,
        solving problems, and bringing joy to others through code.
      </Paragraph>
      <Accordian
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        hoverVariant={hoverVariant}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
const Heading = styled.h2`
  font-size: 1.7rem;
  width: 100%;
`
const Paragraph = styled.p`
  hyphens: auto;
`
export default About
