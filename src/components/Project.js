import React from 'react'
import styled from 'styled-components'

const Project = ({ title, summary }) => {
  return (
    <Wrapper>
      <h3>{title} -</h3>
      <p>{summary}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`
export default Project
