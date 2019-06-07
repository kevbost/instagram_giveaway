import React from 'react'
import autobind from 'react-autobind'
import { Flex, Text } from 'rebass'
import copyToClipboard from '../utils/copyToClipboard'
import Gist from './Gist'
import { AnimatedText } from './AnimatedText'
import {
  StyledBox,
  StyledCard,
  // StyledPageTitle,
  TitleWrapper,
  CopyButton
} from './styled'
import '../../node_modules/highlight.js/styles/github-gist.css'

const gistPath = 'https://gist.githubusercontent.com/kevbost/3b2806d56dc084e6a4ec9a420cced359/raw'

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

  componentWillMount() {
    clearInterval( this.interval )
  }

  render() {
    return (
      <div>
        <TitleWrapper>
          <AnimatedText
            textColor="rgba(253,89,73, 0.5)"
            overlayColor="#fff"
            // overlayColor="#d40092"
            // overlayColor="#fd5949"
            // overlayColor="#9c3dca"
          >
            <Text
              fontSize={[ '11vw', '10vw', '10vw', '6.4rem' ]}
            >{'IG Contest'}</Text>
            <Text
              fontSize={[ '15vw', '14vw', '14vw', '9rem' ]}
            >{'Winner'}</Text>
          </AnimatedText>
        </TitleWrapper>

        <Flex p={4} pb={5}>
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
      </div>
    )
  }
}

export default CodeContainer
