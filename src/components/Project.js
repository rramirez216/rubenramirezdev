import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Project = ({ title, description, stack, repo, demo, hoverVariant }) => {
  hoverVariant.hover.damping = 30
  hoverVariant.hover.scale = 1.1

  return (
    <Wrapper>
      <Title>{title} -</Title>
      <p>{description}</p>
      <LinkWrapper>
        <Link
          href={repo}
          variants={hoverVariant}
          whileHover={hoverVariant.hover}
          target='_blank'
        >
          View Repo
        </Link>
        <Link
          href={demo}
          variants={hoverVariant}
          whileHover={hoverVariant.hover}
          target='_blank'
        >
          Live Demo
        </Link>
      </LinkWrapper>
      <Stack>
        {stack.map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
      </Stack>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
  max-width: 550px;
`
const Title = styled.h3`
  font-size: 1.5rem;
  color: hsl(0, 0%, 30%);
`
const Stack = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  font-style: italic;
`
const Skill = styled.div`
  border: 2px solid hsl(0, 0%, 25%);
  border-radius: 16px;
  padding: 4px 16px;
`
const LinkWrapper = styled.div`
  display: flex;
  gap: 32px;
`
const Link = styled(motion.a)`
  display: block;
  &:link,
  &:visited {
    color: hsl(0, 0%, 25%);
    text-decoration: none;
    cursor: pointer;
  }
  &:hover {
    color: hsl(138, 81%, 29%);
    text-decoration: underline;
  }
`
export default Project
