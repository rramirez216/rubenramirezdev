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
    </Wrapper>
  )
}

const Wrapper = styled.div`
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

export default Portrait
