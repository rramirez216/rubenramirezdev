import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = ({ copied, setCopied, hoverVariant }) => {
  return (
    <Wrapper id='contact'>
      <Heading>Get In Touch</Heading>
      {copied ? (
        <p>Copied!</p>
      ) : (
        <CopyToClipboard
          text='rubenramirez.dev@gmail.com'
          onCopy={() => setCopied(!copied)}
        >
          <Email variants={hoverVariant} whileHover={hoverVariant.hover}>
            <p>rubenramirez.dev@gmail.com</p>
          </Email>
        </CopyToClipboard>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
  width: 100%;
  overflow-wrap: break-word;
`
const Heading = styled.h2`
  font-size: 1.7rem;
  width: 100%;
`
const Email = styled(motion.div)`
  cursor: pointer;
  &:hover {
    color: hsl(138, 81%, 29%);
  }
`
export default Contact
