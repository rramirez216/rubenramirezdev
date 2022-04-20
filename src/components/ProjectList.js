import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import { projectsArr } from '../data/data'

const ProjectList = () => {
  return (
    <Wrapper>
      <Heading>Projects</Heading>
      <div>
        {projectsArr.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            stack={project.stack}
            repo={project.repo}
            demo={project.demo}
            key={project.id}
          />
        ))}
      </div>
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
export default ProjectList
