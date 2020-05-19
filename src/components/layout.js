import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "./normalize.css";
import "./layout.css";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  padding: 0 8px;
  a {
    color: inherit;
  }
`;

const description =
  "JavaScript Developer from Czechia. I make Web Apps with React and static sites with Gatsby. Working in travel industry and fintech. Available remotely.";

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
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: "description", content: description }]}
        >
          <html lang="en" />
        </Helmet>
        <StyledRoot>{children}</StyledRoot>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
