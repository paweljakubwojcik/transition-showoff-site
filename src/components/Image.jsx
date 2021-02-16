import React from 'react'
import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Image = ({ ...rest }) => {

  const data = useStaticQuery(graphql`
      query MyQuery {
        file(name: {eq: "Danae-Keizs-medium"}) {
          childImageSharp {
            fluid(maxWidth:2000){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  return (
    <Img {...rest} fluid={data.file.childImageSharp.fluid} ></Img>
  )
}

//element to add size to gatsby image component
Image.MotionContainer = styled(motion.div)`
  width:${props => props.width || 800}px;
  flex-shrink:0;
  transform-origin: center center;

`

Image.ClipContainer = styled(motion.div)`
  display:flex;
  align-items:center;
  justify-content: center;
  transform-origin: center center;

  overflow: hidden;
`

Image.Container = styled(motion.div)`
  position:relative;
`

export default Image