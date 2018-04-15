// @flow

import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledMenu = styled.div`
  margin-right: 1rem;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const StyledMenuItem = styled.div`
  font-size: 25px;
  font-weight: 400;
  margin: 0 16px;
  padding: 4px 0;
  cursor: pointer;
`

class Navbar extends PureComponent {
  render() {
    return (
      <StyledNav>
        <StyledMenu>
          <StyledMenuItem>About</StyledMenuItem>
          <StyledMenuItem>Projects</StyledMenuItem>
          <StyledMenuItem>Contact</StyledMenuItem>
        </StyledMenu>
      </StyledNav>
    )
  }
}

export default Navbar
