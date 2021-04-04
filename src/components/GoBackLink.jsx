import React from 'react'
import styled from 'styled-components/macro'
import Arrow from '../svg/arrow.svg'
import { Link } from 'gatsby'

export default function GoBackLink({ to, ...rest }) {
    return (
        <StyledLink {...rest} to={to}>
            <Arrow />
        </StyledLink>
    )
}

const StyledLink = styled(Link)`

    display:block;
    width:30px;
    height:30px;
    font-size:1em;

    margin: 2em 0;
`
