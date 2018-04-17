// @flow

import React from 'react'
import styled from 'styled-components'
import { tiny, small, large } from '../../common/consts/styles/breakpoints'

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  padding: 18px 27px;
  min-height: 100vh;
  a {
    color: inherit;
  }
`

const StyledContentWrapper = styled.div`
  padding-top: 36px;
  margin: 0 4px;
  @media ${tiny} {
    margin: 0 16px;
  }
  @media ${small} {
    margin: 0 60px;
  }
  @media ${large} {
    margin: 0 180px;
  }
`
const StyledTitle = styled.h1`
  padding: 18px 0;
  font-size: 36px;
  @media ${tiny} {
    font-size: 40px;
  }
  @media ${small} {
    font-size: 44px;
  }
  @media ${large} {
    font-size: 48px;
  }
`

const StyledText = styled.div`
  font-size: 15px;
  line-height: 27px;
  color: rgb(33, 33, 33);
  font-weight: 300;
  @media ${tiny} {
    font-size: 16px;
  }
`

const AboutPage = () => (
  <StyledRoot id="about-page">
    <StyledContentWrapper>
      <StyledTitle>About Me</StyledTitle>
      <StyledText>
        <p>
          I am a Web Developer from{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/djXpTJuuHiP2">
            Czechia
          </a>. I develop modern and progressive web applications with{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">
            React
          </a>{' '}
          and{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/">
            Node
          </a>.
        </p>
        <p>
          I started programming in elementary school and always enjoyed creating interactive
          applications.
        </p>
        <p>
          I learned C, Haskell, Java and Go before I decided to fully focus on building modern Web
          Applications in JavaScript.
        </p>
      </StyledText>
    </StyledContentWrapper>
  </StyledRoot>
)
export default AboutPage
