import React from 'react'
import styled from 'styled-components'
import Portrait from '../../Assets/images/portrait.JPG'

export const About = () => {

  const skills = [' HTML', ' CSS', ' JavaScript', ' React', ' Node.JS', ' MongoDB', ' Express', ' PostgreSQL']

  return (
    <Wrapper>
      <SelfPortrait src={Portrait} alt='A portrait of Ruben Ramirez' />
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac urna et tellus bibendum sodales. Nullam vitae odio urna. Pellentesque tristique dignissim arcu a eleifend. Aliquam erat volutpat. Suspendisse potenti. Quisque vitae tortor ac felis posuere porta.</p>
      <h2>Skills</h2>
      <SkillList>
        {skills.map(skill => <ListItem><Dash></Dash>{skill}</ListItem>)}
      </SkillList>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 100%;
  background-color: white;
  border-radius: 32px;
  padding: 16px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const SelfPortrait = styled.img`
  width: 200px;
  border-radius: 50%;
  margin-top: -100px;
  border: 8px solid white;
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`
const ListItem = styled.li`
  display: flex;
  width: 100px;
  gap: 4px;
`

const Dash = styled.span`
  color: hsl(353, 45%, 37%);
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid hsl(353, 45%, 37%);
  align-self: center;
`