import React, { useState, useEffect } from "react"

import SEO from "../components/seo"
import styled from "styled-components/macro"
import Image from "../components/Image"
import Info from "../components/Info"
import ImageCompound from "../components/ImageCompound"
import { useStaticQuery, graphql } from "gatsby"
import models from "../constants/models"

import { fade } from "../utils/framerAnimations"

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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  padding-top: 3em;

  width: 100%;
  min-height: calc(100vh - 4em);
`
