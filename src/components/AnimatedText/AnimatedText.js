import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classes from './AnimatedText.module.css'

let mousePosition = {
  x: 0,
  y: 0
}

const AnimatedText = ( props ) => {
  const {
    textColor,
    overlayColor,
    children,
    ...rest
  } = props

  const containerElem = useRef( null )
  const initialMousePos = {
    x: 0,
    y: 0
  }

  const [ mousePos, setMousePos ] = useState( initialMousePos )

  const handleMouseMove = event => {
    event = event.nativeEvent
    const elem = containerElem.current
    const newX = Math.floor( ( event.pageX - elem.offsetLeft ) / elem.clientWidth * 100 )
    const newY = Math.floor( ( event.pageY - elem.offsetTop ) / elem.clientHeight * 100 )
    const newMousePos = {
      x: newX,
      y: newY
    }
    mousePosition = newMousePos
    setMousePos( mousePosition )
  }

  const handleMouseOut = () => {
    return setMousePos( mousePosition )
  }

  return (
    <section
      className={classes.animatedTextContainer}
      style={{
        '--maskX': mousePos.x,
        '--maskY': mousePos.y
      }}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      ref={containerElem}
      {...rest}
    >
      <h1
        style={{
          color: textColor
        }}
        className={classes.animatedTextContent}
      >
        {children}
      </h1>
      <h1
        style={{
          color: overlayColor
        }}
        className={classes.animatedTextContentClone}
      >
        {children}
      </h1>
    </section>
  )
}

AnimatedText.propTypes = {
  textColor: PropTypes.string.isRequired,
  overlayColor: PropTypes.string.isRequired,
  children: PropTypes.any
}

export { AnimatedText }
