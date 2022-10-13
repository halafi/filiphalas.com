import React from "react";
import Head from "next/head";
import { parseISO, format, intervalToDuration } from "date-fns";
import Main from "../layouts/Main";
import stripHtml from "../lib/strip-html";
import items from "../data/about";

// I'm currently helping startups grow as a <strong>Software Engineer</strong> at Capchase.

export async function getStaticProps() {
  const meta = {
    title: "About Filip Halas",
    description:
      "<p><strong>Hi, I'm Filip.</strong> I first touched HTML and game development back in elementary school and am passionate about IT and computer science ever since.</p><p>I'm originally from Czechia and currently <strong>travelling around Asia</strong>.</p><p><strong>I enjoy learning and building stuff</strong>, working on open source and side projects. Besides work I like to do sports and play board games.</p>",
    tagline: "Who Am I",
    gradientColor: "purple-cyan",
    selectionColor: "pink",
  };

  return { props: meta };
}

function About(props) {
  const { title, description } = props;

  const renderIntro = () => {
    return (
      <div className="about">
        <div className="about-section">
          <img alt="Filip" src="/static/images/filip-bw.jpg" />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="about-section"
        />
      </div>
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
    <div className="single">
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
    </div>
  );
}

About.Layout = Main;

export default About;