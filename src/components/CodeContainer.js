import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'react-autobind'
import styled from 'styled-components'
import { Flex, Box, Text } from 'rebass'
import copyToClipboard from '../utils/copyToClipboard'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/github-gist.css'

const gistPath = 'https://gist.githubusercontent.com/kevbost/3b2806d56dc084e6a4ec9a420cced359/raw'

// eslint-disable-next-line space-in-parens
const StyledPre = styled(Highlight)`
  margin: 0;
  padding: 1rem;
  height: 10rem;
  overflow: auto;
`

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

// eslint-disable-next-line space-in-parens
const StyledBox = styled(Box)`
  margin: 0 auto;
`

// eslint-disable-next-line space-in-parens
const StyledCard = styled(Box)`
  margin: 2rem auto 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
`

// eslint-disable-next-line space-in-parens
const CopyButton = styled(Text)`
  cursor: pointer;
  text-align: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${props => { return props.copied ? 'red' : '#75AADA' }};
  transition: background-color ease-out 0.25s, color ease-out 0.25s;
  user-select: none;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  color: white;

  &:active {
    background-color: blue;
  }
`

class CodeContainer extends React.Component {
  constructor() {
    super()
    autobind( this )
    this.state = {
      copied: false,
      gistCode: ''
    }
  }

  handleCopy() {
    this.setState({
      copied: true
    })

    return copyToClipboard( gistPath )
  }

  componentDidMount() {
    fetch( gistPath )
      .then( ( file ) => { return file.text() })
      .then( text => {
        this.setState({
          gistCode: text
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <h1
          style={{
            margin: '2rem 0',
            textAlign: 'center'
          }}
        >{'Instagram Contest Winner'}</h1>
        <Flex mb={5}>
          <StyledBox width={[ 1, 1, 3/4 ]}>
            <StyledCard
              p={3}
              style={{
                marginTop: 0
              }}
            >
              <h2>{'INSTRUCTIONS'}</h2>
              <ol>
                <li>
                  {'Open chrome\'s javascript console'}
                  <ul>
                    <li>{'Windows: Ctrl + Shift + J'}</li>
                    <li>{'Mac: Cmd + Option + J'}</li>
                  </ul>
                </li>
                <li>{'Copy the code below (click the button)'}</li>
                <li>{'Paste into the javascript console'}</li>
                <li>{'???'}</li>
                <li>{'Profit'}</li>
              </ol>
            </StyledCard>
            <StyledCard>
              <Gist gistCode={this.state.gistCode} />
              <CopyButton onClick={this.handleCopy} copied={this.state.copied}>
                {this.state.copied ? 'Copied!' : 'Copy to clipboard'}
              </CopyButton>
            </StyledCard>
            <StyledCard p={3}>
              <h2>{'NOTES'}</h2>
              <p>{'This function should work for any instagram post. Use it by opening Chrome\'s javascript console and pasting all of this code (see instructions)'}</p>
              <p>{'All comments are not immediately visible. The code will automatically click the "show more" button for you. It could take some time depending on how many comments there are, just wait. Once all comments have been made available, it will then choose a random commenter by username.'}</p>
              <p>{'Math.random() creates a random number between 0 & 1, multiply that random number by how many comments exist, round that new number down using Math.floor(), return the person at position people[ randomNumber ].'}</p>
              <p>{'For the sticklers out there, the reason this is so convoluted is for validation and message handling. It\'s users aren\'t programmers, instructions are logged if there is an error.'}</p>
            </StyledCard>
          </StyledBox>
        </Flex>
      </React.Fragment>
    )
  }
}

export default CodeContainer
