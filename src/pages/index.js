import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"

import SEO from "../components/seo"
import styled from "styled-components/macro"
import { motion, AnimatePresence } from "framer-motion"
import Image from "../components/Image"
import Info from "../components/Info"
import { useStaticQuery, graphql } from "gatsby"
import models from "../constants/models"

import { fade } from "../utils/framerAnimations"

const imageSize = {
  width: 480,
}
const clipSize = {
  width: 480,
  height: 330,
}

const getElementPosition = element => {
  return {
    x:
      element.offsetLeft +
      (element.offsetParent ? getElementPosition(element.offsetParent).x : 0),
    y:
      element.offsetTop +
      (element.offsetParent ? getElementPosition(element.offsetParent).y : 0),
  }
}

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "" } }) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Wrapper>
        {models.map(({ name, location, image }, index) => {
          const imageData = data.allFile.nodes.find(
            ({ name }) => name === image
          )

          return (
            <Image.Container key={index}>
              <Info.Upper variants={fade}>{location}</Info.Upper>
              <ImageCompound data={imageData} name={name} />
              <Info.Bottom variants={fade}>{name}</Info.Bottom>
            </Image.Container>
          )
        })}
      </Wrapper>
    </>
  )
}

const ImageCompound = ({ data, name }) => {
  const [imageDOM, setImageDOM] = useState(null)
  const [clicked, setClicked] = useState(false)

  const handleOnclick = e => {
    e.preventDefault()
    setClicked(true)
    navigate(`/models/${name}`, {
      state: {
        imageSize,
        clipSize,
        position: getElementPosition(imageDOM),
      },
    })
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
            duration: 0.5,
          },
        }}
        exit={{
          opacity: clicked ? 1 : 0,
        }}
      >
        <Link to={`/models/${name}`} onClick={handleOnclick}>
          <Image data={data} />
        </Link>
      </Image.MotionContainer>
    </Image.ClipContainer>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  padding-top: 2em;

  width: 100%;
  height: 100%;
`
