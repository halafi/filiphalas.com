import React, { Component } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import LandingPage from './scenes/LandingPage/LandingPage'
import AboutPage from './scenes/AboutPage/AboutPage'
import Navbar from './common/components/Navbar/Navbar'
import Footer from './common/components/Footer/Footer'

const theme = {
  colorPrimary: 'rgb(96, 125, 139)',
  colorSecondary: 'rgb(33, 33, 33)',
  navAlpha: 'rgba(255, 255, 255, 0.75)',
}

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
      <Navbar />
      <LandingPage />
      <AboutPage />
      <Footer />
    </div>
  </ThemeProvider>
)

export default Root
