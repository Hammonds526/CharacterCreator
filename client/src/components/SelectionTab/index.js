import React from "react";
import "./style.css";
import ImageLeft from "../../images/selectiontab_left.png";
import ImageCenter from "../../images/selectiontab_center.png";
import ImageRight from "../../images/selectiontab_right.png";
import NavArrow from "../NavArrow";

function SelectionTab(props) {
  return (
    <div
      className="position-relative"
      style={{
        width: "125px",
        height: "auto",
        position: "relative",
        ...props.tabStyle,
      }}
    >
      {/* <NavArrow
        arrowStyle={{
          width: "20px",
          height: "auto",
          left: "117px",
          top: "13px",
        }}
      /> */}
      <p className="font-weight-bold position-absolute selection-tab-text">
        {props.charProperty}
      </p>
      <img
        src={ImageLeft}
        alt="Selection tab"
        className="position-absolute"
        style={{ left: "-22px" }}
      ></img>
      <img src={ImageCenter} alt="Selection tab"></img>
      <img
        src={ImageRight}
        alt="Selection tab"
        className="position-absolute"
        style={{ right: "-3px" }}
      ></img>
    </div>
  );
}

export default SelectionTab;
