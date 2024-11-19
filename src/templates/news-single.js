import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Sidebar from "../components/Sidebar";
import Share from "../components/Share";
import { FaRegCalendarAlt, FaRegBookmark, FaRegHeart } from "react-icons/fa";

function SingleNews({ data }) {
  //console.log("post", data);
  const { markdownRemark, latestNews } = data;
  const { title, authors, category, date, exerpt, thumb } = markdownRemark.frontmatter;
  const img = getImage(thumb);

  return (
    <Layout>
      <div className="container">
        <article className="page-single">
          <section className="post">
            <GatsbyImage image={img} alt={title} className="post-poster" />

            <div className="post-header">
              <div className="post-header-inner">
                <Link className="chip" to="/">
                  {category}
                </Link>
                <div className="post-authors">
                  By
                  {authors.map((author, index) => (
                    <span key={index} className="post-author">
                      <b>
                        <Link to="/">{author}</Link>
                      </b>
                      {index < authors.length - 1 && " | "}
                    </span>
                  ))}
                </div>
              </div>

              <div className="date">
                <FaRegCalendarAlt />
                <time dateTime={date}>
                  {new Date(date).getFullYear()}-{String(new Date(date).getMonth() + 1).padStart(2, "0")}-
                  {String(new Date(date).getDate()).padStart(2, "0")}
                </time>
                | <small>10 min read</small>
              </div>

              <div className="post-actions">
                <button>
                  <FaRegBookmark />
                </button>
                <button>
                  <FaRegHeart />
                </button>
              </div>
            </div>

            <h1>{title}</h1>
            <div className="post-lead">{exerpt}</div>

            <div className="post-content" dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>

            <div className="post-footer">
              <div className="tags">
                <b>Tags: </b>
                <Link to="/">Tag1</Link> / <Link to="/">Tag2</Link>
              </div>

              <Share data={latestNews} />
            </div>
          </section>

          <Sidebar data={latestNews.nodes} />
        </article>
      </div>
    </Layout>
  );
}

export default SingleNews;

export const query = graphql`
  query($slug: String) {
    latestNews: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/markdown/news//" }, frontmatter: { slug: { ne: $slug } } }
    ) {
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
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        authors
        category
        date
        exerpt
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
