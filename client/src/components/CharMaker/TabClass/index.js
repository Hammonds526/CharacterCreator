import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SelectButton from "../SelectButton";
import Button from "../../UI/Button";

function TabClass(props) {
  const [activeClass, setActiveClass] = useState("");

  // Get the the first class and put it in state
  useEffect(() => {
    const currentClass = props.character.class.find((item) => {
      if (item.name.toLowerCase() === props.newCharacter.class) {
        return true;
      }
    });
    setActiveClass(currentClass);
  }, []);

  return (
    <div>
      <h4 className="text-bisque ml-3">Wish to change Class?</h4>
      <div className="row mb-2">
        {props.character.class.map((item, i) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
          >
            <div
              onClick={() => {
                setActiveClass(item);
                const localNewCharacter = { ...props.newCharacter };
                localNewCharacter.class = item.name.toLowerCase();
                localNewCharacter.cantrips = [];
                localNewCharacter.spells = [];
                props.setNewCharacter(localNewCharacter);
              }}
            >
              <Button text={item.name} />
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-bisque mt-3 text-align-left">{activeClass.name}</h3>
      <p className="tab_descriptions text-bisque mb-2">{activeClass.desc}</p>
      <div className="d-flex justify-content-end">
        <Link to={"/character-creator/subclass"}>
          <SelectButton text={"Continue"} />
        </Link>
      </div>
    </div>
  );
}

export default TabClass;
