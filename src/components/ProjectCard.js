import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ChevronsRight } from 'react-feather'

export const ProjectCard = ({setProjectPath, details, setCurrentProject, photo}) => {
  return (
    <Wrapper>
      <ProjectImage src={photo} alt='League of legends react app'/>
      <ProjectTitle>{details.title}</ProjectTitle>
      <ProjectText>{details.description}</ProjectText>
        <Details 
          to={`/${details.name}`} 
          onClick={() => {
          setCurrentProject(details.view)
          setProjectPath(details.name)
        }}>
          <LinkText>View Details</LinkText>
          <Chevrons /> 
        </Details>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 350px;
  min-width: 300px;
  background-color: white;
  border-radius: 32px;
  padding: 16px;
  display: flex;
  flex-flow: column nowrap;
  border: 2px solid hsl(353, 45%, 37%);
`

const ProjectImage = styled.img`
  border-radius: 32px;
`

const ProjectTitle = styled.h2`
  margin: 16px 0 8px;
`

const ProjectText = styled.p`
  margin-bottom: 16px
`

const Details = styled(Link)`
  display: flex;
  /* color: hsl(353, 45%, 37%); */
  width: fit-content;
  background-color: hsl(353, 45%, 37%);
  padding: 8px;
  border-radius: 16px;
  color: white;
  &:link {
    text-decoration: none;
  }

  & > svg {
    display: block;
    
  }
`

const LinkText = styled.span`
  display: block;

`

const Chevrons = styled(ChevronsRight)`
  /* color: #8a343e; */
  color: white;
`