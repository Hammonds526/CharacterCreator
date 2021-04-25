// Important React Imports.
import React from "react";
import { useParams } from "react-router-dom";

// CSS
import "./style.css";

// Main function.
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function CharacterSheet({ newCharacter }) {
  let { id } = useParams();
  //   console.log("newCharacter from Sheet ", newCharacter);
  // The information that is going to be displayed in react.
  return (
    <div className="modal-content-box">
      <h1>Character Sheet</h1>
      <br />
      <div>
        <h2>{newCharacter.name}</h2>
        <br />
        <h2 id="lvlbox">Level : {newCharacter.level}</h2>
        <h2>{newCharacter.class}</h2>
      </div>
      <br />
      <div>
        <p>{newCharacter.spells}</p>
        <br />
        <p>{newCharacter.feats}</p>
      </div>
      <br />
    </div>
  );
}

// Good god, this makes me want to die.
export default CharacterSheet;
