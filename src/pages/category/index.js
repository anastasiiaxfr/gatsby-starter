import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import Article from "../../components/Article";

function News({ data }) {
  const news = data.allMarkdownRemark.nodes;
  const { allCat } = data;

  return (
    <Layout categories={allCat.distinct}>
      <div className="container">
        <h1 className="">Breaking news</h1>
        <section className="banners banners_1">
          <Link className="banner" to="https://quick-funds-landing.vercel.app/" target="_blank">
            <StaticImage src="../assets/img/news/banners/b1.jpg" alt="A dinosaur" />
          </Link>
          {news.slice(0, 1).map((i, ind) => (
            <Article data={i.frontmatter} key={ind} hasImg={false} lgDesc={true} />
          ))}
        </section>
        <section className="cards cards_2">
          {news.slice(1, 4).map((i, ind) => (
            <Article
              data={i.frontmatter}
              key={ind}
              hasImg={ind === 0 || ind == 1 || ind === 2 ? false : true}
              name={`card ${ind === 0 ? "card-lg" : ""}`}
              lgDesc={ind === 0 ? true : false}
            />
          ))}
        </section>

        <h2 className="h1">Latest News</h2>
        <section className="cards cards_3">
          {news.slice(4, 8).map((i, ind) => (
            <Article data={i.frontmatter} key={ind} />
          ))}
        </section>
        <h2 className="h1">Analytics</h2>
        <section className="cards cards_1">
          {news.slice(8).map((i, ind) => (
            <Article
              data={i.frontmatter}
              key={ind}
              name={`card ${ind === 0 ? "card-lg-l" : ""} ${ind === 1 ? "card-lg-r" : ""}`}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default News;

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src/markdown/news//" } }) {
      nodes {
        frontmatter {
          title
          authors
          category
          exerpt
          date
          slug
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    allCat: allMarkdownRemark {
      distinct(field: { frontmatter: { category: SELECT } })
    }
  }
`;
