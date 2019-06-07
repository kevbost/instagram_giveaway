import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text, Box } from 'rebass'

import {
  StyledPageTitle
} from './styled'

const PageTitle = ( props ) => {
  // const {
  //   line1,
  //   line2
  // } = props

  return (
    <StyledPageTitle>
      <Text>{'IG Contest'}</Text>
      <Text
        fontSize={[ '15vw', '14vw', '14vw', '9rem' ]}
      >{'Winner'}</Text>
    </StyledPageTitle>
  )
}

export default PageTitle
