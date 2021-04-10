import React from "react";
import "./style.css";

function WoodBeam(props) {
  return (
    <div
      className="position-absolute wood-beam__vertical"
      style={props.beamStyle}
    >
      {/* <div className="position-absolute "></div> */}
    </div>
  );
}

export default WoodBeam;
