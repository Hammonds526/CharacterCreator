import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SelectButton from "../SelectButton";
import Button from "../Button";

function TabSubclass({
  classIndex,
  subClassIndex,
  newCharacter,
  setNewCharacter,
  character,
}) {
  const [subclassDescription, setSubclassDescription] = useState("");

  // On tab Load, Get the description of the first subClass and put it in state

  useEffect(() => {
    setSubclassDescription(
      character.class[classIndex].subClass[subClassIndex()].desc
    );

    // Also on page load, get the name of the class, grab it's first subclass, and put it in the newCharacter State.
    setNewCharacter({
      ...newCharacter,
      subclass: character.class[classIndex].subClass[0].name.toLowerCase(),
    });
  }, []);

  // console.log("subClassIndex ", subClassIndex());
  // console.log("classIndex ", classIndex);
  // console.log("character from subclass ", character);
  // console.log("props.character.class[classIndex]", character.class[classIndex]);
  // console.log("newCharacter", newCharacter);
  return (
    <div>
      <h4 className="ml-3 text-bisque">Choose a Subclass</h4>
      <div className="row mb-2">
        {character.class[classIndex].subClass.map((item) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
            onClick={() => {
              setSubclassDescription(item.desc);
              setNewCharacter({
                ...newCharacter,
                subclass: item.name.toLowerCase(),
              });
            }}
          >
            <Button text={item.name} />
          </div>
        ))}
      </div>

      <p className="tab_descriptions text-bisque mb-2">{subclassDescription}</p>
      <div className="d-flex justify-content-end">
        <Link to={"/character-creator/spells"}>
          <SelectButton utton text={"Select"} />
        </Link>
      </div>
    </div>
  );
}

export default TabSubclass;
