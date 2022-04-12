import React from 'react'
import styled from 'styled-components'

const Skills = () => {
  return (
    <Wrapper>
      <h2>Technologies I've worked with:</h2>
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
`
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItem = styled.li``
export default Skills
