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
    let [newCharacter] = useState({
        name: item.name,
        level: item.level,
        race: item.race,
        class: item.class,
        subclass: item.subclass,
        abilities: [],
        spells: [],
        feats: [],
        userId: 0,
      });

    // The information that is going to be displayed in react.
    return (
        <div className="modal-content-box">
            <h1>Character Sheet</h1>
            <br />
            <h2>{item.name}</h2>
            <h2 id="lvlbox">{item.level}</h2>
            <h2>{item.class}</h2>
            {/* <p>{item.abilities}</p> */}
            <p>{item.spells}</p>
            <p>{item.abilities}</p>
        </div>
    );
}

// Good god, this makes me want to die.
export default CharacterSheet;
