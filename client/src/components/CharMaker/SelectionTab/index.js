import React from "react";

// CSS
import "./style.css";

// Image import
import ImageCenter from "../../../images/selectiontab.png";

// Main function
function SelectionTab(props) {
  return (
    <div
      id="selection"
      className="position-relative"
      style={{
        width: "125px",
        height: "auto",
        position: "relative",
        ...props.tabStyle,
      }}
    >
      <p
        id="selection"
        className="font-weight-bold position-absolute selection-tab-text"
      >
        {props.charProperty}
      </p>
      <img id="selection" src={ImageCenter} alt="Selection tab"></img>
    </div>
  );
}

export default SelectionTab;
