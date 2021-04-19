import React from "react";
import "./style.css";

import ScrollListItem from "../ScrollListItem";

function ScrollList({ list, scrollListStyle, ...props }) {
  return (
    <div className="scroll-list" style={scrollListStyle}>
      {list()[0]
        ? list().map((item, i) => (
            <ScrollListItem item={item} {...props} i={i} key={i} />
          ))
        : null}
    </div>
  );
}

export default ScrollList;
