import React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/Seo";
import { graphql } from "gatsby";
import AuthorCard from "../components/Author-card";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Socials from "../components/Socials";

function Authors({ data }) {
  const { allCategories, allMarkdownRemark, allTeams } = data;
  //console.log('team', allTeams.nodes)
  return (
    <Layout categories={allCategories.distinct}>
      <div className="container">
        <h1>Our authors</h1>
        <AuthorCard data={allMarkdownRemark.nodes} />
        <h2 className="h1">Leadership & Experienced Team </h2>
        <section className="teams">
            {allTeams.nodes.map((i, ind) => (
                <figure className="team" key={ind}>
                    
                    <GatsbyImage image={getImage(i.frontmatter.ava)} alt="A dinosaur" />

                    <figcaption className="team-overlay">
                        <Socials data={i.frontmatter.contacts}/>
                        <div className="team-content">
                            <div className="team-title">{i.frontmatter.title}</div>
                            <div className="team-info">{i.frontmatter.job}</div>
                        </div>
                    </figcaption>
                </figure>
            ))}
        </section>
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
    allTeams: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/markdown/team//" } }
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
