// @flow
import React from 'react'
import styled from 'styled-components'
import { tiny, small, large } from '../../common/consts/styles/breakpoints'
import ScrollToNext from '../../common/components/ScrollToNext/ScrollToNext'

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  a {
    color: inherit;
  }
`

const StyledIntro = styled.div`
  font-size: 48px;
  font-weight: 700;
  padding-bottom: 8px;
  @media ${tiny} {
    font-size: 58px;
    padding-bottom: 8px;
  }
  @media ${small} {
    font-size: 68px;
    padding-bottom: 12px;
  }
  @media ${large} {
    font-size: 78px;
    padding-bottom: 16px;
  }
`

const StyledTagline = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin: 18px;
  @media ${tiny} {
    font-size: 20px;
    margin: 20px;
  }
  @media ${small} {
    font-size: 22px;
    margin: 24px;
  }
  @media ${large} {
    font-size: 24px;
    margin: 24px;
  }
`

const StyledLinkedBar = styled.div`
  font-size: 34px;
  padding: 4px 0;
  i {
    padding: 0 10px;
  }
  @media ${tiny} {
    font-size: 38px;
  }
  @media ${small} {
    font-size: 44px;
  }
  @media ${large} {
    font-size: 48px;
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

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 auto;
  padding: 18px 27px 18px;
`

const LandingPage = () => (
  <StyledRoot id="landing-page">
    <StyledContentWrapper>
      <StyledIntro>Hi, I am Filip.</StyledIntro>
      <StyledTagline>
        Frontend Developer | React <i className="fab fa-react" /> and Node{' '}
        <i className="fab fa-node-js" />
      </StyledTagline>
      <StyledLinkedBar>
        <StyledLink target="_blank" rel="noopener noreferrer" href="https://github.com/halafi">
          <i className="fab fa-github" />
        </StyledLink>
        <StyledLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/FilipHalas">
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
    </StyledContentWrapper>
    <ScrollToNext pageSelector="#about-page" />
  </StyledRoot>
)

export default LandingPage
