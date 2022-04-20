import React from 'react'
import styled from 'styled-components'

const Project = ({ title, description, stack, repo, demo }) => {
  return (
    <Wrapper>
      <Title>{title} -</Title>
      <p>{description}</p>
      <p>Tech Stack: {stack}</p>
      <div>
        <a href={repo}>view repo</a>
        <a href={demo}>live demo</a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`
const Title = styled.h3`
  font-size: 1.5rem;
  /* width: 100%; */
`
export default Project
