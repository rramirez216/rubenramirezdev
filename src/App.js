import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
// components
import GlobalStyles from './components/globalstyles/GlobalStyles'
import Navigation from './components/Nav'
// image
import Portrait from './Assets/images/portrait.JPG'

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
        <ImageWrapper>
          <Image src={Portrait} alt='portrait' />
        </ImageWrapper>
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
`
const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`
const Image = styled.img`
  display: block;
  /* width: 100%; */
`

export default App
