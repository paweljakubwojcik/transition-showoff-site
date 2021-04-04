import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { getElementPosition } from "../utils/methods"
import Image from "../components/Image"

const ImageCompound = ({ data, name }) => {
  const [imageWidth, setImageWidth] = useState(0)

  const clipSize = {
    width: imageWidth,
    height: 0.6875 * imageWidth,
  }

  const [imageDOM, setImageDOM] = useState(null)
  const [clicked, setClicked] = useState(false)

  const setSize = () => {
    const boundries = {
      max: 500,
      min: 300,
    }
    const width = window.innerWidth * 0.26
    if (width < boundries.min) setImageWidth(boundries.min)
    if (width > boundries.max) setImageWidth(boundries.max)
    if (width < boundries.max && width > boundries.min) setImageWidth(width)
  }

  useEffect(() => {
    setSize()
    window.addEventListener("resize", setSize)
    return () => window.removeEventListener("resize", setSize)
  }, [])

  const handleOnclick = e => {
    e.preventDefault()

    setClicked(true)
    navigate(`/models/${name}`, {
      state: {
        imageSize: { width: imageWidth },
        clipSize,
        position: getElementPosition(imageDOM)
      },
    })
  }

  return (
    <Image.ClipContainer style={{ ...clipSize }} ref={setImageDOM}>
      <Image.MotionContainer
        width={imageWidth}
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{
          opacity: clicked ? 1 : 0,
          scale: 1.1,
        }}
      >
        <Link to={`/models/${name}`} onClick={handleOnclick}>
          <Image data={data} />
        </Link>
      </Image.MotionContainer>
    </Image.ClipContainer>
  )
}

export default ImageCompound
