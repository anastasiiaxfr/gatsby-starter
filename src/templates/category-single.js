import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Article";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { StaticImage } from "gatsby-plugin-image";

const CategoryTemplate = ({ data, pageContext }) => {
  // const posts = data.allMarkdownRemark.edges;
  console.log("category", data);
  const { category } = pageContext;
  const { numPages, currentPage } = pageContext;

  const { allCategories } = data;
  const posts = data.allMarkdownRemark.edges;

  const prevPage =
    currentPage === 1
      ? null
      : currentPage === 2
      ? `/category/${category.toLowerCase().replace(/\s+/g, "-")}/`
      : `/category/${category.toLowerCase().replace(/\s+/g, "-")}/${currentPage - 1}`;

  const nextPage =
    currentPage === numPages ? null : `/category/${category.toLowerCase().replace(/\s+/g, "-")}/${currentPage + 1}`;

  // Calculate the range of page numbers to show
  const pageNumbers = [];
  const rangeSize = 5; // Number of pages before and after
  let startPage = Math.max(1, currentPage - Math.floor(rangeSize / 2));
  let endPage = Math.min(numPages, currentPage + Math.floor(rangeSize / 2));

  // Adjust the startPage to ensure we have 5 pages if possible
  if (endPage - startPage < rangeSize - 1) {
    startPage = Math.max(1, endPage - rangeSize + 1);
  }

  // Collect the page numbers
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Layout categories={allCategories.distinct}>
      <div className="container">
        <h1>
          <b className="text-main">{category}</b> News
        </h1>

        <div className="cards cards_1">
          {(posts.length === 1 || posts.length === 2) && (
            <Link className="banner_lg" to="https://quick-funds-landing.vercel.app/" target="_blank">
              <StaticImage src="../assets/img/news/banners/b1.jpg" alt="A dinosaur" />
            </Link>
          )}

          {posts.map(({ node }) => (
            <Card
              key={node.id}
              data={node.frontmatter}
              name={`card`}
              desc={false}
              hasImg={posts.length === 1 || posts.length === 2 ? false : true}
            />
          ))}
        </div>

        {numPages > 1 && (
          <nav className="pagination">
            {prevPage && (
              <Link to={prevPage} className="prev-page">
                <MdKeyboardArrowLeft />
              </Link>
            )}

            {pageNumbers.map((pageNum) => (
              <Link
                to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}/${pageNum === 1 ? "" : pageNum}`}
                key={pageNum}
                className={`page-number ${pageNum === currentPage ? "active" : ""}`}
              >
                {pageNum}
              </Link>
            ))}

            {nextPage && (
              <Link to={nextPage} className="next-page">
                <MdKeyboardArrowRight />
              </Link>
            )}
          </nav>
        )}
      </div>
    </Layout>
  );
};

// GraphQL page query to fetch posts for the category
export const pageQuery = graphql`
  query($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: $category } } }, skip: $skip, limit: $limit) {
      edges {
        node {
          id
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
        }
      }
    }
    allCategories: allMarkdownRemark {
      distinct(field: { frontmatter: { category: SELECT } })
    }
  }
`;

export default CategoryTemplate;
