import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { transition2 } from '../utils/framerAnimations'




export default ({ children }) => {


    return (
        <Container
            variants={containerAnim}
        >
            { children.split('').map((letter, i) =>
                <Span
                    key={i}
                    variants={spanAnim}
                >
                    {letter}
                </Span>
            )}
        </Container>
    )
}

const Container = styled(motion.div)`

    overflow:hidden;

`

const Span = styled(motion.span)`

    display:inline-block;
    white-space:pre;

`

const containerAnim = {
    animate: {
        x: 0,
        transition: {
            duration: .6,
            staggerChildren: .02,
            when: 'beforeChildren',
            ease: transition2.ease,
            staggerDirection: -1
        }
    },
    exit: {
        x: 0,
        transition: {
            staggerChildren: 0.05,
        }
    }
}

const spanAnim = {
    initial: {
        y: '100%'
    },
    animate: {
        y: 0,
        transition: {
            duration: .8
        }
    },
    exit: {
        y: '100%',
        transition: {
            duration: .5,
            delay: .5
        }
    },



}