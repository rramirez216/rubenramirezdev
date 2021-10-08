import React from 'react'
import styled from 'styled-components'

export const ProjectDetail = ({currentProject}) => {
  return (
    <Wrapper>
      {currentProject.title}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: white;
`