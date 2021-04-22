import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import "./style.css";
import CharacterProgressBar from "../CharacterProgressBar";
import CharInfoBox from "../CharInfoBox";
import AvatarContainer from "../AvatarContainer";
// import AbilityFeatSpell from "../AbilityFeatSpell";

function CharacterMakerScreen(props) {
  let { path } = useRouteMatch();
  const [newCharacter, setNewCharacter] = useState({
    name: "No-name Baggins",
    level: "1",
    race: "dwarf",
    class: "Commoner",
    subclass: "",
    spells: [],
    feats: [],
    userId: null,
  });

  let classIndex = props.character.class.findIndex(
    (element) => element.name.toLowerCase() === newCharacter.class
  );

  const getSubClassIndex = () => {
    const subClassIndex = props.character.class[classIndex].subClass.findIndex(
      (element) => element.name.toLowerCase() === newCharacter.subclass
    );
    if (subClassIndex === -1) {
      return 0;
    } else {
      return subClassIndex;
    }
  };

  //Returns a filtered list of spells based on class and level
  const getFilteredSpells = () => {
    let filteredSpells = props.character.spells.filter(
      (spell) =>
        spell.level <= newCharacter.level && spell.tag === newCharacter.class
    );
    return filteredSpells;
  };

  // TODO make this actually filter feats, isntead of just returning all. Need to check with Garth on this.
  const getFilteredFeats = () => {
    return props.character.feats;
  };

  console.log("Current newCharacter:", newCharacter);
  // console.log("filteredSpells ", getFilteredSpells());

  // console.log("class index main ", classIndex);
  // console.log("subClass index main ", getSubClassIndex());

  // console.log("character from main ", props.character);

  return (
    <div className="modal-content-box">
      <div className="character-maker-screen mx-auto bg-transparent container mt-5">
        <div className="row text-white">
          <div
            id="stonebg"
            className="col-10 col-lg-3 order-lg-2 mb-2 p-0 px-lg-2 d-flex justify-content-center"
          >
            {/* Swirly avatar portrait, be careful with this. */}
            <AvatarContainer />

            {/* Left side bar below */}
          </div>
          <div className="col-12 col-lg-9 order-lg-1 p-0">
            <CharacterProgressBar />
            <div className="row">
              <Route path={`${path}/:tabId`}>
                <div className="col">
                  <CharInfoBox
                    {...props}
                    setNewCharacter={setNewCharacter}
                    newCharacter={newCharacter}
                    classIndex={classIndex}
                    subClassIndex={getSubClassIndex}
                    getFilteredSpells={getFilteredSpells}
                    getFilteredFeats={getFilteredFeats}
                  />
                </div>
              </Route>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterMakerScreen;
