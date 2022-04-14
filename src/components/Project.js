import React from 'react'
import styled from 'styled-components'

const Project = ({ title, summary }) => {
  return (
    <Wrapper>
      <Title>{title} -</Title>
      <p>{summary}</p>
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
