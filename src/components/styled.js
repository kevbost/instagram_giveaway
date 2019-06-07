import styled from 'styled-components'
import { Box, Text } from 'rebass'
import Highlight from 'react-highlight'

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

// eslint-disable-next-line space-in-parens
export const StyledPre = styled(Highlight)`
  margin: 0;
  padding: 1rem;
  height: 10rem;
  overflow: auto;
`

// eslint-disable-next-line space-in-parens
export const TitleWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 5rem 0 3rem;
`

// eslint-disable-next-line space-in-parens
export const StyledBox = styled(Box)`
  margin: 0 auto;
`

// eslint-disable-next-line space-in-parens
export const StyledCard = styled(Box)`
  margin: 2rem 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
`

// eslint-disable-next-line space-in-parens
export const CopyButton = styled(Text)`
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
