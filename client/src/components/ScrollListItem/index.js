import React, { useState, useEffect } from "react";

// Component import
import CheckBox from "../CheckBox";

// CSS
import "./style.css";

// Main function
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
    // Check if spell is in newCharacter state. If so, pass isChecked to the checkbox.
    if (itemType === "spell") {
      if (item.level >= 1) {
        setIsChecked(newCharacter.spells.includes(item.name));
      } else {
        setIsChecked(newCharacter.cantrips.includes(item.name));
      }
    } else {
      setIsChecked(newCharacter.feats.includes(item.name));
    }
  });

  return (
    <div key={i} id="list" className="d-flex justify-content-between">
      <div>
        <p
          className="text-bisque scroll-list-item__text"
          onClick={() => {
            setActive(item);
          }}
        >
          {item.name}
        </p>
      </div>
      <div className="d-flex">
        <p className="mr-1 scroll-list-item__spell-level">{item.level}</p>
        <CheckBox
          checkboxStyle={{ height: "30px", marginRight: "10px" }}
          spellName={item.name}
          checked={isChecked}
          {...props}
          checkBoxName={checkBoxName}
          item={item}
        />
      </div>
    </div>
  );
}

export default ScrollListItem;
