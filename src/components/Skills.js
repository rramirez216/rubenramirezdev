import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { skills } from '../data/data'

const Skills = () => {
  const listItemVariant = {
    rest: {
      x: 0,
    },
    hover: {
      x: 25,
    },
  }
  const bulletVariant = {
    rest: {
      // opacity: 0,
      x: 0,
    },
    hover: {
      x: 25,
      // opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.2,
      },
    },
  }
  return (
    <Wrapper>
      <Heading>Technologies I've worked with:</Heading>
      <List>
        {skills.map((skill, index) => (
          <ListItem
            initial='rest'
            whileHover='hover'
            animate='rest'
            key={index}
          >
            <Bullet variants={bulletVariant}></Bullet>
            <LiContainer variants={listItemVariant}>{skill}</LiContainer>
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
  display: flex;
  flex-flow: column;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`
const ListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 8px;
`
const LiContainer = styled(motion.div)``
const Bullet = styled(motion.span)`
  display: block;
  width: 12px;
  height: 12px;
  /* border: 2px solid hsl(0, 0%, 25%); */
  border: 2px solid hsl(138, 81%, 29%);
  /* background-color: hsl(138, 81%, 29%); */
  border-radius: 50%;
`
export default Skills
