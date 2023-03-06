import { styled } from '../stitches.config'
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShortcutHome from "../components/ShortcutHome";
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'
import { generateRssFeed } from '../lib/blog'

export async function getStaticProps() {
  generateRssFeed();

  return {
    props: {
      title: "Filip Halas",
      description: "Building state of the art web apps, static sites and tools",
      seoDescription: "Senior Software Engineer. Building state of the art web apps, static sites and tools. Programming since 2002, getting paid for it since 2014.",
    },
  };
}

function Index(props) {
  const { title, description, seoDescription } = props;

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={seoDescription} name="description" />
        <meta content={seoDescription} property="og:description" />
        <meta content="https://filiphalas.com" property="og:url" />
        <link rel="cannonical" href="https://filiphalas.com" />
      </Head>

      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <h1>{title}</h1>
              <p>
                <strong>Senior Software Engineer</strong><br />
                {description}
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper>
  );
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})

export default Index;