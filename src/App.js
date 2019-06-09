import React, { Component } from 'react'
import autobind from 'react-autobind'
import GlobalStyle from './utils/GlobalStyle'
import GithubCorner from './components/GithubCorner'

import CodeContainer from './components/CodeContainer'
import {
  StyledAppWrapper
} from './components/styled'

class App extends Component {
  constructor() {
    super()
    autobind( this )
  }

  render() {
    return (
      <StyledAppWrapper>
        <GlobalStyle />
        <GithubCorner />
        <CodeContainer />
      </StyledAppWrapper>
    )
  }
}

export default App
