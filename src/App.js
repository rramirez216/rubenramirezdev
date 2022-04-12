import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
// components
import GlobalStyles from './components/globalstyles/GlobalStyles'
import Navigation from './components/Nav'
import Portrait from './components/Portrait'
import About from './components/About'
// image

// SVG Icons

const App = () => {
  // const [copied, setCopied] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (copied) setCopied(false)
  //   }, 5000)
  // }, [copied])

  return (
    <Wrapper>
      <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Main>
        <Portrait />
        <About />
      </Main>
      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 1.5rem;
`
const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 16px;
`

export default App
