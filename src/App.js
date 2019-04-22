import React, { Component } from 'react'
import autobind from 'react-autobind'
import GlobalStyle from './utils/GlobalStyle'
import './App.css'

import CodeContainer from './components/CodeContainer'

class App extends Component {
  constructor() {
    super()
    autobind( this )
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <CodeContainer />
      </React.Fragment>
    )
  }
}

export default App
