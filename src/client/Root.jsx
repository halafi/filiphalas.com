import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import LandingPage from './scenes/LandingPage/LandingPage'
import Navbar from './common/components/Navbar/Navbar'

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
    color: rgb(96, 125, 139);
    margin: 0;
    padding: 0;
  }
`

class Root extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingPage />
      </div>
    )
  }
}

export default Root
