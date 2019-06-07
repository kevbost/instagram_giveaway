// global-style.js
import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'
// import Lato from './fonts/Lato/Lato-Regular.ttf'

// injectGlobal`
// @font-face {
//   font-family: 'PTC55F';
//   src: url(${myFont}) format('truetype');
//   font-weight: normal;
//   font-style: normal;
// }
// `

// Options are, of course, optional, these are the default options
const options = {
  black: '#000',
  fontFamilyBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSizeBase: '1rem',
  fontWeightBase: 400,
  lineHeightBase: 1.5,
  bodyColor: '#212529',
  bodyBg: '#fff',
  headingsMarginBottom: '0.5rem',
  paragraphMarginBottom: '1rem',
  labelMarginBottom: '0.5rem',
  dtFontWeight: 700,
  linkColor: '#007bff',
  linkDecoration: 'none',
  linkHoverColor: '#0056b3',
  linkHoverDecoration: 'underline',
  tableCellPadding: '0.75rem',
  textMuted: '#6c757d'
}

const rebootCss = reboot( options )

const GlobalStyle = createGlobalStyle`
  ${rebootCss}
  @font-face {
    font-family: Lato;
    src:  local("Lato"),
          url(/fonts/Lato/Lato-Regular.ttf) format('truetype');
    font-display: block;
  }
  @font-face {
    font-family: Lato;
    src:  local("Lato Black"),
          url(/fonts/Lato/Lato-Black.ttf) format('truetype');
    font-weight: 900;
    font-display: block;
  }
  @font-face {
    font-family: Montserrat;
    src: url(/fonts/Montserrat/Montserrat-Regular.ttf) format('truetype');
    font-display: block;
  }
  @font-face {
    font-family: Montserrat;
    src: url(/fonts/Montserrat/Montserrat-ExtraBold.ttf) format('truetype');
    font-weight: 900;
    font-display: block;
  }
`

export default GlobalStyle
