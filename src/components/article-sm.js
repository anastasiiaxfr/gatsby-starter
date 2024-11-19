import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


function Card({ data }) {
  let img = getImage(data.thumb);

  return (
    <article className="post">
     
        <div className="card-img">
          <Link className="card-content" to={`/news/${data.slug}`}>
            <GatsbyImage image={img} alt="A dinosaur" />
          </Link>
          <div className="card-info">
            <Link to="/" className="chip">
              {data.category}
            </Link>
          </div>
        </div>
     

      <div className="card-date">
        <time datetime={data.date}> {new Date(data.date).toLocaleString()}</time>
      </div>
      <Link className="card-content" to={`/news/${data.slug}`}>
        <div className="card-title">{data.title}</div>
        <div className="card-desc">{data.exerpt}</div>
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
    </article>
  );
}

export default Card;
