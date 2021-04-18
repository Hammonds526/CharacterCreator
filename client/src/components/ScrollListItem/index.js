import React, { useState, useEffect } from "react";
import "./style.css";
import CheckBox from "../CheckBox";

function ScrollListItem({ spell, i, newCharacter, setActiveSpell, ...props }) {
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxName = spell.name;

  // console.log("Spell List on Scroll list item  ", spellList());

  console.log(
    "newCharacter.spells.includes(spell) ",
    newCharacter.spells.includes(spell.name)
  );

  useEffect(() => {
    // Check if spell is in character state. If so, pass isChecked to the checkbox.
    setIsChecked(newCharacter.spells.includes(spell.name));

    console.log("isChecked ", isChecked);
  });

  return (
    <div key={i} className="d-flex justify-content-between">
      <p
        className="text-bisque"
        onClick={() => {
          console.log("you clicked the name of a spell");
          setActiveSpell(spell);
        }}
      >
        {spell.name}
      </p>
      <CheckBox
        checkboxStyle={{ height: "30px", marginRight: "10px" }}
        spellName={spell.name}
        checked={isChecked}
        {...props}
        checkBoxName={checkBoxName}
      />
    </div>
  );
}

export default ScrollListItem;
