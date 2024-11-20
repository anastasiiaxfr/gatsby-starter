import React from 'react'
import { Link } from "gatsby";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

const socPost = [
    { icon: <FaFacebookF />, url: "/", label: "Facenook" },
    { icon: <FaXTwitter />, url: "/", label: "Twitter" },
    { icon: <FaTelegramPlane />, url: "/", label: "Telegram" },
    { icon: <IoShareSocial />, url: "/", label: "Share" },
];

function Share() {
    return (
        <nav className="soc soc_main">
            {socPost.map((i, ind) => (
                <Link to={i.url} key={ind} title={i.label}>
                    {i.icon}
                </Link>
            ))}
        </nav>
    )
}

export default Share