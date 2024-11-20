import React from 'react'
import Layout from "../components/Layout";
import { SEO } from "../components/Seo";
import { graphql } from "gatsby";

function Terms({ data }) {
  // Access the title and html content from the first node in the data
  const { html } = data.allMarkdownRemark.nodes[0];
  const { title } = data.allMarkdownRemark.nodes[0].frontmatter;

  return (
    <Layout>
        <div className="page container max-w-6xl">
           <h1>{title}</h1>
           {/* Render the HTML content */}
           <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
  );
}

export const Head = () => <SEO title="Terms of Services" />

export const query = graphql`
 query Terms {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/src/markdown/terms/terms/"}}
  ) {
    nodes {
      frontmatter {
        title
      }
      html
    }
  }
}
`;

export default Terms;