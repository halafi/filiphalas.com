import React from "react";
import Head from "next/head";
import Main from "../layouts/Main";
import stripHtml from "../lib/strip-html";
import categories from "../data/setup";

export async function getStaticProps() {
  const meta = {
    title: "Setup | Filip Halas",
    description: "Software and Hardware I use and that I would recommend to anyone to try out.",
    tagline: "MacOS Setup",
    primaryColor: 'yellow',
    secondaryColor: 'pink',
    // gradientColor: "yellow-pink",
    // selectionColor: "orange",
  };

  return { props: meta };
}

function Setup(props) {
  const { title, description } = props;

  const renderAll = () => {
    return categories.map((category, index) => {
      return (
        <div key={index}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, iIndex) => {
              return (
                <li key={iIndex}>
                  <a href={item.url} target="_blank">
                    {item.title}
                  </a>
                  <span> - </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://filiphalas.com/setup" property="og:url" />
      </Head>

      <p dangerouslySetInnerHTML={{ __html: description }} />

      {renderAll()}
    </div>
  );
}

Setup.Layout = Main;

export default Setup;