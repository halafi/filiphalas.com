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
  font-size: 14px;
  line-height: 27px;
  color: rgb(33, 33, 33);
  font-weight: 300;
  @media ${tiny} {
    font-size: 15px;
  }
`

const AboutPage = () => (
  <StyledRoot id="about-page">
    <StyledContentWrapper>
      <StyledTitle>About Me</StyledTitle>
      <StyledText>
        <p>
          I am a Web Developer from Czech Republic{' '}
          <span role="img" aria-label="czech-flag">
            🇨🇿
          </span>.
        </p>
        <p>
          I got into programming with 2D Game Development in elementary school, I enjoyed creating
          interactive applications and was making them for about 7 years.
        </p>
        <p>
          I learned how to code in C, Java, Haskell and Go during my school years and then decided
          to focus on building modern Web Applications.
        </p>
        <p>
          Coming from a background of building Full Stack Web Applications with Java and JavaScript
          I am now focused primarily on Frontend Development using React and Node.
        </p>
      </StyledText>
    </StyledContentWrapper>
  </StyledRoot>
)
export default AboutPage
