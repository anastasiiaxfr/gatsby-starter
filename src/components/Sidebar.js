import React from "react";
import Card from "./Article-sm";

export default function Sidaebar({ data }) {
  //console.log("dataSidebar", data);
  return (
    <aside className="sidebar">
      <div className="sidebar-block">
        <h2>Latest Post</h2>

        <div className="sidebar-post">
          {data.slice(0, 5).map((i, ind) => (
            <Card key={ind} data={i.frontmatter} />
          ))}
        </div>
      </div>
    </aside>
  );
}
