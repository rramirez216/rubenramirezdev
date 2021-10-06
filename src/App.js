import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './components/globalstyles/GlobalStyles'
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar'
import { About } from './components/about/About'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <InnerWrapper>
        <Switch>
          <Route path='/contact' render={() => <Contact />}/>
          <Route path='/projects' render={() => <Projects />}/>
          <Route exact path='/' render={() => <About />}/>
        </Switch>
      </InnerWrapper>
      
      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: hsl(133, 30%, 41%);
  padding: 16px;
  color: hsl(133, 30%, 41%);
  display: flex;
  flex-flow: column;
`

const InnerWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
`

export default App;
