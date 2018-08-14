// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { toElement as scrollToElement } from '../../utils/scroll'
import { tiny, small, large } from '../../consts/styles/breakpoints'

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${props => props.theme.navAlpha};
  z-index: 1;
`

const StyledMenu = styled.div`
  margin-right: 1rem;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const StyledMenuItem = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin: 0 16px;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  user-select: none;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${props => props.theme.colorPrimary};
  }
  @media ${tiny} {
    font-size: 20px;
  }
  @media ${small} {
    font-size: 22px;
  }
  @media ${large} {
    font-size: 25px;
  }
`

const scrollToPage = pageSelector => {
  const nextPage = document.querySelector(pageSelector)
  scrollToElement(nextPage)
}

class Navbar extends PureComponent {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <StyledNav>
        <StyledMenu>
          <StyledMenuItem onClick={() => scrollToPage('#landing-page')}>Home</StyledMenuItem>
          <StyledMenuItem onClick={() => scrollToPage('#about-page')}>About</StyledMenuItem>
        </StyledMenu>
      </StyledNav>
    )
  }
}

export default Navbar
