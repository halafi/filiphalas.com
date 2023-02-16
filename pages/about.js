import { styled } from "../stitches.config";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { parseISO, format, intervalToDuration } from "date-fns";
import Main from "../layouts/Main";
import stripHtml from "../lib/strip-html";
import items from "../data/about";

// I'm currently helping startups grow as a <strong>Software Engineer</strong> at Capchase.

export async function getStaticProps() {
  const meta = {
    title: "About | Filip Halas",
    description:
      "Hi, I'm Filip. I started with HTML and game development in elementary school and never stopped being passionate about software and technology. I'm from Czechia and currently workationing around East and Southeast Asia. I enjoy learning, building, problem solving, working on open source and side projects.",
    tagline: "About Me",
    primaryColor: "cyan",
    secondaryColor: "purple",
  };

  return { props: meta };
}

function About(props) {
  const { title, description } = props;

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <Image
            alt="Filip"
            src="/static/images/filip-bw.jpg"
            width="336"
            height="336"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: "16px",
              "@bp2": { marginTop: "-6px" },
            }}
          >
            <strong>Hi, I'm Filip.</strong> I started with HTML and game
            development in elementary school and never stopped being{" "}
            <strong>passionate about software and technology</strong>.
          </Paragraph>
          <Paragraph>
            I'm from Czechia and currently{" "}
            <strong>workationing around East and Southeast Asia</strong>.
          </Paragraph>
          <Paragraph>
            <strong>I enjoy learning, building, problem solving</strong>,
            working on open source and side projects.
          </Paragraph>
        </Section>
      </Container>
    );
  };

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), "LLL yyyy")}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), "LLL yyyy")
                : "Present"}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      );
    });
  };

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    });

    let durationStr = "";

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `;
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `;
    }

    durationStr += `${durationObj.months} mos`;

    return durationStr;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://filiphalas.com/about" property="og:url" />
      </Head>

      {renderIntro()}

      <h2>Career</h2>
      {renderAll()}
    </>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@bp2": { flexDirection: "row" },
});

const Paragraph = styled("p", {
  "@bp2": { margin: "15px 0" },
});

const Section = styled("div", {
  marginTop: "0px",
  width: "auto",
  "@bp2": { width: "48%" },
});

About.Layout = Main;

export default About;