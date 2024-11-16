import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata;
  return (
    <>
      <Layout>
        <section className="">
          <div className="container">
            <h2 className="">TEST GATSBY</h2>
            <h3 className=""></h3>
            <p className="">
              {title} - {description}
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const Head = () => <SEO />;

export const query = graphql`
  query siteSEO {
    site {
      id
      siteMetadata {
        description
        title
      }
    }
  }
`;
