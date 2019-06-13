import styled from 'styled-components'
import { Text } from 'rebass'
import Highlight from 'react-highlight'

export const StyledGradientWrapper = styled.div`
  background-color: #3f4245;
  background:
    linear-gradient(
      to left top,
      rgba(0, 255, 255, 1) 0%,
      rgba(255, 0, 255, 0.5) 50%,
      rgba(255, 255, 0, 1) 100%
    ),
    /* url(./noise.svg); */
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIklEQVQoU2NkYGD4z8DAwMiAA+CUgKmnjQIUN9HGChQPAwB5swIJcl6NNwAAAABJRU5ErkJggg==");
`

// eslint-disable-next-line space-in-parens
export const CodeContainer = styled(Highlight).attrs({
  className: 'js'
})`
  margin: 0;
  padding: 1rem !important;
  height: 10rem;
  overflow: auto;
  background-color: transparent !important;
`

// eslint-disable-next-line space-in-parens
export const TitleWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 3rem 0 1rem;
`

// eslint-disable-next-line space-in-parens
export const CopyButton = styled(Text)`
  cursor: pointer;
  text-align: center;
  background-color: ${props => { return props.copied ? '#fd5949' : '#313131' }};
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
