import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ChevronsRight } from 'react-feather'
import Lol from '../Assets/images/lol-champions-screenshot.png'
import salvamex from '../Assets/images/salvamex.png'

export const ProjectCard = ({ details }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ProjectImage
          src={details.id === 0 ? Lol : salvamex}
          alt='League of legends react app'
        />
      </ImageWrapper>
      <ProjectTitle>{details.title}</ProjectTitle>
      <ProjectText>{details.description}</ProjectText>
      <Details to={details.id === 0 ? 'lol-champions' : 'Salvamex'}>
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
  /* border: 2px solid hsl(353, 45%, 37%); */
  box-shadow: rgb(138 52 62 / 75%) 2px 4px 4px;
`

const ImageWrapper = styled.div`
  border-radius: 32px;
  overflow: hidden;
`

const ProjectImage = styled.img`
  border-radius: 32px;
  display: block;
  transition: transform 500ms ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
`

const ProjectTitle = styled.h2`
  margin: 32px 0 16px;
`

const ProjectText = styled.p`
  margin-bottom: 16px;
`

const Details = styled(Link)`
  display: flex;
  width: fit-content;
  background-color: hsl(353, 45%, 37%);
  padding: 8px;
  border-radius: 16px;
  box-shadow: rgb(138 52 62 / 75%) 2px 4px 2px;
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
  color: white;
`
