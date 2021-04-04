import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components/macro"
import { AnimatePresence, motion } from "framer-motion"

import { GlobalStyles } from "./globalStyles"
import Header from "./header"
import BackgroundThing from "./backgroundThing"
export default function Layout({ children, location }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Main
            key={location?.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </Main>
        </AnimatePresence>

        {/* <BackgroundThing /> */}
      </Container>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled.div`
  display: grid;
  align-items: stretch;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  width: 100%;
  height: 100vh;
  padding: 2em 5em;

  scrollbar-width: thin;
  scrollbar-color: #8c7759c2 #ffeedc; /* scroll thumb & track */
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #ffeedc;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #8c7759c2;
    border-radius: 20px;
    width: 12px;
  }

  @media (max-width: 600px) {
    padding: 2em 1em;
  }
`

const Main = styled(motion.main)`
  height: 100%;
  display: flex;
`

const Footer = styled.footer`
  
  bottom: 0;
`
