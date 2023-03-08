import { styled } from '../stitches.config'
import Head from "next/head";
import Main from "../layouts/Main";
import stripHtml from "../lib/strip-html";
import { getAllPosts, getPostBySlug } from "../lib/blog";
import ListItem from "../components/ListItem";
import { ListGroup } from '../components/ListGroup'
import FeaturedArticle from "../components/FeaturedArticle";
import { AnimateSharedLayout } from "framer-motion";

export async function getStaticProps() {
  const allPosts = getAllPosts(["date", "skip", "slug", "title"]);

  const featuredParams = [
    "date",
    "slug",
    "title",
    "image",
    "content",
    "description",
  ];

  // article ideas: how to find meaning in your work?
  const featuredPosts = [
    getPostBySlug("chatgpt-content-generation", featuredParams),
    getPostBySlug("from-vscode-to-neovim", featuredParams),
  ];

  return {
    props: {
      title: "Articles | Filip Halas",
      tagline: "Articles",
      primaryColor: "pink",
      secondaryColor: "red",
      featuredPosts,
      allPosts,
    },
  };
}

function Articles(props) {
  const renderFeatured = () => {
    return props.featuredPosts.map((post, index) => {
      return (
        <FeaturedArticle
          key={index}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          description={post.description}
          image={post.image}
          stats={post.stats}
          content={post.content}
        />
      );
    });
  };

  const renderAll = () => {
    return props.allPosts.map((post, index) => {
      if (!post.skip) {
        return (
          <ListItem
            key={index}
            index={index}
            href={`/${post.slug}`}
            title={post.title}
            date={post.date}
          />
        );
      }
    });
  };

  const { title } = props;
  const description = `On this page you can find <strong>${props.allPosts.length} articles</strong> I wrote. I write about travelling, software engineering and productivity.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://filiphalas.com/articles" property="og:url" />
        <link rel="cannonical" href="https://filiphalas.com/articles" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Articles</h2>
        <FeaturedArticles>{renderFeatured()}</FeaturedArticles>

        <h2>All Articles</h2>
        <ListGroup>{renderAll()}</ListGroup>
      </AnimateSharedLayout>
    </>
  );
}

const FeaturedArticles = styled('div', {
  margin: '10px 0 0 -20px',
  '@bp2': { display: 'flex', justifyContent: 'space-between' },
})

Articles.Layout = Main;

export default Articles;