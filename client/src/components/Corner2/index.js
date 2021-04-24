import React from "react";
// import "./style.css";
import Image from "../../images/corner2.png";

function Corner(props) {
  return (
    <div className="position-relative">
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
