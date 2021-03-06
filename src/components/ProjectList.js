import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import { projectsArr } from '../data/data'

const ProjectList = ({ hoverVariant }) => {
  return (
    <Wrapper id='projects'>
      <Heading>Projects</Heading>
      <ListWrapper>
        {projectsArr.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            stack={project.stack}
            repo={project.repo}
            demo={project.demo}
            key={project.id}
            hoverVariant={hoverVariant}
          />
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-flow: column;
  gap: 16px;
`
const Heading = styled.h2`
  font-size: 1.7rem;
  width: 100%;
`
const ListWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 32px;
`
export default ProjectList
