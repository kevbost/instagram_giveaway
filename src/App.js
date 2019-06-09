import React, { Component } from 'react'
import autobind from 'react-autobind'
import GlobalStyle from './utils/GlobalStyle'
import GithubCorner from './components/GithubCorner'
import styled from 'styled-components'

import IGContestWinner from './modules/IGContestWinner'

export const StyledAppWrapper = styled.div`
  background-color: #3f4245;
  background:
    linear-gradient(
      to left top,
      rgba(0, 255, 255, 1) 0%,
      rgba(255, 0, 255, 0.5) 50%,
      rgba(255, 255, 0, 1) 100%
    ),
    /* radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%), */
    url(./noise.svg);
`


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
        <IGContestWinner />
      </StyledAppWrapper>
    )
  }
}

export default App
