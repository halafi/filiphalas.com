import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './normalize.css';
import './layout.css';

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  a {
    color: inherit;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 auto;
  padding: 18px 27px 18px;
`;

// const StyledFooter = styled.footer`
//   font-size: 18px;
//   display: flex;
//   justify-content: center;
//   margin: 20px;
// `;

const description = 'JS Developer - Filip Halas';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'description', content: description }]}
        >
          <html lang="en" />
        </Helmet>
        <StyledRoot>
          <StyledContentWrapper>{children}</StyledContentWrapper>
          {/* <StyledFooter>Powered by&nbsp;<a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">GatsbyJS</a></StyledFooter> */}
        </StyledRoot>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
