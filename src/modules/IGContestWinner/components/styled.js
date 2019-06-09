import styled from 'styled-components'
import { Text } from 'rebass'
import Highlight from 'react-highlight'

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
  /* border-bottom-left-radius: 8px; */
  /* border-bottom-right-radius: 8px; */
  background-color: ${props => { return props.copied ? 'red' : '#313131' }};
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
