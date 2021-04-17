import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SelectButton from "../SelectButton";
import LevelSelector from "../LevelSelecter";
import Button from "../Button";

function TabSubclass(props) {
  const [subclassDescription, setSubclassDescription] = useState("");
  let classIndex = props.character.class.findIndex(
    (element) => element.name.toLowerCase() === props.newCharacter.class
  );

  // On tab Load, Get the description of the first subClass and put it in state

  useEffect(() => {
    setSubclassDescription(props.character.class[classIndex].subClass[0].desc);

    // Also on page load, get the name of the class, grab it's first subclass, and put it in the newCharacter State.
    props.setNewCharacter({
      ...props.newCharacter,
      subclass: props.character.class[
        classIndex
      ].subClass[0].name.toLowerCase(),
    });
  }, []);

  console.log("classIndex ", classIndex);
  console.log(
    "props.character.class[classIndex]",
    props.character.class[classIndex]
  );
  console.log("newCharacter", props.newCharacter);
  return (
    <div>
      <h4 className="ml-3 text-bisque">Choose a Subclass</h4>
      <div className="row mb-2">
        {props.character.class[classIndex].subClass.map((item) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
            onClick={() => {
              setSubclassDescription(item.desc);
              props.setNewCharacter({
                ...props.newCharacter,
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
