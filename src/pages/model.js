import React from "react"
import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import Image from '../components/Image'
import SEO from "../components/seo"
import GoBackLink from "../components/GoBackLink"
import StaggeredAnimatedText from '../components/StaggerAnimation'

import { fade, transition } from '../utils/framerAnimations'

const imageSize = {
    width: '100vw',
}
const clipSize = {
    width: '55vw',
    height: '110vh'
}



export default function model({ location }) {

    const clipContainerAnimation = {
        initial: {
            ...location.state?.clipSize,
            ...location.state?.position
        },
        animate: {
            ...clipSize,
            y: '-5vh',
            x: '55vw',
            transition: { ...transition }
        },
        exit: {
            width: [null, '100vw', '10vw'],
            x: [null, "0vw", '-10vw'],
            transition: {
                ...transition,
                delay: .2,
                ease: [.42, .27, .6, .87]
            }
        }
    }
    const motionContainerAnimation = {
        initial: {
            width: location.state?.imageSize?.width,
            scale: 1.1
        },
        animate: {
            ...imageSize,
            scale: 1,
            x: '5%',
            transition: { ...transition }
        },
        exit: {
            x: '0%',
            transition: { ...transition }
        }
    }

    return (
        <>
            <Wrapper>
                <SEO title="Danae Keizs" />
                <ModelName>
                    <StaggeredAnimatedText>
                        Danae Keizs
                    </StaggeredAnimatedText>
                </ModelName>
                <ModelDetails
                    variants={fade}
                    transition={{
                        duration: .5,
                        delay: .8
                    }}
                >
                    <p>
                        Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Iure veniam quisquam nulla repellendus
                        accusantium quia explicabo, omnis rerum, nam dignissimos esse, ullam
                        ut officia nostrum unde non quos similique repudiandae?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Iure veniam quisquam nulla repellendus
                        accusantium quia explicabo, omnis rerum, nam dignissimos esse, ullam
                        ut officia nostrum unde non quos similique repudiandae?
                    </p>
                </ModelDetails>
                <GoBackLink
                    to={'/'}
                    style={{
                        marginTop: 'auto'
                    }} />
            </Wrapper>
            <Image.ClipContainer
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
                variants={clipContainerAnimation}
            >
                <Image.MotionContainer
                    width={imageSize.width}
                    variants={motionContainerAnimation}
                >
                    <Image />
                </Image.MotionContainer>
            </Image.ClipContainer>
        </>
    )
}





const ModelName = styled.h2`

    font-family: var(--header-font);
    font-size:6em;
    font-weight:100;
    margin: 0;
    white-space: nowrap;
`

const ModelDetails = styled(motion.div)`
    p{
        font-size:1.2em;
        margin: 1em .1em;
        text-align:justify;
    }
`

const Wrapper = styled.div`

    display:flex;
    flex-direction:column;
    justify-content: space-between;

    position:relative;
    top: calc(50% - 6em);
    height: calc(50% + 6em);
    width: min-content;
    
    font-size:1.2em;
`