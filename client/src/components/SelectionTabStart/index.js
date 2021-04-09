import React from "react";
import "./style.css";
import ImgTabStart from "../../images/selection_tab_start.png";
import NavArrow from "../NavArrow";

function SelectionTabStart(props) {
  return (
    <div className="position-relative">
      <NavArrow
        arrowStyle={{
          width: "20px",
          height: "auto",
          left: "117px",
          top: "13px",
        }}
      />
      <p className="font-weight-bold position-absolute selection-tab-text">
        {props.charProperty}
      </p>
      <img
        src={ImgTabStart}
        style={{ width: "150px", height: "auto" }}
        alt="Selection tab start"
      ></img>
    </div>
  );
}

export default SelectionTabStart;
