import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import LandingPage from './scenes/LandingPage/LandingPage'
// import Navbar from './common/components/Navbar/Navbar'

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

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

class Root extends Component {
  render() {
    return (
      <StyledRoot>
        {/*<Navbar />*/}
        <LandingPage />
      </StyledRoot>
    )
  }
}

export default Root
