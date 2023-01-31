import React from 'react'
import styled from 'styled-components'
import { skills } from '../data/data'

const Skills = () => {
  return (
    <Wrapper>
      <Heading>Technologies I've worked with:</Heading>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <Bullet></Bullet>
            <LiContainer>{skill}</LiContainer>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-flow: column;
  gap: 16px;
`
const Heading = styled.h2`
  font-size: 1.7rem;
  width: 100%;
`
const List = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`
const LiContainer = styled.div``
const Bullet = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border: 2px solid hsl(138, 81%, 29%);
  border-radius: 50%;
`
export default Skills
