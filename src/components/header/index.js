import React from "react";
import { Link } from "gatsby";
import Logo from "../logo";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <nav className="header-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/news">News</Link>
        </nav>
      </div>
    </header>
  );
}
