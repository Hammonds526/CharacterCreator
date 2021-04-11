import React from "react";
import "./style.css";
import Button from "../Button";
import NavArrow from "../NavArrow";

function SelectButton(props) {
  return (
    <div className="position-relative">
      <NavArrow
        arrowStyle={{
          width: "18px",
          height: "auto",
          left: "68px",
          top: "6px",
          zIndex: "1",
        }}
      />
      <div className="position-relative button-image-background">
        <p className="font-weight-bold select-button__text">{props.text}</p>
        {/* <img
        src={Image}
        style={{ width: "85px", height: "auto" }}
        alt="Selection tab start"
      ></img> */}
      </div>
    </div>
  );
}

export default SelectButton;
