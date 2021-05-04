import React from "react";

// CSS and Image
import Image from "../../images/corner.png";

function Corner(props) {
  return (
    <div
      className={props.parentClass ? props.parentClass : "position-relative"}
    >
      <img
        className="position-absolute"
        src={Image}
        style={props.cornerStyle}
        alt="Selection tab start"
      ></img>
    </div>
  );
}

export default Corner;
