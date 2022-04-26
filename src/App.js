import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
// components
import GlobalStyles from './components/globalstyles/GlobalStyles'
import Navigation from './components/Nav'
import Portrait from './components/Portrait'
import About from './components/About'
import Skills from './components/Skills'
import ProjectList from './components/ProjectList'
import Contact from './components/Contact'

const App = () => {
  const [copied, setCopied] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isToggled, setIsToggled] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (copied) setCopied(false)
    }, 5000)
  }, [copied])

  return (
    <Wrapper>
      <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Main>
        <Portrait />
        <About isToggled={isToggled} setIsToggled={setIsToggled} />
        <Skills />
        <ProjectList />
        <Contact copied={copied} setCopied={setCopied} />
      </Main>
      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 1.5rem;
  color: hsl(0, 0%, 25%);
`
const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0 16px 32px;
  gap: 64px;
`

export default App
