import React from "react"
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from '../components/Image'
import SEO from "../components/seo"
import GoBackLink from "../components/GoBackLink"


const imageSize = {
    width: 1600,
}
const clipSize = {
    width: '55vw',
    height: '110vh'
}

const transition = { duration: 1, delay: .3, ease: [0.6, 0.01, -0.05, 0.9] }


export default function model({ location }) {

    return (
        <>
            <Wrapper>
                <SEO title="Danae Keizs" />
                <ModelName
                    initial={{
                        opacity: 0,
                        x: '30vw'
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            ...transition,
                            delay: .6
                        }
                    }}
                    exit={{
                        opacity: 0,
                        x: '-50vw',
                    }}
                    transition={{
                        ...transition
                    }}
                >Danae Keizs</ModelName>
                <ModelDetails
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 1
                        }
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        ...transition,
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
                initial={{
                    ...location.state.clipSize,
                    ...location.state.position
                }}
                animate={{
                    ...clipSize,
                    y: '-5vh',
                    x: '55vw',
                    transition: { ...transition }
                }}
                exit={{
                    width: 0,
                    x: '100vw',
                    transition: {
                        ...transition,
                        delay: .6
                    }
                }}
            >
                <Image.MotionContainer
                    width={imageSize.width}
                    initial={{
                        width: location.state.imageSize?.width,
                        scale: 1.1
                    }}
                    animate={{
                        ...imageSize,
                        scale: 1,
                        x: '5%',
                        transition: { ...transition }
                    }}
                >
                    <Image />
                </Image.MotionContainer>
            </Image.ClipContainer>
        </>
    )
}

const ModelName = styled(motion.h2)`

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
    
`