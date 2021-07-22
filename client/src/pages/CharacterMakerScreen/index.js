// Core imports
import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
// import AbilityFeatSpell from "../AbilityFeatSpell";

// CSS
import "./style.css";

// Components
import CharacterProgressBar from "../../components/CharacterProgressBar";
import CharMakerContainer from "../../components/CharMakerContainer";
import AvatarContainer from "../../components/AvatarContainer";
// import AbilityFeatSpell from "../AbilityFeatSpell";

const CharacterMakerScreen = (props) => {
  let { path } = useRouteMatch();

  let classIndex = props.character.class.findIndex(
    (element) => element.name.toLowerCase() === props.newCharacter.class
  );

  const getSubClassIndex = () => {
    const subClassIndex = props.character.class[classIndex].subClass.findIndex(
      (element) => element.name.toLowerCase() === props.newCharacter.subclass
    );
    if (subClassIndex === -1) {
      return 0;
    } else {
      return subClassIndex;
    }
  };

  //Returns a filtered list of spells based on class and level.
  //If there are any spells in newCharacter that aren't in the filtered list, they are removde from newCharacter
  const getFilteredSpells = () => {
    let filteredSpells = props.character.spells.filter(
      (spell) =>
        spell.level <= props.newCharacter.level &&
        spell.tag === props.newCharacter.class
    );
    filteredSpells = filteredSpells.sort((a, b) => {
      if (a.level < b.level) {
        return -1;
      }
      if (a.level > b.level) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    return filteredSpells;
  };

  const getFeats = () => {
    return props.character.feats;
  };

  return (
    <div className="modal__blury-backround">
      <div className="character-maker-screen mx-auto bg-transparent container mt-5">
        <div className="row">
          <div
            id="stonebg"
            className="col-10 col-lg-3 order-lg-2 mb-2 p-0 px-lg-2 d-flex justify-content-center"
          >
            {/* Swirly avatar portrait, be careful with this. */}
            <AvatarContainer {...props} />

            {/* Left side bar below */}
          </div>
          <div className="col-12 col-lg-9 order-lg-1 p-0">
            <CharacterProgressBar />
            <div className="row">
              <Route path={`${path}/:tabId`}>
                <div className="col">
                  <CharMakerContainer
                    {...props}
                    classIndex={classIndex}
                    subClassIndex={getSubClassIndex}
                    getFilteredSpells={getFilteredSpells}
                    getFeats={getFeats}
                  />
                </div>
              </Route>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterMakerScreen;
