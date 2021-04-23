import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SelectButton from "../SelectButton";
import Button from "../Button";

function TabRace(props) {
  const [activeRace, setActiveRace] = useState("");

  // On Page Load, Get the first race description and put it in state
  useEffect(() => {
    setActiveRace(props.character.race[0]);
  }, []);

  return (
    <div>
      <h4 className=" ml-3 text-bisque">Choose a Race</h4>
      <div className="row mb-2">
        {props.character.race.map((item, i) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
          >
            <div
              onClick={() => {
                setActiveRace(item);
                props.setNewCharacter({
                  ...props.newCharacter,
                  race: item.name.toLowerCase(),
                });
              }}
            >
              <Button text={item.name} />
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-bisque mt-3 text-align-left">{activeRace.name}</h3>

      <p className="tab_descriptions text-bisque mb-2">
        {activeRace.description}
      </p>
      <div className="d-flex justify-content-end">
        <Link to={"/character-creator/class"}>
          <SelectButton text={"Continue"} />
        </Link>
      </div>
    </div>
  );
}

export default TabRace;
