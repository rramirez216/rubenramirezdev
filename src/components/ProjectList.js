import React from 'react'
import styled from 'styled-components'
import Project from './Project'

const ProjectList = () => {
  return (
    <Wrapper>
      <Heading>Projects</Heading>
      <Project
        title={'Random Champion Generator'}
        summary={
          'Randomly picks a league of legends champion for you to play in your next match.'
        }
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`
const Heading = styled.h2`
  font-size: 1.7rem;
  width: 100%;
`
export default ProjectList
