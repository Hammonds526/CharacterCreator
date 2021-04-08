import React from "react";
// import "./style.css";
import ImgTabStart from "../../images/selection_tab_start.png";

function SelectionTabStart(props) {
  return (
    <div>
      <p className="text-weight-bold">{props.charProperty}</p>
      <img
        src={ImgTabStart}
        style={{ width: "150px", height: "auto" }}
        alt="Selection tab start"
      ></img>
    </div>
  );
}

export default SelectionTabStart;
