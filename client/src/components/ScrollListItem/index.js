import React, { useState, useEffect } from "react";
import "./style.css";
import CheckBox from "../CheckBox";

function ScrollListItem({
  item,
  i,
  activeList,
  newCharacter,
  setActive,
  ...props
}) {
  console.log("activeList ", activeList());
  console.log("item ", item);
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxName = item.name;

  useEffect(() => {
    // Check if spell is in character state. If so, pass isChecked to the checkbox.
    setIsChecked(activeList(item));
  }, [newCharacter]);

  return (
    <div key={i} className="d-flex justify-content-between">
      <p
        className="text-bisque"
        onClick={() => {
          console.log("you clicked the name of a spell");
          setActive(item);
        }}
      >
        {item.name}
      </p>
      <CheckBox
        checkboxStyle={{ height: "30px", marginRight: "10px" }}
        spellName={item.name}
        checked={isChecked}
        {...props}
        checkBoxName={checkBoxName}
      />
    </div>
  );
}

export default ScrollListItem;
