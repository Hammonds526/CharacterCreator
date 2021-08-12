import React from "react";

// Nav arrow component
import NavArrow from "../../UI/NavArrow";

// CSS
import "./style.css";

function SelectButton(props) {
  return (
    <div className="position-relative" onClick={props.selectButtonOnClick}>
      <NavArrow
        arrowStyle={{
          width: "18px",
          height: "auto",
          left: "72px",
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
