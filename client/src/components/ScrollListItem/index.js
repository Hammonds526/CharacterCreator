import React, { useState, useEffect } from "react";
import "./style.css";
import CheckBox from "../CheckBox";

function ScrollListItem({
  item,
  i,
  itemType,
  newCharacter,
  setActive,
  ...props
}) {
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxName = item.name;

  useEffect(() => {
    // Check if spell is in character state. If so, pass isChecked to the checkbox.
    if (itemType === "spell") {
      setIsChecked(newCharacter.spells.includes(item.name));
    } else {
      setIsChecked(newCharacter.feats.includes(item.name));
    }
  });

  console.log("item ", item);

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
