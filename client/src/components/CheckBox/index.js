import React from "react";
import "./style.css";
import CheckedBox from "../../images/checked_box.png";
import UncheckedBox from "../../images/empty_box.png";

function CheckBox({ checkboxStyle, checked, checkboxOnClick, checkBoxName }) {
  return (
    <div className="">
      <img
        style={checkboxStyle}
        src={checked ? CheckedBox : UncheckedBox}
        alt="checkbox"
        onClick={checkboxOnClick}
        name={checkBoxName}
      />
    </div>
  );
}

export default CheckBox;
