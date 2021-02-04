
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components/macro'
import { AnimatePresence, motion } from 'framer-motion'

import { GlobalStyles } from './globalStyles'
import Header from "./header"
import BackgroundThing from './backgroundThing'

const duration = 1
const variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: duration,
    },
  },
  exit: {
    opacity: 1,
    transition: { duration: duration },
  },
}

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
      <BackgroundThing />
      <Container>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Main
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </Main>
        </AnimatePresence>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled.div`
    
    width:100%;
    height:100vh;
    padding: 2em 5em;
`

const Main = styled(motion.main)`

  height:100%;
  display:flex;

`

const Footer = styled.footer`
  
  position: fixed;
  bottom:0;

`