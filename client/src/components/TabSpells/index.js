import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SelectButton from "../SelectButton";
import LevelSelector from "../LevelSelecter";
import Button from "../Button";

function TabSpells({ spellList, character }) {
  const [spellDescription, setSpellDescription] = useState("");

  // On tab load, get the name of the subclass, grab it's first associated spell, and put it in the newCharacter State.
  // useEffect(() => {
  //   setSpellDescription(
  //     character.class[classIndex].subClass[subClassIndex()].desc
  //   );

  //   setNewCharacter({
  //     ...newCharacter,
  //     subclass: character.class[classIndex].subClass[
  //       subClassIndex
  //     ].name.toLowerCase(),
  //   });
  // }, []);
  return (
    <div>
      <h4 className=" ml-3 text-bisque">Choose your Spells</h4>
      <div className="row mb-2">
        {spellList.map((item) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
          >
            <Button text={item.name} />
          </div>
        ))}
      </div>

      <p className="tab_descriptions text-bisque mb-2">{spellDescription}</p>
      <div className="d-flex justify-content-end">
        <Link to={"/character-creator/feats"}>
          <SelectButton utton text={"Select"} />
        </Link>
      </div>
    </div>
  );
}

export default TabSpells;
