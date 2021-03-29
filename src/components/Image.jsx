import React from "react"
import styled from "styled-components/macro"
import { motion } from "framer-motion"
import Img from "gatsby-image"

const Image = ({ data, ...rest }) => {
  return <Img {...rest} fluid={data.childImageSharp.fluid}></Img>
}

//element to add size to gatsby image component
Image.MotionContainer = styled(motion.div)`
  width: ${props => props.width || 800}px;
  flex-shrink: 0;
  transform-origin: center center;
`

Image.ClipContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center center;

  overflow: hidden;
`

Image.Container = styled(motion.div)`
  position: relative;
`

export default Image
