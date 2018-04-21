import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Root from './scenes/Root'
import themes from './common/consts/styles/themes'

const theme = themes[0]

// Keep root / global CSS here
// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'Roboto';
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: ${theme.colorPrimary};
    margin: 0;
    padding: 0;
  }
  ::-webkit-scrollbar {
    display: none; 
  }
`

ReactDOM.hydrate(
  <Router>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}
