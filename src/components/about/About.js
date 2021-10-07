import React from 'react'
import styled from 'styled-components'
import Portrait from '../../Assets/images/portrait.JPG'

export const About = () => {

  const skills = [' HTML', ' CSS', ' JavaScript', ' React', ' Node.JS', ' MongoDB', ' Express', ' PostgreSQL']

  return (
    <Wrapper>
      <SelfPortrait src={Portrait} alt='A portrait of Ruben Ramirez' />
      <h1>About Me</h1>
      <Paragraph>
        Hi there! I'm Ruben Ramirez, a self-motivated Full-Stack Web Developer based in San Diego, CA. I have a passion for learning new things, solving problems, and bringing joy to others through code.
      </Paragraph>
      <Paragraph>
        My first coding experience was in Econimics class my senior year of high school. The Economics teacher said, while showing us Codeacademy, " These will be important skills to have in the future." And I continued to self-teach web development on and off for a couple of years, until fully commiting to a coding bootcamp LEARN academy. While there I built a solid foundation of web development fundamentals and obtained a growth mindset. 
      </Paragraph>
      <Paragraph>
        I am now seeking opportunities where I can help a company achieve their goals, while also improving my skills and knowledge as a developer.
      </Paragraph>
      <Paragraph>
        Lastly, when not coding I enjoy immersing myself in video games, swimming, visiting the beach, and exploring new creative interests.
      </Paragraph>
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
  padding: 32px;
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

const Paragraph = styled.p`
  margin-bottom: 16px;
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