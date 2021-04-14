import React from "react";
import "./style.css";
import Image from "../../images/btn.png";

function Button(props) {
  return (
    <div className="position-relative button-image-background">
      <p className="font-weight-bold position-absolute button-text">
        {props.text}
      </p>
      {/* <img
        src={Image}
        style={{ width: "85px", height: "auto" }}
        alt="Selection tab start"
      ></img> */}
    </div>
  );
}

export default Button;
