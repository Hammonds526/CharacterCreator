import React from "react";
import "./style.css";
import CheckedBox from "../../images/ui/checked_box.png";
import UncheckedBox from "../../images/ui/empty_box.png";

function CheckBox({
  item,
  checkboxStyle,
  checked,
  checkboxOnClick,
  checkBoxName,
}) {
  return (
    <div className="">
      <img
        style={checkboxStyle}
        src={checked ? CheckedBox : UncheckedBox}
        alt="checkbox"
        onClick={(e) => {
          checkboxOnClick(e, item.level);
        }}
        name={checkBoxName}
      />
    </div>
  );
}

export default CheckBox;
