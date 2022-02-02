import React from 'react'
import styled from 'styled-components'
import SalvamexGif from '../Assets/images/salvamex.gif'
import { Code, ExternalLink } from 'react-feather'
import { projectsArr } from '../data/data'

export const Salvamex = () => {
  return (
    <Wrapper>
      <MainHeading>{projectsArr[1].title}</MainHeading>
      <p>{projectsArr[1].view.summary}</p>
      <InnerWrapper>
        <ListWrapper>
          <h2>Tech Stack</h2>
          <List>
            {projectsArr[1].view.stack.map((value, index) => (
              <ListItem key={index}>
                <Dash></Dash>
                {value}
              </ListItem>
            ))}
            {/* <ListItem>
              <Dash></Dash>CSS
            </ListItem>
            <ListItem>
              <Dash></Dash>JavaScript
            </ListItem>
            <ListItem>
              <Dash></Dash>ReactJS
            </ListItem> */}
          </List>
        </ListWrapper>
        <LinkWrapper>
          <h2>Code</h2>
          <a href='https://github.com/rramirez216/Salvamex'>
            <Code />
          </a>
        </LinkWrapper>
        <LinkWrapper>
          <h2>Demo</h2>
          <a href='https://salvamexconstruction.com'>
            <ExternalLink />
          </a>
        </LinkWrapper>
      </InnerWrapper>
      <Gif src={SalvamexGif} alt='lol champions homepage' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 550px;
  background-color: white;
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const MainHeading = styled.h1`
  margin-bottom: 32px;
`

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: 32px 0;
`

const Gif = styled.img`
  width: 100%;
  border-radius: 32px;
`

const ListWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  width: 100px;
  gap: 4px;
  margin: 8px;
`

const Dash = styled.span`
  color: hsl(353, 45%, 37%);
  display: inline-block;
  min-width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid hsl(353, 45%, 37%);
  align-self: center;
`

const LinkWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  & > a {
    display: block;
  }

  & > a:link {
    color: #8a343e;
  }

  & > a:visited {
    color: #8a343e;
  }

  & > a > svg {
    display: block;
    width: 32px;
    height: 32px;
  }
`
