import React from "react";
import styled from "styled-components";
import typed from "typed.js";
// import { Link } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../components/layout";
import { tiny, small, large } from "../records/Breakpoints";

const StyledProjects = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  flex-direction: column;
  a {
    line-height: 1.33;
    font-size: 14px;
  }
`;

const StyledIntro = styled.div`
  font-size: 48px;
  font-weight: 700;
  padding-bottom: 8px;
  @media ${tiny} {
    font-size: 58px;
    padding-bottom: 10px;
  }
  @media ${small} {
    font-size: 68px;
    padding-bottom: 12px;
  }
  @media ${large} {
    font-size: 78px;
    padding-bottom: 16px;
    padding-left: 97px;
  }
`;

const StyledTagline = styled.h1`
  font-size: 18px;
  font-weight: 400;
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
`;

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
`;

const StyledLink = styled(OutboundLink)`
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
`;

const H3 = styled.h3`
  font-size: 17px;
  margin-block-start: 0;
  margin-block-end: 12px;
`;

class IndexPage extends React.Component {
  componentDidMount = () => {
    const options = {
      strings: ["Hi, I am Filip^6000", "I make Web Apps^5000"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: " ✍️"
    };
    this.typed = new typed(this.el, options);
    this.typed.start();
  };

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <Layout>
        <StyledIntro>
          <span
            ref={el => {
              this.el = el;
            }}
          />
        </StyledIntro>
        <StyledTagline>Full-Stack Web Developer (React, Node)</StyledTagline>
        <StyledLinkedBar>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://github.com/halafi"
          >
            <i className="fab fa-github" />
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://gitlab.com/halafi"
          >
            <i className="fab fa-gitlab " />
          </StyledLink>
          {/* <StyledLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://twitter.com/FilipHalas"
          >
            <i className="fab fa-twitter" />
          </StyledLink> */}
          <StyledLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://stackoverflow.com/users/4227313/halafi"
          >
            <i className="fab fa-stack-overflow" />
          </StyledLink>
          {/* <StyledLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://medium.com/@filiphalas"
          >
            <i className="fab fa-medium" />
          </StyledLink> */}
          {/* <StyledLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.producthunt.com/@filip_halas"
          >
            <i className="fab fa-product-hunt" />
          </StyledLink> */}
          <StyledLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.linkedin.com/in/filip-halas-a7928476/"
          >
            <i className="fab fa-linkedin" />
          </StyledLink>
          {/* <StyledLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="mailto:filiphalas74@gmail.com"
          >
            <i className="far fa-envelope" />
          </StyledLink> */}
        </StyledLinkedBar>
        {/* <StyledProjects>
          <H3>Open source contributions</H3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/osano/cookieconsent"
          >
            Cookie Consent
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/dominikchrastek/react-dates-lite">
            React Dates Lite
          </a>
        </StyledProjects> */}
        <StyledProjects>
          <H3>See my latest side projects</H3>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://remoteseer.net"
          >
            Aggregator of remote jobs
          </a> */}
          <a target="_blank" rel="noopener noreferrer" href="https://pfolio.cz">
            Czech investment blog
          </a>
        </StyledProjects>
      </Layout>
    );
  }
}

export default IndexPage;
