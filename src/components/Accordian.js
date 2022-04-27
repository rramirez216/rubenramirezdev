import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'react-feather'

const Accordian = ({ isToggled, setIsToggled }) => {
  return (
    <Wrapper>
      <Button onClick={() => setIsToggled(!isToggled)} isToggled={isToggled}>
        <p>view more</p>
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
              My first coding experience was in Econimics class my senior year
              of high school. The Economics teacher said, while showing us
              Codeacademy, " These will be important skills to have in the
              future." And I continued to self-teach web development on and off
              for a couple of years, until fully commiting to a coding bootcamp
              LEARN academy. While there I built a solid foundation of web
              development fundamentals and obtained a growth mindset.
            </p>
            <p>
              I am now seeking opportunities where I can help a company achieve
              their goals, while also improving my skills and knowledge as a
              developer.
            </p>
            <p>
              Lastly, when not coding I enjoy immersing myself in video games,
              swimming, visiting the beach, and exploring new creative
              interests.
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
const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: hsl(0, 0%, 100%);
  padding: 0;
  margin: 0 0 ${(props) => (props.isToggled ? '24px' : '0')} 0;
  & svg {
    width: 32px;
    height: 32px;
    color: hsl(0, 0%, 25%);
    margin-bottom: -5px;
  }
`
export default Accordian
