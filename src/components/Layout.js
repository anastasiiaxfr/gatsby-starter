import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../assets/styles/styles.sass";

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
