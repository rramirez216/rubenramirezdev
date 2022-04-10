import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
// components
import GlobalStyles from './components/globalstyles/GlobalStyles'
import Navigation from './components/Nav'
// image
import Portrait from './Assets/images/portrait.JPG'
// SVG Icons
import { Linkedin, GitHub, Mail } from 'react-feather'

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
        <ImageAndLinkContainer>
          <ImageWrapper>
            <Image src={Portrait} alt='portrait' />
          </ImageWrapper>
          <LinkWrapper>
            <Link href=''>
              <Mail />
            </Link>
            <Link href=''>
              <Linkedin />
            </Link>
            <Link href=''>
              <GitHub />
            </Link>
          </LinkWrapper>
        </ImageAndLinkContainer>
        <About>
          {/* <h1>About</h1> */}
          <p>
            Hi there! I'm Ruben Ramirez, a self-motivated Frontend Web Developer
            based in San Diego, CA. I have a passion for learning new things,
            solving problems, and bringing joy to others through code.
          </p>
        </About>
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
const ImageAndLinkContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
const LinkWrapper = styled.div`
  display: flex;
  gap: 16px;
`
const Link = styled.a`
  display: block;
`
const About = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

export default App
