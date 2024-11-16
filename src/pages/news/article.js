import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function Article({ data, classN = "card", hasImg = true }) {
  let img = getImage(data.thumb);
  return (
    <article className={classN}>
      {hasImg ? (
        <div class="card-img">
          <GatsbyImage image={img} alt="A dinosaur" />
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

      <div className="card-date">
        <time datetime={data.date}> {new Date(data.date).toLocaleString()}</time>
      </div>
      <Link class="card-content" to={`/news/${data.slug || "#"}`}>
        <div className="card-title">{data.title}</div>
        <div className="card-desc">{data.exerpt}</div>
      </Link>
      <div className="card-footer">
        <div className="card-auth">
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
    </article>
  );
}

export default Article;
