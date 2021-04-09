import React from "react";
import "./style.css";
import Image from "../../images/wood_beam.png";

function WoodBeam(props) {
  return (
    <div className="position-relative">
      <div
        className="position-absolute wood-beam__horizontal"
        style={props.beamStyle}
      >
        {/* <img
        className="position-absolute"
        src={Image}
        // style={props.beamStyle}
        alt="Selection tab start"
      ></img> */}
      </div>
    </div>
  );
}

export default WoodBeam;
