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

  const hoverVariant = {
    hover: {
      scale: 1.2,
      transition: { type: 'spring', damping: 10, stiffness: 700 },
    },
  }

  useEffect(() => {
    setTimeout(() => {
      if (copied) setCopied(false)
    }, 5000)
  }, [copied])

  return (
    <Wrapper>
      <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Main>
        <Portrait hoverVariant={hoverVariant} />
        <About
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          hoverVariant={hoverVariant}
        />
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
  display: flex;
  flex-flow: column;
  max-width: 960px;
  margin: 0 auto;
`
const Main = styled.main`
  align-self: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0 16px 32px;
  gap: 64px;
  max-width: 720px;
`

export default App
