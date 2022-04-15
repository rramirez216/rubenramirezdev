import React from 'react'
import styled from 'styled-components'

const Skills = () => {
  return (
    <Wrapper>
      <Heading>Technologies I've worked with:</Heading>
      <List>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>Tailwind CSS</ListItem>
        <ListItem>Styled Components</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>Git & Github</ListItem>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`
const Heading = styled.h2`
  font-size: 1.7rem;
  width: 100%;
`
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItem = styled.li``
export default Skills
