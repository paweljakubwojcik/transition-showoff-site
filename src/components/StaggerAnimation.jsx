import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { transition2 } from "../utils/framerAnimations"

export default ({ children }) => {
  return (
    <Container variants={containerAnim}>
      {children.split(" ").map((word, i) => (
        <React.Fragment key={i}>
          <div key={i}>
            {word.split("").map((letter, i) => (
              <Span key={i} variants={spanAnim}>
                {letter}
              </Span>
            ))}
            <Span> </Span>
          </div>
        </React.Fragment>
      ))}
    </Container>
  )
}

const Container = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`

const Span = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`

const containerAnim = {
  animate: {
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
      when: "beforeChildren",
      ease: transition2.ease,
      staggerDirection: -1,
    },
  },
  exit: {
    x: 0,
    transition: {
      staggerChildren: 1,
    },
  },
}

const spanAnim = {
  initial: {
    y: "200%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    y: "200%",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
}
