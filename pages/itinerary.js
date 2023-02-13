import React from "react";
import Head from "next/head";
import { parseISO, format } from "date-fns";
import Main from "../layouts/Main";
import items from "../data/itinerary";

export async function getStaticProps() {
  const meta = {
    title: "Itinerary",
    tagline: "Travel Plans",
    gradientColor: "purple-cyan",
    selectionColor: "pink",
  };

  return { props: meta };
}

function Ininerary(props) {
  const { title } = props;

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>✈️ {item.origin} -&gt; {item.destination}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span>Flight: {item.flightNumber}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.date), "Pp")}</span>
            <span> – </span>
            {items[index + 1] ? (
              <span>{format(parseISO(items[index + 1].date), "Pp")}</span>
            ) : <span>???</span>}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content="https://filiphalas.com/itinerary" property="og:url" />
      </Head>

      <h2>Upcoming Flights</h2>
      {renderAll()}
    </div>
  );
}

Ininerary.Layout = Main;

export default Ininerary;