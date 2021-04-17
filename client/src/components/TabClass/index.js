import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SelectButton from "../SelectButton";
import Button from "../Button";

function TabClass(props) {
  const [classDescription, setClassDescription] = useState("");

  // Get the description of the first class and put it in state
  useEffect(() => {
    setClassDescription(props.character.class[0].desc);
    // Also on page load, get the first class and put it in the newCharacter State. This will change as the user selects other classes.
    // props.setNewCharacter({
    //   ...props.newCharacter,
    //   class: props.character.class[0].name.toLowerCase(),
    // });
  }, []);
  console.log("newCharacter", props.newCharacter);
  return (
    <div>
      <h4 className="text-bisque ml-3">Choose a Class</h4>
      <div className="row mb-2">
        {props.character.class.map((item, i) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
          >
            <div
              onClick={() => {
                setClassDescription(item.desc);
                props.setNewCharacter({
                  ...props.newCharacter,
                  class: item.name.toLowerCase(),
                });
              }}
            >
              <Button text={item.name} />
            </div>
          </div>
        ))}
      </div>

      <p className="tab_descriptions text-bisque mb-2">{classDescription}</p>
      <div className="d-flex justify-content-end">
        <Link to={"/character-creator/subclass"}>
          <SelectButton text={"Select"} />
        </Link>
      </div>
    </div>
  );
}

export default TabClass;
