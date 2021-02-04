import React from 'react'
import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export default function Info() {
    return (
        <div>

        </div>
    )
}

Info.Bottom = styled(motion.p)`
    font-family:var(--header-font);
    font-size:1.2em;

    position:absolute;
    top:100%;
`
Info.Upper = styled(motion.p)`
    
    position:absolute;
    top:0;
    right:0;
    transform:translateY(-100%);
`