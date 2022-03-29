import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
// components
import GlobalStyles from './components/globalstyles/GlobalStyles'
import Navigation from './components/Nav'

const App = () => {
  // const [copied, setCopied] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (copied) setCopied(false)
  //   }, 5000)
  // }, [copied])

  return (
    <Wrapper>
      <Navigation />
      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 1.5rem;
`

export default App
