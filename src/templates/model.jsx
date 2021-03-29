import React from "react"
import styled from "styled-components/macro"
import { motion } from "framer-motion"
import Image from "../components/Image"
import SEO from "../components/seo"
import GoBackLink from "../components/GoBackLink"
import StaggeredAnimatedText from "../components/StaggerAnimation"

import { fade, transition } from "../utils/framerAnimations"

const imageSize = {
  width: "100vw",
}
const clipSize = {
  width: "55vw",
  height: "110vh",
}

export default function model({ location, data, pageContext }) {
  const clipContainerAnimation = {
    initial: {
      ...location.state?.clipSize,
      ...location.state?.position,
    },
    animate: {
      ...clipSize,
      y: "-5vh",
      x: "55vw",
      transition: { ...transition },
    },
    exit: {
      width: [null, "100vw", "10vw"],
      x: [null, "0vw", "-10vw"],
      transition: {
        ...transition,
        delay: 0.2,
        ease: [0.42, 0.27, 0.6, 0.87],
      },
    },
  }
  const motionContainerAnimation = {
    initial: {
      width: location.state?.imageSize?.width,
      scale: 1.1,
    },
    animate: {
      ...imageSize,
      scale: 1,
      x: "5%",
      transition: { ...transition },
    },
    exit: {
      x: "0%",
      transition: { ...transition },
    },
  }

  const { name } = pageContext

  return (
    <>
      <Wrapper>
        <SEO title={name} />
        <ModelName>
          <StaggeredAnimatedText>{name}</StaggeredAnimatedText>
        </ModelName>
        <ModelDetails
          variants={fade}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            veniam quisquam nulla repellendus accusantium quia explicabo, omnis
            rerum, nam dignissimos esse, ullam ut officia nostrum unde non quos
            similique repudiandae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            veniam quisquam nulla repellendus accusantium quia explicabo, omnis
            rerum, nam dignissimos esse, ullam ut officia nostrum unde non quos
            similique repudiandae?
          </p>
        </ModelDetails>
        <GoBackLink
          to={"/"}
          style={{
            marginTop: "auto",
          }}
        />
      </Wrapper>
      <Image.ClipContainer
        style={{
          position: "fixed",
          top: 0,
          left: 0,
        }}
        variants={clipContainerAnimation}
      >
        <Image.MotionContainer
          width={imageSize.width}
          variants={motionContainerAnimation}
        >
          <Image data={data.file} />
        </Image.MotionContainer>
      </Image.ClipContainer>
    </>
  )
}

export const pageQuery = graphql`
  query PageQuery($image: String) {
    file(name: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ModelName = styled.h2`
  font-family: var(--header-font);
  font-size: 6em;
  font-weight: 100;
  margin: 0;
  white-space: nowrap;
`

const ModelDetails = styled(motion.div)`
  width: 40vw;
  p {
    font-size: 1.2em;
    margin: 1em 0.1em;
    text-align: justify;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  top: calc(50% - 6em);
  height: calc(50% + 6em);
  width: min-content;

  font-size: 1.2em;
`
