import React from 'react'
import styled from 'styled-components'
// SVG Icons
import { Linkedin, GitHub, Mail } from 'react-feather'
// image
import SelfPortrait from '../Assets/images/portrait.JPG'

const Portrait = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={SelfPortrait} alt='portrait' />
      </ImageWrapper>
      <LinkWrapper>
        <Link href='mailto:rubenramirez.dev@gmail.com'>
          <Mail />
        </Link>
        <Link href='https://www.linkedin.com/in/rubenramirez95/'>
          <Linkedin />
        </Link>
        <Link href='https://github.com/rramirez216'>
          <GitHub />
        </Link>
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 48px;
`
const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`
const Image = styled.img``
const LinkWrapper = styled.div`
  display: flex;
  gap: 24px;
`
const Link = styled.a`
  display: block;
  &:link {
    /* color: hsl(138, 81%, 29%); */
    color: hsl(0, 0%, 25%);
  }
  &:visited {
    /* color: hsl(138, 81%, 29%); */
    color: hsl(0, 0%, 25%);
  }

  & svg {
    height: 32px;
    width: 32px;
  }
`

export default Portrait
