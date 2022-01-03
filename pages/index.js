import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShortcutHome from "../components/ShortcutHome";

export async function getStaticProps() {
  return {
    props: {
      title: "Filip Halas",
      description: "Building state of the art web apps, static sites and tools",
    },
  };
}

function Home(props) {
  const { title, description } = props;

  return (
    <div className="wrapper">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://filiphalas.com" property="og:url" />
      </Head>

      <Navbar />
      <main className="post main home">
        <div className="post-content">
          <div className="post-container">
            <div className="single">
              <h1>{title}</h1>
              <p>
                <strong>Software Engineer at Capchase</strong>.<br />
                {description}.
              </p>
              <ShortcutHome />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
