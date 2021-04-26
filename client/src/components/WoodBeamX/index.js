import React from "react";
import "./style.css";

function WoodBeam(props) {
  return (
    <div
      className={props.parentClass ? props.parentClass : "position-relative"}
    >
      <div
        className="position-absolute wood-beam__horizontal"
        style={props.beamStyle}
      ></div>
    </div>
  );
}

export default WoodBeam;
