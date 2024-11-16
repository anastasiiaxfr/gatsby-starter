import React from "react";
import * as s from "./footer.module.css";
import { Link } from "gatsby";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-menu">
          <Link to="/terms">Trems of use</Link>
          <Link to="/policy">Privacy policy</Link>
          <Link to="/cookie">Cookie policy</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
