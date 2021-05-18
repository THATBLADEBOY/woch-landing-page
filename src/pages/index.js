import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>You can't beat a bot.</h1>
        <h1>Might as well have one on your team.</h1>
        <p>
          A real-time product inventory monitoring bot built for people..for
          free.
        </p>
        <div>
          <button>JOIN NOW</button>
          <Link>Learn more</Link>
        </div>
      </div>
    </Layout>
    <p style={{ textAlign: "center", color: "#A5A5ABa" }}>
      The product you are viewing is a piece of software designed to help
      increase the chances of purchasing a GPU.
      <br />
      We try to use affiliate links to keep woch up and running at no cost to
      you, but we do not have affiliate relationships with all of the retailers
      we support.
      <br />
      If you would ever like to donate to support woch, you can do so{" "}
      <a href="https://www.gatsbyjs.com">here</a>. <span>💙</span>
    </p>
  </>
);

export default IndexPage;
