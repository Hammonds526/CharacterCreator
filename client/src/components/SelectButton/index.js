import React from "react";
import "./style.css";
import NavArrow from "../NavArrow";

function SelectButton(props) {
  return (
    <div className="position-relative" onClick={props.selectButtonOnClick}>
      <NavArrow
        arrowStyle={{
          width: "18px",
          height: "auto",
          left: "98px",
          top: "6px",
          zIndex: "1",
        }}
      />
      <div className="position-relative button-image-background button-image__size">
        <p className="font-weight-bold select-button__text">{props.text}</p>
      </div>
    </div>
  );
}

export default SelectButton;
