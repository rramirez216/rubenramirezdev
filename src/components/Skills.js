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
            {skill}
          </ListItem>
        ))}
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
const ListItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 16px;
`
const Bullet = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border: 4px solid hsl(138, 81%, 29%);
  /* background-color: hsl(138, 81%, 29%); */
  border-radius: 50%;
`
export default Skills
