import React, { useState, useEffect } from "react"
import { Link, navigate } from 'gatsby'

import SEO from "../components/seo"
import styled from 'styled-components/macro'
import { motion, AnimatePresence } from 'framer-motion'
import Image from '../components/Image'
import Info from '../components/Info'

import { fade } from '../utils/framerAnimations'

const imageSize = {
  width: 480
};
const clipSize = {
  width: 480,
  height: 330
}

const getElementPosition = (element) => {
  return {
    x: element.offsetLeft + (element.offsetParent ? getElementPosition(element.offsetParent).x : 0),
    y: element.offsetTop + (element.offsetParent ? getElementPosition(element.offsetParent).y : 0)
  }

}

export default function IndexPage() {

  return (
    <>
      <SEO title="Home" />
      <Wrapper>
        <Image.Container>
          <Info.Upper
            variants={fade}>
            Andrews University, Berrien Springs, United States
          </Info.Upper>
          <ImageCompound />
          <Info.Bottom
            variants={fade}
          >
            {'Danae Keizs'}
          </Info.Bottom>
        </Image.Container>
      </Wrapper>
    </>
  )
}

const ImageCompound = () => {
  const [imageDOM, setImageDOM] = useState(null)

  const handleOnclick = (e) => {
    e.preventDefault()
    navigate(
      '/model/',
      {
        state: {
          imageSize,
          clipSize,
          position: getElementPosition(imageDOM)
        }
      }
    )
  }

  return (
    <Image.ClipContainer style={{ ...clipSize }} ref={setImageDOM}>
      <Image.MotionContainer
        width={imageSize.width}
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: .5
          }
        }}
      >
        <Link to={'/model'} onClick={handleOnclick}>
          <Image />
        </Link>
      </Image.MotionContainer>
    </Image.ClipContainer>
  )
}

const Wrapper = styled.div`

  display:flex;
  justify-content:center;
  align-items:center;

  width:100%;
  height:100%;
`

