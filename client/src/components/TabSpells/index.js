import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SelectButton from "../SelectButton";
import ScrollList from "../ScrollList";

function TabSpells({
  getFilteredSpells,
  newCharacter,
  setNewCharacter,
  ...props
}) {
  const [activeSpell, setActiveSpell] = useState({
    name: "No spells available",
    description: {
      desc: "No spells available for this class/level combo.",
    },
  });

  //Get the list of spells that the user has selelcted and pass it down to show checkboxes
  const activeList = (item) => {
    console.log("item from inside spell ActiveList ", item);
    newCharacter.spells.includes(item.name);
  };

  //When the tab loads, make the page display the first spell in the list of filtered spells.
  useEffect(() => {
    setActiveSpell(
      getFilteredSpells().length > 0
        ? getFilteredSpells()[0]
        : {
            name: "No spells available",
            description: {
              desc: "No spells available for this class/level combo.",
            },
          }
    );
  }, []);

  // When a checkbox is clicked, if the corresponing spell is not in myCharacter, add it. If it is, remove it.
  const checkboxOnClick = (event) => {
    const localNewCharacter = { ...newCharacter };
    if (newCharacter.spells.includes(event.target.name)) {
      const localCharacterSpells = localNewCharacter.spells.filter((item) => {
        if (item !== event.target.name) {
          return true;
        }
      });
      localNewCharacter.spells = localCharacterSpells;
      setNewCharacter(localNewCharacter);
    } else {
      localNewCharacter.spells.push(event.target.name);
      setNewCharacter(localNewCharacter);
    }
  };

  console.log("spell list ", getFilteredSpells());

  return (
    <div>
      <h2 className=" ml-3 text-bisque">Choose your Spells</h2>
      <div className="row mb-2">
        <div className="col-4">
          <ScrollList
            list={getFilteredSpells}
            setActive={setActiveSpell}
            checkboxOnClick={checkboxOnClick}
            newCharacter={newCharacter}
            setNewCharacter={setNewCharacter}
            {...props}
            scrollListStyle={{ maxHeight: "400px" }}
            activeList={activeList}
          />
        </div>
        <div className="col-8">
          <h3 className="text-bisque mt-3 text-align-left">
            {activeSpell.name}
          </h3>
          <p className="tab_descriptions text-bisque mt-3">
            {activeSpell.description.desc}
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={"/character-creator/feats"}>
          <SelectButton utton text={"Select"} />
        </Link>
      </div>
    </div>
  );
}

export default TabSpells;
