// @flow

import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledRoot = styled.main`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 58px 27px 18px;
  font-size: 64px;
`

class LandingPage extends PureComponent {
  render() {
    return <StyledRoot>Hi 👋</StyledRoot>
  }
}

export default LandingPage
