import React from 'react'
import styled from 'styled-components'
import { tiny, small, large } from '../../consts/styles/breakpoints'

// FIXME: margin is defined in two places
const StyledFooter = styled.footer`
  padding: 0.5rem 0;
  text-align: right;
  font-size: 14px;
  margin: 0 4px;
  color: ${props => props.theme.colorPrimary};
  a {
    color: ${props => props.theme.colorPrimary};
  }
  @media ${tiny} {
    margin: 0 16px;
  }
  @media ${small} {
    margin: 0 60px;
  }
  @media ${large} {
    margin: 0 180px;
`

const Footer = () => (
  <StyledFooter>
    Made by{' '}
    <a href="mailto:filiphalas74@gmail.com" target="_blank" rel="noopener noreferrer">
      Filip Halas
    </a>
  </StyledFooter>
)

export default Footer
