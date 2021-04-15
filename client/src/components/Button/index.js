import React from "react";
import "./style.css";
import Image from "../../images/btn.png";

function Button(props) {
  return (
    <div className="position-relative button-image-background">
      <p className="font-weight-bold position-absolute button-text">
        {props.text}
      </p>
    </div>
  );
}

export default Button;
