import React from "react";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";
import Main from "../layouts/Main";
import FeaturedProject from "../components/FeaturedProject";
import { FeaturedProjects } from '../components/FeaturedProjects'
import stripHtml from "../lib/strip-html";
import items from "../data/projects";

export async function getStaticProps() {
  const meta = {
    title: "Projects | Filip Halas",
    tagline: "Open Source Projects",
    primaryColor: 'purple',
    secondaryColor: 'green',
  };

  return { props: meta };
}

function Projects(props) {
  const renderFeatured = () => {
    const featured = ["Elder.js", "dotfiles", "Minesweeper", "Gomatch"];

    return items
      .map((item) => {
        return item.projects.filter((project) =>
          featured.includes(project.title)
        );
      })
      .filter((item) => {
        if (item.length > 0) {
          return item;
        }
      })
      .flat()
      .map((item, index) => {
        return <FeaturedProject key={index} project={item} />;
      });
  };

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, pIndex) => {
              return <ProjectItem key={pIndex} project={project} />;
            })}
          </ul>
        </div>
      );
    });
  };

  const getTotalProjects = () => {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      total = total + items[i].projects.length;
    }

    return total;
  };

  const { title } = props;
  const description = `On this page you can find <strong>${getTotalProjects()} different</strong> open source apps and libraries I have built or contributed to over the course of my github career starting with University projects.`;

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://filiphalas.com/projects" property="og:url" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Projects</h2>
        <FeaturedProjects>{renderFeatured()}</FeaturedProjects>

        <h2>All Projects</h2>
        {renderAll()}
      </AnimateSharedLayout>
    </div>
  );
}

function ProjectItem(props) {
  const { project } = props;

  return (
    <li>
      <a href={project.url} target="_blank">
        {project.title}
      </a>
    </li>
  );
}

Projects.Layout = Main;

export default Projects;