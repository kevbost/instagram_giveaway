import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'react-autobind'
import styled, { css } from 'styled-components'
import { Flex, Box, Text } from 'rebass/styled-components'


const vars = {
  $box_width: '4rem',
  $box_duration: '0.35s',
  $bg_delay: '0.25s',
  $bg_duration: '0.125s'
}


const transitionMixin = ( type ) => {
  if ( type === 'background' ) {
    return css`
      transition:
        color ${vars.$bg_duration} ease-in ${vars.$bg_delay},
        background-color ${vars.$bg_duration} ease-in ${vars.$bg_delay},
        box-shadow ${vars.$box_duration},
        margin ${vars.$box_duration};;
    `
  } else if ( type === 'box' ) {
    return css`
      transition: all ${vars.$box_duration} ease-out;
      transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    `
  }
}


// eslint-disable-next-line space-in-parens
const Wrapper = styled(Flex).attrs({
  justifyContent: [ 'center' ]
})`
  position: relative;
  height: 4.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`


// eslint-disable-next-line space-in-parens
const Label = styled(Text).attrs(props => {
  return {
    fontSize: [ '1', '1.25rem', '1.5rem' ],
    ml: props.checked ? [ '0' ] : [ '4.5rem', '3rem', '0' ],
    mr: props.checked ? [ '4.5rem', '3rem', '0' ] : [ '0' ]
  }
})`
  position: relative;
  font-weight: bold;
  text-align: center;
  color: ${props => { return props.checked ? 'white' : '#888' }};
  ${transitionMixin( 'background' )}
`


const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: ${props => { return props.checked ? '#fd5949' : 'white' }};
  ${transitionMixin( 'background' )}
`

// eslint-disable-next-line space-in-parens
const SwitchBox = styled(Box).attrs({
  width: [ vars.$box_width ]
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: ${props => { return props.checked ? '#fd5949' : '#777' }};
  font-weight: bold;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  position: absolute;
  top: 4px;
  bottom: 4px;
  ${props => {
    return props.checked ?
      css`
        left: calc( 100% - ${vars.$box_width} - 0.25rem );
      ` :
      css`
        left: 4px;
      `
  }};

  ${Wrapper}:hover & {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  ${transitionMixin( 'box' )}
`


class Checkbox extends React.Component {
  constructor() {
    super()
    autobind( this )
    this.state = {
      checked: true
    }
  }

  handleClick() {
    this.setState( ( prevState, props ) => {
      return {
        checked: !prevState.checked
      }
    })
  }

  shouldComponentUpdate( nextProps, nextState ) {
    return nextState.checked !== this.state.checked
  }

  render() {
    const { checked } = this.state

    return (
      <div>
        <Wrapper onClick={this.handleClick}>
          <Background checked={checked}>
            <SwitchBox checked={checked} id="checkbox">
              {checked ? 'ON' : 'OFF'}
            </SwitchBox>
          </Background>
          <Label checked={checked}>{this.props.label}</Label>
        </Wrapper>
      </div>
    )
  }
}

Checkbox.propTypes = {
  toggleChecked: PropTypes.func,
  label: PropTypes.string
}

export default Checkbox
