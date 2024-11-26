import React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/Seo";
import { graphql } from "gatsby";
import AuthorCard from "../components/Author-card";

function Authors({ data }) {
  const { allCategories, allMarkdownRemark } = data;
  //console.log('auth', allMarkdownRemark.nodes)
  return (
    <Layout categories={allCategories.distinct}>
      <div className="container">
        <h1>Our authors</h1>
        <AuthorCard data={allMarkdownRemark.nodes} />
      </div>
    </Layout>
  );
}

export default Authors;

export const Head = () => <SEO title="Authors" />;

export const query = graphql`
  query Authors {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/markdown/authors//" } }
      limit: 100
    ) {
      nodes {
        frontmatter {
          slug
          title
          job
          exerpt
          ava {
            childImageSharp {
              gatsbyImageData
            }
          }
          contacts {
            link
            name
          }
        }
      }
    }
    allCategories: allMarkdownRemark {
      distinct(field: { frontmatter: { category: SELECT } })
    }
  }
`;
