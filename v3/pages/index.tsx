import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { large, small, tiny } from "../consts/breakpoints";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  padding: 0 8px;
  a {
    color: inherit;
  }
`;

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
    line-height: 1.42;
    font-size: 14px;
  }
`;

const StyledIntro = styled.div`
  margin-top: 100px;
  font-size: 48px;
  font-weight: 700;
  padding-bottom: 8px;
  @media ${tiny} {
    margin-top: 150px;
    font-size: 58px;
    padding-bottom: 10px;
  }
  @media ${small} {
    margin-top: 200px;
    font-size: 68px;
    padding-bottom: 12px;
  }
  @media ${large} {
    margin-top: 250px;
    font-size: 78px;
    padding-bottom: 16px;
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
`;

const H3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-block-start: 0;
  margin-block-end: 12px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Filip Halas</title>
        <meta
          name="description"
          content="Full stack developer focused on state of the art web apps and static sites, working with React, Svelte and Node."
        />
      </Head>
      <Layout>
        <StyledIntro>Hi, I am Filip</StyledIntro>
        <StyledTagline>
          Senior Software Engineer (React, Svelte, Node)
        </StyledTagline>
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
          <StyledLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://stackoverflow.com/users/4227313/halafi"
          >
            <i className="fab fa-stack-overflow" />
          </StyledLink>
          <StyledLink
            className="link"
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.hackerrank.com/halafi"
          >
            <i className="fab fa-hackerrank" />
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.linkedin.com/in/filip-halas-a7928476/"
          >
            <i className="fab fa-linkedin" />
          </StyledLink>
          <StyledLink
            className="link"
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="mailto:filip@filiphalas.com"
          >
            <i className="far fa-envelope" />
          </StyledLink>
        </StyledLinkedBar>
        <StyledProjects>
          <H3>Most recently worked on:</H3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.capchase.com"
          >
            Capchase.com
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://findenergy.com"
          >
            FindEnergy.com
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://elderguide.com"
          >
            Elderguide.com
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ticketlens.com"
          >
            Ticketlens.com
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://kiwi.com">
            Kiwi.com
          </a>
        </StyledProjects>
      </Layout>
    </>
  );
}
