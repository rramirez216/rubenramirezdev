import React from 'react'
import styled from 'styled-components'
import Portrait from '../Assets/images/portrait.JPG'
import { skills, aboutParagraphs} from '../data/data'

export const About = () => {

  return (
    <Wrapper>
      {/* <ImageWrapper> */}
        <SelfPortrait src={Portrait} alt='A portrait of Ruben Ramirez' />
      {/* </ImageWrapper> */}
      
      <ParagraphWrapper>
        <Heading>About Me</Heading>
        {aboutParagraphs.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
      </ParagraphWrapper>
      <SkillsWrapper>
      <Heading>Skills</Heading>
      <SkillList>
        {skills.map((skill, i) => <ListItem key={i}><Dash></Dash>{skill}</ListItem>)}
      </SkillList>
      </SkillsWrapper>
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

  @media (min-width: 56.25rem) {
    max-width: 960px;
    display: grid;
    column-gap: 32px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 100px 1fr;
    
  }
`

const ParagraphWrapper = styled.div`
  grid-column: span 3;
`

const SkillsWrapper = styled.div`
grid-column: span 2;
/* align-self: center; */
justify-self: center;
@media (min-width: 56.35rem) {
  align-self: start;
}
`

const SelfPortrait = styled.img`
  width: 200px;
  border-radius: 50%;
  margin-top: -100px;
  border: 8px solid white;
  grid-column: span 5;
  justify-self: center;
  @media (min-width: 56.35rem) {
  width: 250px;
  margin-top: -125px;
}
`

const Heading = styled.h1`
  text-align: center;
  margin: 32px 0;
  color: hsl(353, 45%, 37%);
`

const Paragraph = styled.p`
  margin-bottom: 16px;
  &:nth-child(6) {
    margin: 0;
  }
`

const Highlight = styled.span`
  font-weight: 700;
  color: hsl(353, 45%, 37%);
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 16px;
  @media (min-width: 56.25rem) {
    display: grid;
    gap: 16px 0;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  
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