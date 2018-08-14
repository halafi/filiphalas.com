// @flow
import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import LandingPage from './scenes/LandingPage/LandingPage'
import AboutPage from './scenes/AboutPage/AboutPage'
// import Footer from './common/components/Footer/Footer'
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

const Root = () => (
  <ThemeProvider theme={theme}>
    <div>
      {/* <Navbar /> */}
      <LandingPage />
      <AboutPage />
      {/* <Footer /> */}
    </div>
  </ThemeProvider>
)

export default Root
