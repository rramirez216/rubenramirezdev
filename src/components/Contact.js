import React from 'react'
import styled from 'styled-components'
import { Copy, GitHub, Linkedin, Twitter, Mail } from 'react-feather'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const Contact = ({copied, setCopied}) => {
  return (
    <Wrapper>
      <h1>Get in touch:</h1>
      <SocialWrapper>
        <a href="https://github.com/rramirez216">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/rubenramirez95/">
          <Linkedin />
        </a>
        <a href="https://twitter.com/ClearSwitch_">
          <Twitter />
        </a>
        <a href="mailto:rubenramirez.dev@gmail.com">      
          <Mail/>
        </a>
      </SocialWrapper>
      <h1>Copy:</h1>
      <CopyText>{copied ? 'Copied!' : 'rubenramirez.dev@gmail.com'}</CopyText>
      <CopyToClipboard text='rubenramirez.dev@gmail.com' onCopy={() => setCopied(true)}>
        <CopyButton />
      </CopyToClipboard>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 868px;
  min-width: 334px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: white;
  padding: 16px;
  border-radius: 32px;
  @media (min-width: 34.375rem) {
    padding: 32px;
  }

  @media (min-width: 54.375rem) {
    padding: 64px;
  }
`
const SocialWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 32px;
  margin: 16px 0 32px;
  & > a {
    display: block;
  }

  & > a:link {
    color: #8a343e;
  }
  
  & > a:visited {
  color: #8a343e;
}

  & > a > svg {
    display: block;
    width: 32px;
    height: 32px;
  }
`

const CopyText = styled.h3`
  margin: 16px 0 32px;
`

const CopyButton = styled(Copy)`
  display: block;
  width: 32px;
  height: 32px;
  color: #8a343e;
`