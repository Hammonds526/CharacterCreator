// Important React Imports.
import axios from "axios";
import { response } from "express";
import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";

// CSS
import "./style.css";

/*
mycharacters pull from index array 

 user.characters[0]._id
*/
function CharacterSheet(props) {
    // let savedCharacter = 

    // The information that is going to be displayed in react.
    return (
        <div className="modal-content-box">
            <h1>Character Sheet</h1>
            <br />
            <h2>{newCharacter.name}</h2>
            <h2 id="lvlbox">{newCharacter.level}</h2>
            <h2>{newCharacter.class}</h2>
            {/* <p>{item.abilities}</p> */}
            <p>{newCharacter.spells}</p>
            <p>{newCharacter.abilities}</p>
        </div>
    );
}

// Good god, this makes me want to die.
export default CharacterSheet;
