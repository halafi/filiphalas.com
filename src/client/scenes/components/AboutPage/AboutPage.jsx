// @flow

import React from 'react'
import styled from 'styled-components'
import { tiny, small, large } from '../../../common/consts/styles/breakpoints'
import ScrollToPrevious from '../../../common/components/ScrollToPrevious/ScrollToPrevious'

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 27px;
  min-height: 100vh;
  a {
    color: inherit;
  }
`

const StyledContentWrapper = styled.div`
  padding-top: 36px;
  margin: 0 4px;
  flex: 1 0 auto;
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
  color: ${props => props.theme.colorSecondary};
  font-weight: 300;
  @media ${tiny} {
    font-size: 17px;
  }
`

const AboutPage = () => (
  <StyledRoot id="about-page">
    <StyledContentWrapper>
      <StyledTitle>About Me</StyledTitle>
      <StyledText>
        <p>I develop modern and progressive web applications using React and Node.</p>
        <p>
          I learned C, Haskell, Java and Go before I started to fully focus on building applications
          in JavaScript.
        </p>
        <p>
          Currently I am working for{' '}
          <a href="https://www.kiwi.com" target="_blank" rel="noopener noreferrer">
            Kiwi.com
          </a>{' '}
          located in Brno, Czech Republic.
        </p>
      </StyledText>
    </StyledContentWrapper>
    <ScrollToPrevious pageSelector="#landing-page" />
  </StyledRoot>
)
export default AboutPage
