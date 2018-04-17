// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import { toElement as scrollToElement } from '../../utils/scroll'

type Props = {
  pageSelector: string,
}

const StyledRoot = styled.div`
  cursor: pointer;
`

const StyledArrow = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 9px;
  animation: bounce 2s infinite;
  color: rgb(96, 125, 139);

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
`

const StyledText = styled.div`
  text-align: center;
  font-size: 12px;
`

class ScrollToNext extends Component<Props> {
  scrollToNext() {
    const { pageSelector } = this.props
    const nextPage = document.querySelector(pageSelector)
    scrollToElement(nextPage)
  }

  render() {
    return (
      <StyledRoot onClick={() => this.scrollToNext()}>
        <StyledArrow>
          <StyledText>Click Me</StyledText>
          <i className="fas fa-chevron-down fa-2x" />
        </StyledArrow>
      </StyledRoot>
    )
  }
}

export default ScrollToNext
