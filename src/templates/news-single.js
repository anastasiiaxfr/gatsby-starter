import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Sidebar from "../components/sidebar";

import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";


const socPost = [
  { icon: <FaFacebookF />, url: "/", label: "" },
  { icon: <FaXTwitter />, url: "/", label: "" },
  { icon: <FaTelegramPlane />, url: "/", label: "" },
  { icon: <IoShareSocial />, url: "/", label: "" },
];

function SingleNews({ data }) {
  const { markdownRemark } = data;
  const { title, authors, category, date, exerpt, thumb } =
    data.markdownRemark.frontmatter;
  let img = getImage(thumb);
  return (
    <Layout>
      <div className="container">
        <article className="page-single">
          <section className="page-single-conteiner">
            <GatsbyImage
              image={img}
              alt={title}
              className="page-single-poster"
            />

            <div className="page-single-header">
              <div className="flex flex-wrap items-center gap-3">
                <Link className="chip" to="/">
                  {category}
                </Link>
                By
                {authors.map((author, index) => (
                  <span key={index} className="flex items-center gap-3">
                    <b>
                      <Link to="/">{author}</Link>
                    </b>
                    {index < authors.length - 1 && "|"}
                  </span>
                ))}
              </div>

              <div className="date">
                <FaRegCalendarAlt />
                <time dateTime={date}>
                  {new Date(date).getFullYear()}-
                  {String(new Date(date).getMonth() + 1).padStart(2, "0")}-
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
            <div className="page-single-lead">{exerpt}</div>

            <div
              className="page-single-content"
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            ></div>

            <div className="page-single-footer">
              <div className="tags">
                <b>Tags: </b> <Link href="/">Tag1</Link>/
                <Link href="/">Tag1</Link>
              </div>

              <nav className="soc">
                {socPost.map((i, ind) => (
                  <Link to={i.url} key={ind}>
                    {i.icon}
                  </Link>
                ))}
              </nav>
            </div>
          </section>
            <Sidebar />
        </article>
      </div>
    </Layout>
  );
}

export default SingleNews;

export const query = graphql`
  query SingleNews($slug: String) {
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
