import React from "react";
import "./style.css";

function Button(props) {
  return (
    <div
      className={"position-relative button-image-background button-image__size"}
      style={props.buttonStyles ? props.buttonStyles : null}
    >
      <p className="font-weight-bold position-absolute button-text">
        {props.text}
      </p>
    </div>
  );
}

export default Button;
