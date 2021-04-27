import React from "react";
import "./style.css";

function Stonebeam(props) {
  return (
    <div className="position-relative">
      <div
        className="position-absolute stone-beam__horizontal"
        style={props.beamStyle}
      ></div>
    </div>
  );
}

export default Stonebeam;
