import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'react-feather'

const Accordian = ({ isToggled, setIsToggled, hoverVariant }) => {
  return (
    <Wrapper>
      <Button
        onClick={() => setIsToggled(!isToggled)}
        isToggled={isToggled}
        variants={hoverVariant}
        whileHover={hoverVariant.hover}
      >
        The long version
        {isToggled ? <ChevronUp /> : <ChevronDown />}
      </Button>
      <AnimatePresence>
        {isToggled && (
          <motion.article
            style={{ overflow: 'hidden' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p>
              My first coding experience was in Economics class during my senior
              year of high school. The Economics teacher said, while showing us
              Codeacademy, " These will be important skills to have in the
              future." And I continued to self-teach web development on and off
              for a couple of years until I fully committed to attend the coding
              bootcamp LEARN academy. While there I built a solid foundation of
              web development fundamentals and obtained a growth mindset.
            </p>
            <br />
            <p>
              I am now seeking opportunities where I can help a company achieve
              its goals, while also improving my skills and knowledge as a
              developer.
            </p>
            <br />
            <p>
              Lastly, when not coding I enjoy immersing myself in video games,
              swimming, inline skating, and exploring new creative interests.
            </p>
          </motion.article>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  border: none;
  background-color: hsl(0, 0%, 100%);
  padding: 0;
  margin: 0 0 ${(props) => (props.isToggled ? '24px' : '0')} 0;
  cursor: pointer;
  & svg {
    width: 32px;
    height: 32px;
    color: hsl(0, 0%, 25%);
    margin-bottom: -5px;
  }

  &:hover {
    color: hsl(138, 81%, 29%);
  }

  &:hover svg {
    color: hsl(138, 81%, 29%);
  }
`
export default Accordian
