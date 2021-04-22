// Important React Imports.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import "./style.css";

/*
mycharacters pull from index array 

 user.characters[0]._id
*/

// F*k it. I'll just use the temp storage character.
function CharacterSheet({ newCharacter }) {
    // let Characterdesc = Legend;
    // let Legend = "";
    // if (newCharacter.class == "Commoner") {
    //     let Legend = "I sense great power in this one..."
    // } else {
    //     let Legend = newCharacter.subclass;
    // };

    console.log("newCharacter from Sheet ", newCharacter);
    // The information that is going to be displayed in react.
    return (
        <div className="modal-content-box">
            <h1>Character Sheet</h1>
            <br />
            <h2>{newCharacter.name}</h2>
            <h2 id="lvlbox">{newCharacter.level}</h2>
            <h2>{newCharacter.class}</h2>
            <br />
            {/* <h2>{Legend}</h2> */}
            <p>{newCharacter.spells}</p>
            <p>{newCharacter.feats}</p>
        </div>
    );
}

// Good god, this makes me want to die.
export default CharacterSheet;
