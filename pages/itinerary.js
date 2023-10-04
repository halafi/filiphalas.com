import React from "react";
import Head from "next/head";
import { parseISO, format } from "date-fns";
import Main from "../layouts/Main";
import items from "../data/itinerary";
import { isAfter, isBefore } from "date-fns";

export async function getStaticProps() {
  const meta = {
    title: "Itinerary",
    tagline: "Travel Plans",
    primaryColor: 'purple',
    secondaryColor: 'green',
  };

  return { props: meta };
}

function Ininerary(props) {
  const { title } = props;

  const renderUpcoming = () => {
    const today = new Date();
    return items
      .filter((i) => isAfter(new Date(i.date), today))
      .map((item, index) => {
        return (
          <div style={{ marginBottom: 40 }} key={index}>
            <h3>
              ✈️ {item.origin} -&gt; {item.destination}
            </h3>
            <p style={{ margin: 0 }}>
              <a href={item.companyUrl} target="_blank">
                {item.company}
              </a>
              <span>Flight: {item.flightNumber}</span>
            </p>
            <p style={{ margin: 0 }}>
              <span>When: {format(parseISO(item.date), "Pp")}</span>
            </p>
          </div>
        );
      });
  };

  const renderPast = () => {
    const today = new Date();
    return items
      .filter((i) => isBefore(new Date(i.date), today))
      .map((item, index) => {
        return (
          <div style={{ marginBottom: 40 }} key={index}>
            <h3>
              ✈️ {item.origin} -&gt; {item.destination}
            </h3>
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
              ) : (
                <span>???</span>
              )}
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
        <link rel="canonical" href="https://filiphalas.com/itinerary" />
      </Head>

      <h2>Past Flights</h2>
      {renderPast()}
      <h2>Upcoming Flights</h2>
      {renderUpcoming()}
    </div>
  );
}

Ininerary.Layout = Main;

export default Ininerary;