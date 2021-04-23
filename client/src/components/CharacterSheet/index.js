// Important React Imports.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import "./style.css";


// Main function. 

 //  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
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
            <br />
            <p>{newCharacter.spells}</p>
            <p>{newCharacter.feats}</p>
            <br />
        </div>
    );
}

// Good god, this makes me want to die.
export default CharacterSheet;
