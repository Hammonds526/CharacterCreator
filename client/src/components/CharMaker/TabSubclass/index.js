import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import "./style.css";

// components
import SelectButton from "../SelectButton";
import Button from "../../UI/Button";

function TabSubclass({
  classIndex,
  subClassIndex,
  newCharacter,
  setNewCharacter,
  character,
}) {
  const [activeSubclass, setActiveSubclass] = useState("");

  // On tab Load, get the first subClass and put it in state

  useEffect(() => {
    setActiveSubclass(character.class[classIndex].subClass[subClassIndex()]);

    // Also on page load, get the name of the class, grab it's first subclass, and put it in the newCharacter State.
    setNewCharacter({
      ...newCharacter,
      subClass: character.class[classIndex].subClass[0].name.toLowerCase(),
    });
  }, []);

  console.log("activesubclass from tabsubclass ", activeSubclass);

  return (
    <div>
      <h4 className="ml-3 text-bisque">Choose a Subclass</h4>
      <div className="row mb-2">
        {character.class[classIndex].subClass.map((item) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
            onClick={() => {
              setActiveSubclass(item);
              setNewCharacter({
                ...newCharacter,
                subClass: item.name.toLowerCase(),
              });
            }}
          >
            <Button text={item.name} />
          </div>
        ))}
      </div>
      <h3 className="text-bisque mt-3 text-align-left">
        {activeSubclass.name}
      </h3>

      <p className="tab_descriptions text-bisque mb-2">{activeSubclass.desc}</p>
      <div className="d-flex justify-content-end">
        <Link to={"/character-creator/spells"}>
          <SelectButton text={"Continue"} />
        </Link>
      </div>
    </div>
  );
}

export default TabSubclass;
