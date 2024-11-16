import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Article from "./article";

function News({ data }) {
  const news = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className="container">
        <h1 className="">Breaking news</h1>
        <section className="banners banners_1">
          <Link className="banner" to="/">
            <StaticImage src="https://picsum.photos/600/300" alt="A dinosaur" />
          </Link>
          {news.slice(0, 1).map((i, ind) => (
            <Article data={i.frontmatter} key={ind} hasImg={false} />
          ))}
        </section>
        <section className="cards cards_2">
          {news.slice(1, 8).map((i, ind) => (
            <Article data={i.frontmatter} key={ind} hasImg={ind === 0 || ind == 1 || ind === 2 ? false : true} />
          ))}
        </section>

        <h2 className="h1">Analytics</h2>
        <section className="cards cards_1">
          {news.slice(8).map((i, ind) => (
            <Article
              data={i.frontmatter}
              key={ind}
              classN={`card ${ind === 0 ? "card-lg-l" : ""} ${ind === 1 ? "card-lg-r" : ""}`}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default News;

export const query = graphql`
  query allNews {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src/markdown/news//" } }) {
      nodes {
        frontmatter {
          title
          authors
          category
          exerpt
          date
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;
