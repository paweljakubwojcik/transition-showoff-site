import React from "react"
import styled from "styled-components"

export default function backgroundThing() {
  return <Thing></Thing>
}

const Thing = styled.div`
  display: block;
  width: 100%;
  height: calc(100% - 50vh);
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  transform: translateY(100%);

  background-color: var(--secondary-background-color);
`
