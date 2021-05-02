import React from "react";

// Nav Arrow image import
import NavArrow from "../../images/selection_arrow.png";

function SelectionTabStart(props) {
  return (
    <div className="position-relative">
      <img
        className="position-absolute"
        src={NavArrow}
        style={props.arrowStyle}
        alt="Selection tab start"
      ></img>
    </div>
  );
}

export default SelectionTabStart;
