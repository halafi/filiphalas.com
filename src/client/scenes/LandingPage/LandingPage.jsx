// @flow

import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledRoot = styled.main`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 18px 27px;
  a {
    color: inherit;
  }
`

const StyledIntro = styled.div`
  font-size: 78px;
  font-weight: 700;
  padding-bottom: 16px;
`

const StyledTagline = styled.div`
  font-size: 24px;
  margin: 24px;
  font-weight: 300;
`

const StyledLinkedBar = styled.div`
  font-size: 48px;
  padding: 4px 0;
  i {
    padding: 0 10px;
  }
`

const StyledLink = styled.a`
  display: inline-block;
  box-shadow: 0 0 1px transparent;
  transform: perspective(1px) translateZ(0);
  &:hover,
  &:focus,
  &:active {
    animation: icon-wobble 0.75s ease-in-out;
    transform: translate3d(0, 0, 0);
  }

  @keyframes icon-wobble {
    25% {
      transform: translateY(-8px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-4px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

class LandingPage extends PureComponent {
  render() {
    return (
      <StyledRoot>
        <StyledIntro>Hi, I am Filip.</StyledIntro>
        <StyledTagline>
          Frontend Developer @<a
            href="https://www.kiwi.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kiwi.com
          </a>{' '}
          | React <i className="fab fa-react" /> and Tech Enthusiast
        </StyledTagline>
        <StyledLinkedBar>
          <StyledLink target="_blank" rel="noopener noreferrer" href="https://github.com/halafi">
            <i className="fab fa-github" />
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/FilipHalas"
          >
            <i className="fab fa-twitter" />
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/4227313/halafi"
          >
            <i className="fab fa-stack-overflow" />
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/filip-halas-a7928476/"
          >
            <i className="fab fa-linkedin" />
          </StyledLink>
        </StyledLinkedBar>
      </StyledRoot>
    )
  }
}
export default LandingPage
