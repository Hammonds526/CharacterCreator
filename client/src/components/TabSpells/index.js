import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SelectButton from "../SelectButton";
import ScrollList from "../ScrollList";
import SpellLimiter from "../SpellLimiter";
import MyCharacters from "../MyCharacters";

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
  const [spells, setSpells] = useState({
    totalCantripsAvailable: 0,
    totalCantripsSelected: 0,
    totalSpellsAvailable: 0,
    totalSpellsSelected: 0,
  });

  useEffect(() => {
    //Grab the corresponding data object for the selected class and store it in activeClass
    const levelIndex = newCharacter.level - 1;
    const activeClass = props.character.class.find((item) => {
      if (item.name.toLowerCase() === newCharacter.class) {
        return true;
      }
    });

    const localSpells = { ...spells };
    // If this class has spells or cantrips, add put the max available at this level in state
    if (activeClass.spellsKnown) {
      localSpells.totalSpellsAvailable = activeClass.spellsKnown[levelIndex];
    }
    if (activeClass.cantripsKnown) {
      localSpells.totalCantripsAvailable =
        activeClass.cantripsKnown[levelIndex];
    }
    setSpells(localSpells);
    //When the tab loads, make the page display the first spell in the list of filtered spells.
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
    // Count how many spells are selected, and update the spell limiter

    localSpells.totalCantripsSelected = newCharacter.cantrips.length;
    localSpells.totalSpellsSelected = newCharacter.spells.length;

    setSpells(localSpells);
  }, [newCharacter]);

  // When a checkbox is clicked, if the corresponing spell is not in myCharacter, add it. If it is, remove it.
  const checkboxOnClick = (event, level) => {
    const localNewCharacter = { ...newCharacter };
    // If newCharacter already has the spell, remove it
    if (level >= 1) {
      if (newCharacter.spells.includes(event.target.name)) {
        const localCharacterSpells = localNewCharacter.spells.filter((item) => {
          if (item !== event.target.name) {
            return true;
          }
        });
        localNewCharacter.spells = localCharacterSpells;
        setNewCharacter(localNewCharacter);
        //If newCharacter doesn't have the spell in it, add it.
      } else if (newCharacter.spells.length < spells.totalSpellsAvailable) {
        localNewCharacter.spells.push(event.target.name);
        setNewCharacter(localNewCharacter);
      }
    } else {
      // If newCharacter already has the cantrip in it, remove it
      if (newCharacter.cantrips.includes(event.target.name)) {
        const localCharacterCantrips = localNewCharacter.cantrips.filter(
          (item) => {
            if (item !== event.target.name) {
              return true;
            }
          }
        );
        localNewCharacter.cantrips = localCharacterCantrips;
        setNewCharacter(localNewCharacter);
        //Else add the Cantrip
      } else if (newCharacter.cantrips.length < spells.totalCantripsAvailable) {
        localNewCharacter.cantrips.push(event.target.name);
        setNewCharacter(localNewCharacter);
      }
    }
  };

  return (
    <div>
      <h2 className="  text-bisque">Choose your Spells</h2>
      <div className="row mb-2">
        <div className="col-12 col-lg-4">
          <SpellLimiter
            spells={spells}
            setSpells={setSpells}
            activeSpell={activeSpell}
            newCharacter={newCharacter}
            {...props}
          />
          <ScrollList
            list={getFilteredSpells}
            setActive={setActiveSpell}
            checkboxOnClick={checkboxOnClick}
            newCharacter={newCharacter}
            setNewCharacter={setNewCharacter}
            {...props}
            scrollListStyle={{ maxHeight: "450px" }}
            itemType={"spell"}
          />
        </div>
        <div className="col-12 col-lg-8">
          <h3 className="text-bisque mt-3 text-align-left">
            {activeSpell.name}
          </h3>
          <p className="tab_descriptions text-bisque mt-3">
            {activeSpell.description.desc.split("<br />").map((str, i) => (
              <span key={i}>{str}</span>
            ))}
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={"/character-creator/feats"}>
          <SelectButton utton text={"Continue"} />
        </Link>
      </div>
    </div>
  );
}

export default TabSpells;
