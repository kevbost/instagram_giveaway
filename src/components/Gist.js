import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledPre
} from './styled'

const Gist = ( props ) => {
  return (
    <StyledPre className="js">
      {props.gistCode}
    </StyledPre>
  )
}
Gist.propTypes = {
  gistCode: PropTypes.string.isRequired
}

export default Gist
