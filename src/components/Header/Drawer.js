import React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";

import { IoMdClose } from "react-icons/io";

function Drawer({ data, showDrawer, setShowDrawer }) {
  return (
    <section className={`drawer ${showDrawer ? "open" : ""}`}>
      <div className="drawer-header" onClick={() => setShowDrawer(false)}>
        <Logo />
        <button className="drawer-toggle">
          <IoMdClose />
        </button>
      </div>

      <nav className="drawer-menu">
        {data?.map((i, ind) => (
          <Link to={`/category/${i.toLowerCase().replaceAll(" ", "-")}`} key={ind} onClick={() => setShowDrawer(false)}>
            {i}
          </Link>
        ))}
        <Link to="/">Authors</Link>
      </nav>
    </section>
  );
}

export default Drawer;
