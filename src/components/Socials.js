import React from 'react'
import { Link } from "gatsby";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const socPost = [
    { icon: <FaFacebookF />, url: "/", label: "Facenook" },
    { icon: <FaXTwitter />, url: "/", label: "Twitter" },
    { icon: <FaTelegramPlane />, url: "https://t.me/+380630633226", label: "Telegram" },
    { icon: <IoShareSocial />, url: "/", label: "Share" },
];

function Share({ data }) {
    return (
        <nav className="soc soc_main">
            {data ? data.map((i, ind) => (
                <Link to={i.link} key={ind} title={i.name} target="_blank">
                    {i.name === 'facebook' && <FaFacebookF />}
                    {i.name === 'twitter' && <FaXTwitter />}
                    {i.name === 'telegram' && <FaTelegramPlane />}
                    {i.name === 'linkedin' && <FaLinkedinIn />}
                    {i.name === 'email' && <MdAlternateEmail />}
                </Link>
            ))

                : socPost.map((i, ind) => (
                    <Link to={i.url} key={ind} title={i.label}>
                        {i.icon}
                    </Link>
                ))}
        </nav>
    )
}

export default Share