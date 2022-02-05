import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import GlobalStyles from './components/globalstyles/GlobalStyles'
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { LolChampions } from './pages/LolChampions'
import { Salvamex } from './pages/Salvamex'

const App = () => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (copied) setCopied(false)
    }, 5000)
  }, [copied])

  return (
    <Wrapper>
      <Navbar />
      <Switch>
        <Route
          path='/contact'
          render={() => <Contact copied={copied} setCopied={setCopied} />}
        />
        <Route path='/projects' render={() => <Projects />} />
        <Route path='/lol-champions' render={() => <LolChampions />} />
        <Route path='/salvamex' render={() => <Salvamex />} />
        <Route exact path='/' render={() => <About />} />
      </Switch>
      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  min-height: 100%;
  background-color: hsl(133, 30%, 41%);
  padding: 16px 8px;
  color: hsl(133, 30%, 41%);
  display: flex;
  flex-flow: column;
  align-items: center;
  /* overflow-y: scroll; */
  font-family: 'Roboto Mono', monospace;
  @media (min-width: 31.25rem) {
    padding: 16px;
  }
  @media (min-width: 56.25rem) {
    padding: 32px;
  }
`

export default App
