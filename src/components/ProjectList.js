import React from 'react'
import styled from 'styled-components'
import Project from './Project'

const ProjectList = () => {
  return (
    <Wrapper>
      <h2>Projects</h2>
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
export default ProjectList
