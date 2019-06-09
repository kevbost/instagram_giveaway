import React from 'react'
import autobind from 'react-autobind'
import { Flex, Box, Text } from 'rebass'
import copyToClipboard from '../../utils/copyToClipboard'
import AnimatedText from './components/AnimatedText'
import {
  TitleWrapper,
  CopyButton,
  CodeContainer
} from './components/styled'
import Card from '../../components/Card'
import '../../../node_modules/highlight.js/styles/github-gist.css'

const gistPath = 'https://gist.githubusercontent.com/kevbost/3b2806d56dc084e6a4ec9a420cced359/raw'

class IGContestWinner extends React.Component {
  constructor() {
    super()
    autobind( this )
    this.state = {
      copied: false,
      copiedText: 'Copy to Clipboard',
      gistCode: ''
    }
  }

  handleCopy() {
    this.setState({
      copied: true,
      copiedText: 'Copied!'
    })

    return copyToClipboard( gistPath ).then( () => {

      setTimeout( () => {
        this.setState({
          copiedText: 'Paste it into the console!'
        })

        setTimeout( () => {
          this.setState({
            copied: false,
            copiedText: 'Copy to Clipboard'
          })
        }, 3000 )
      }, 3000 )
    })
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
            textColor="rgba(253, 89, 73, 0.5)"
            overlayColor="#fff"
          >
            <Text
              fontSize={[ '11vw', '10vw', '10vw', '6.4rem' ]}
            >{'IG Contest'}</Text>
            <Text
              fontSize={[ '15vw', '14vw', '14vw', '9rem' ]}
            >{'Winner'}</Text>
          </AnimatedText>
        </TitleWrapper>

        <Flex p={4} pb={5} justifyContent="center">
          <Box width={[ 1, 1, 3/4 ]}>
            <Card p={3} mb={4}>
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
            </Card>
            <Card mb={4}>
              <CodeContainer>{this.state.gistCode}</CodeContainer>
              <CopyButton onClick={this.handleCopy} copied={this.state.copied}>
                {this.state.copiedText}
              </CopyButton>
            </Card>
            <Card p={3}>
              <h2>{'NOTES'}</h2>
              <p>{'This function should work for any instagram post. Use it by opening Chrome\'s javascript console and pasting all of this code (see instructions)'}</p>
              <p>{'All comments are not immediately visible. The code will automatically click the "show more" button for you. It could take some time depending on how many comments there are, just wait. Once all comments have been made available, it will then choose a random commenter by username.'}</p>
              <p>{'Sometimes Instagram acts up and doesn\'t properly load the comments. If this happens, it will run the random comment generator but will advise review. There\'s not much that can be done other than waiting and trying again later.'}</p>
              <p>{'Math.random() creates a random number between 0 & 1, multiply that random number by how many comments exist, round that new number down using Math.floor(), return the person at position people[ randomNumber ].'}</p>
              <p>{'For the sticklers out there, the reason this is so convoluted is for validation and message handling. It\'s users aren\'t programmers, instructions are logged if there is an error.'}</p>
              <p>{'If something is seriously wonko, leave an issue on the '}<a href="https://github.com/kevbost/instagram_giveaway/issues">{'github project page'}</a>{'.'}</p>
            </Card>
          </Box>
        </Flex>
      </div>
    )
  }
}

export default IGContestWinner
