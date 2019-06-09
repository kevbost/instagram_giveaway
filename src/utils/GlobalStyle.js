// global-style.js
import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'

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
          url(./fonts/Lato/Lato-Regular.ttf) format('truetype');
    font-display: block;
  }
  @font-face {
    font-family: Lato;
    src:  local("Lato Black"),
          url(./fonts/Lato/Lato-Black.ttf) format('truetype');
    font-weight: 900;
    font-display: block;
  }
  @font-face {
    font-family: Montserrat;
    src: url(./fonts/Montserrat/Montserrat-Regular.ttf) format('truetype');
    font-display: block;
  }
  @font-face {
    font-family: Montserrat;
    src: url(./fonts/Montserrat/Montserrat-ExtraBold.ttf) format('truetype');
    font-weight: 900;
    font-display: block;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    font-size: 90%;
    line-height: 1.58;
    letter-spacing: -.004em;
    /* margin-bottom: 0; */
  }

  code {
    font-size: 90%;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ol,
  ul {
    margin: 0;
    font-size: 90%;
    list-style-position: outside;
    padding-left: 1rem;
  }

  pre,
  code {
    margin: 0;
  }

  /* --------github corners-------- */
  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }

  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0)
    }
    20%,
    60% {
      transform: rotate(-25deg)
    }
    40%,
    80% {
      transform: rotate(10deg)
    }
  }

  @media (max-width:500px) {
    .github-corner:hover .octo-arm {
      animation: none
    }

    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out
    }
  }
`

export default GlobalStyle
