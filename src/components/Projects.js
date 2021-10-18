import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import Blank from '../Assets/images/blank.png'
import {projectsArr} from '../data/data'


export const Projects = ({setProjectPath, setCurrentProject}) => {
  return (
    <Wrapper>
    {projectsArr.map((value, index) => <ProjectCard key={index} setProjectPath={setProjectPath} details={value} setCurrentProject={setCurrentProject} photo={Blank}/> )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 334px;
  max-width: 868px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: white;
  border-radius: 32px;
  padding: 16px;
  gap: 16px;


@media (min-width: 500px) {
  /* Tablets */
}
@media (min-width: 48rem) {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 32px;
}
@media (min-width: 54.375rem) {
  
}
@media (min-width: 1500px) {
  /* Desktop */
}
`