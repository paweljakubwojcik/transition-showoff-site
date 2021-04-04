import React, { useEffect, useState } from "react"
import styled from "styled-components/macro"
import { motion } from "framer-motion"
import Image from "../components/Image"
import SEO from "../components/seo"
import GoBackLink from "../components/GoBackLink"
import StaggeredAnimatedText from "../components/StaggerAnimation"
import { graphql } from "gatsby"

import { fade, transition } from "../utils/framerAnimations"

const mediaQuery = window.matchMedia("(max-width: 1000px)")

const imageSize = {
  width: "100vw",
}

export default function Model({ location, data, pageContext }) {
  const [mobile, setMobile] = useState(mediaQuery.matches)

  const handleResize = () => {
    setMobile(mobile =>
      mediaQuery.matches !== mobile ? mediaQuery.matches : mobile
    )
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const clipContainerAnimation = {
    initial: {
      ...location.state?.clipSize,
      ...location.state?.position,
    },
    animate: {
      width: "55vw",
      height: "110vh",
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
    mobile: {
      width: "100vw",
      height: "50vh",
      y: "0vh",
      x: "0vw",
      transition: { ...transition },
    },
  }
  const motionContainerAnimation = {
    initial: {
      width: location.state?.imageSize?.width,
      scale: 1.1,
    },
    animate: {
      width: "100vw",
      scale: 1,
      x: "5%",
      opacity: 1,
      transition: { ...transition },
    },
    mobile: {
      width: "120vw",
      scale: 1,
      x: "-10vw",
      opacity: 0.8,
      transition: { ...transition },
    },
    exit: {
      x: "0%",
      transition: { ...transition },
    },
  }

  const { name } = pageContext

  console.log(mobile)

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
          position: mobile ? "absolute" : "fixed",
          top: 0,
          left: 0,
        }}
        variants={clipContainerAnimation}
        animate={mobile ? "mobile" : "animate"}
        initial="initial"
        exit="exit"
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
  max-width: 100vw;
`

const ModelDetails = styled(motion.div)`
  width: 40vw;
  @media (max-width: 1000px) {
    width: 80vw;
  }
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
  z-index: 3;
  top: calc(50% - 8em);
  height: calc(50% + 6em);
  width: min-content;

  font-size: 1.2em;

  @media (max-width: 1000px) {
    font-size: 1em;
  }

  max-height: 100vh;
`
