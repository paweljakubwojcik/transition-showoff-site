import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'

import SEO from "../components/seo"
import styled from 'styled-components/macro'
import { motion, AnimatePresence } from 'framer-motion'
import Image from '../components/Image'

const imageSize = {
  width: 480
};
const clipSize = {
  width: 480,
  height: 330
}

const transition = { duration: .6, ease: [0.39, 0.575, 0.565, 1] }

const getElementPosition = (element) => {
  return {
    x: element.offsetLeft + (element.offsetParent ? getElementPosition(element.offsetParent).x : 0),
    y: element.offsetTop + (element.offsetParent ? getElementPosition(element.offsetParent).y : 0)
  }

}


export default function IndexPage({ location }) {

  const [imageDOM, setImageDOM] = useState(null)
  const [imagePosition, setImagePosition] = useState(null)

  useEffect(() => {
    if (imageDOM) {
      setImagePosition(getElementPosition(imageDOM))
    }

    return () => {

    }
  }, [imageDOM])

  return (
    <>
      <SEO title="Home" />
      <Wrapper>
        <Image.Container>
          <Image.ClipContainer style={{ ...clipSize }} ref={setImageDOM}>
            <Image.MotionContainer width={imageSize.width} whileHover={{ scale: 1.1 }}>
              <Link to='/model' state={{ imageSize, clipSize, position: imagePosition }}>
                <Image />
              </Link>
            </Image.MotionContainer>
          </Image.ClipContainer>
          <ModelName
            key={location.pathname}
            exit={{
              opacity: 0,
              transition: { duration: 1 }
            }}>
            {'Danae Keizs'}
          </ModelName>
        </Image.Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`

  display:flex;
  justify-content:center;
  align-items:center;

  width:100%;
  height:100%;
`

const ModelName = styled.p`
    font-family:var(--header-font);
    font-size:1.2em;

    position:absolute;
    top:100%;

`
