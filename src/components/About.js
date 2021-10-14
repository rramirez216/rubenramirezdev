import React from 'react'
import styled from 'styled-components'
import Portrait from '../Assets/images/portrait.JPG'
import { skills, aboutParagraphs} from '../data/data'

export const About = () => {

  return (
    <Wrapper>
      <SelfPortrait src={Portrait} alt='A portrait of Ruben Ramirez' />
      <Heading>About Me</Heading>
      {aboutParagraphs.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
      <Heading>Skills</Heading>
      <SkillList>
        {skills.map((skill, i) => <ListItem key={i}><Dash></Dash>{skill}</ListItem>)}
      </SkillList>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  /* width: 100%; */
  max-width: 550px;
  background-color: white;
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  /* border: 4px solid hsl(353, 45%, 37%); */
`

const Heading = styled.h1`
  margin: 32px 0;
  color: hsl(353, 45%, 37%);
`

const SelfPortrait = styled.img`
  width: 200px;
  border-radius: 50%;
  margin-top: -100px;
  border: 8px solid white;
  /* border: 4px solid hsl(353, 45%, 37%); */
`

const Paragraph = styled.p`
  margin-bottom: 16px;
  &:nth-child(6) {
    margin: 0;
  }
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
  min-width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid hsl(353, 45%, 37%);
  align-self: center;
`