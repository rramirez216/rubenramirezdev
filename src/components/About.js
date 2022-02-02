import React from 'react'
import styled from 'styled-components'
import Portrait from '../Assets/images/portrait.JPG'
import { skills, aboutParagraphs } from '../data/data'

export const About = () => {
  return (
    <Wrapper>
      <SelfPortrait src={Portrait} alt='A portrait of Ruben Ramirez' />
      <InnerWrapper>
        <Heading>About Me</Heading>
        <Paragraph>
          Hi there! I'm <Highlight>Ruben Ramirez</Highlight>, a self-motivated{' '}
          <Highlight>Frontend Web Developer</Highlight> based in San Diego, CA.
          I have a passion for learning new things, solving problems, and
          bringing joy to others through code.
        </Paragraph>
        {aboutParagraphs.map((p, i) => (
          <Paragraph key={i}>{p}</Paragraph>
        ))}
        <Heading>Skills</Heading>
        <SkillList>
          {skills.map((skill, i) => (
            <ListItem key={i}>
              <Dash></Dash>
              {skill}
            </ListItem>
          ))}
        </SkillList>
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  max-width: 550px;
  background-color: white;
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  @media (min-width: 56.25rem) {
    max-width: 960px;
  }
`

const InnerWrapper = styled.div`
  @media (min-width: 56.25rem) {
    align-self: flex-start;
    width: 50%;
    display: flex;
    flex-flow: column wrap;
    height: 600px;
  }
`

const SelfPortrait = styled.img`
  width: 200px;
  border-radius: 50%;
  margin-top: -100px;
  border: 8px solid white;
  grid-column: span 5;
  justify-self: center;
  box-shadow: rgb(138 52 62 / 75%) 2px 4px 2px;
  @media (min-width: 56.35rem) {
    width: 250px;
    margin-top: -125px;
  }
`

const Heading = styled.h1`
  text-align: center;
  margin: 32px 0;
  color: hsl(353, 45%, 37%);
  &:nth-child(6) {
    margin: 0 0 32px;
  }
`

const Paragraph = styled.p`
  margin-bottom: 24px;
  &:nth-child(6) {
    margin: 0;
  }
  @media (min-width: 56.35rem) {
    &:nth-child(4) {
      margin-top: 100px;
    }
  }
`

const Highlight = styled.span`
  font-weight: 700;
  color: hsl(353, 45%, 37%);
  text-decoration: underline;
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 16px;
  margin: 0 0 0;
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
  gap: 8px;
  &:nth-child(4) {
    order: 2;
  }
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
