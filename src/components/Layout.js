import React from "react";
import Header from "./header";
import Footer from "./footer";

import "../assets/styles/global.css";

function Layout({ children }) {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <main className="page-main">{children}</main>
      </div>
      <Footer />
    </>
  );
}
export default Layout;
