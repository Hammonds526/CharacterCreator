import React from "react";
import "./style.css";

import ScrollListItem from "../ScrollListItem";

function ScrollList({ spellList, scrollListStyle, ...props }) {
  return (
    <div className="scroll-list" style={scrollListStyle}>
      {spellList()[0]
        ? spellList().map((spell, i) => (
            <ScrollListItem spell={spell} {...props} i={i} key={i} />
          ))
        : null}
    </div>
  );
}

export default ScrollList;
