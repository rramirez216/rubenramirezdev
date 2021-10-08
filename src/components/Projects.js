import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import Blank from '../Assets/images/blank.png'
import {projectsArr} from '../data/data'


export const Projects = ({setProjectPath, setCurrentProject}) => {
  // const projectsArr = 
  //   [
  //     {
  //       img: Blank,
  //       title: 'Project', 
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //       details: {
  //         title: 'project'
  //       }
  //     }
  //   ]

    let [firstProject] = projectsArr
  return (
    <Wrapper>
      <ProjectCard setProjectPath={setProjectPath} details={firstProject} setCurrentProject={setCurrentProject} photo={Blank}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 32px;
  padding: 16px;
`