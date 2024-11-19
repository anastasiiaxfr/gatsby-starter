import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const truncateText = (text, length) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

function Article({ data, name = "card", hasImg = true, lgDesc = false }) {
  let img = getImage(data.thumb);
  const truncatedExcerpt = truncateText(data.exerpt, lgDesc ? 300 : 150);

  return (
    <article className={name}>
      {hasImg ? (
        <div className="card-img">
          <Link className="" to={`/news/${data.slug}`}>
            <GatsbyImage image={img} alt="A dinosaur" />
          </Link>
          <div className="card-info">
            <Link to="/" className="chip">
              {data.category}
            </Link>
          </div>
        </div>
      ) : (
        <div className="card-info">
          <Link to="/" className="chip">
            {data.category}
          </Link>
        </div>
      )}

      <div className="card-container">
        <Link className="card-content" to={`/news/${data.slug}`}>
          <div className="card-date">
            <time dateTime={data.date}> {new Date(data.date).toLocaleString()}</time>
          </div>
          <div className="card-title">{data.title}</div>
          <div className="card-desc">{truncatedExcerpt}</div>
        </Link>
        <div className="card-footer">
          <div className="card-auth">
            By{" "}
            {data.authors.map((author, ind) => (
              <>
                <Link to="/" key={ind} className="card-note">
                  {author}
                </Link>
                {ind < data.authors.length - 1 && " /"}
              </>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;
