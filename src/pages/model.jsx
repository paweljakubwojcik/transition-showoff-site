import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Image from '../components/Image'
import SEO from "../components/seo"


const imageSize = {
    width: 1600,
}
const clipSize = {
    width: '55vw',
    height: '110vh'
}

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }


export default function model({ location }) {
    console.log(location.state)
    return (
        <>
            <SEO title="Danae Keizs" />
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

const ImageConatainer = styled.div`
    position:absolute;
    width:100%;
   
`
