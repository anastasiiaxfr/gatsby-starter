import React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import ThemeSwitch from '../Theme-switch';

import { IoSearchSharp } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";


const navByCat = [
  { url: "/", label: "Home" },
  { url: "/", label: "Business" },
  { url: "/", label: "Economic" },
  { url: "/", label: "Sport" },
  { url: "/", label: "Tech" },
  { url: "/", label: "Education" },
  { url: "/", label: "Life" },
  { url: "/", label: "Hobbies & Events" },
];


export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <Logo />
          <nav className="header-menu">
            <Link to="/contacs">Contacts</Link>
            <Link to="/authors">Authors</Link>
            <Link to="/">Terms</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/">Categories</Link>
          </nav>

          <div className="header-cta">
            <button className="search-btn" title="Search">
              <IoSearchSharp />
            </button> 
            <ThemeSwitch />
          </div>
         
        </div>
      </div>
      <div className="header-btm">
        <div className="container">
          <nav className="header-menu">
            {navByCat
              .map((i, ind) => (
                <Link to={i.url} key={ind}>
                  {i.label}
                </Link>
              ))
              .reduce(
                (acc, curr, ind, arr) => (ind === arr.length - 1 ? acc.concat(curr) : acc.concat(curr, " | ")),
                []
              )}
          </nav>
        </div>
      </div>
    </header>
  );
}
