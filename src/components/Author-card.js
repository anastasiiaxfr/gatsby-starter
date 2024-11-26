import React from 'react';
import { Link } from "gatsby";
import Socials from "./Socials";
import { FaArrowRightLong } from "react-icons/fa6";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function AuthorCard({ data }) {
    console.log('authors', data)
    return (
        <section className="authors">
            {data?.map((i, ind) => (
                <figure className="author" key={ind}>
                    <div className="author-img">
                        <GatsbyImage image={getImage(i.frontmatter.ava)}/>
                    </div>
                    <div className="author-title">
                        {i.frontmatter.title}                   

                    </div>
                    <div className="author-info">
                        {i.frontmatter.job}
                    </div>
                    <div className="author-desc">
                        {i.frontmatter.exerpt}
                    </div>

                    <Socials data={i.frontmatter.contacts}/>

                    <Link className="btn_light" to={`/authors/${i.frontmatter.slug}`}>
                        View Profile <FaArrowRightLong />

                    </Link>

                </figure>
            ))}
        </section>
    )
}

export default AuthorCard



