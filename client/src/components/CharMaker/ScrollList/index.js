import React from "react";

// CSS
import "./style.css";

// Components
import ScrollListItem from "../ScrollListItem";

// Main function
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
