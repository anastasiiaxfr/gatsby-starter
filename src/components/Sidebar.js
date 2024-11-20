import React from "react";
import Card from "./Article-sm";
import Networks from "./Networks";

export default function Sidaebar({ data }) {
  //console.log("dataSidebar", data);
  return (
    <aside className="sidebar">
      {/* BEGIN block */}
      <div className="sidebar-block">
        <h2>Latest Post</h2>

        <div className="sidebar-post">
          {data.slice(0, 5).map((i, ind) => (
            <Card key={ind} data={i.frontmatter} />
          ))}
        </div>
      </div>
      {/* END block */}

      {/* BEGIN block */}
      <div className="sidebar-block text-center">
        <h2>Stay In Touch</h2>
        <Networks />
      </div>
      {/* END block */}
    </aside>
  );
}
