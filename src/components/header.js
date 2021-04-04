import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components/macro"

const Header = ({ siteTitle }) => <Head>{siteTitle}</Head>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Head = styled.h1`
  letter-spacing: -0.05em;
  position: fixed;
  z-index: 3;
  margin: 0 1em;
`
