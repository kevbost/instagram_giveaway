import React, { Component } from 'react'
import autobind from 'react-autobind'
import GlobalStyle from './utils/GlobalStyle'
import GithubCorner from './components/GithubCorner'
import IGContestWinner from './modules/IGContestWinner'
import './font-styles.css'

class App extends Component {
  constructor() {
    super()
    autobind( this )
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <GithubCorner />
        <IGContestWinner />
      </React.Fragment>
    )
  }
}

export default App
