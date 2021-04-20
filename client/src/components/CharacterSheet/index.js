// Important React Imports.
import axios from "axios";
import { response } from "express";
import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";

// CSS
// import "./style.css";

// Icons
import Fighter from "../../images/icons/fighter.png";
import Wizard from "../../images/icons/wizard.png";
import Ranger from "../../images/icons/ranger.png";
import Rogue from "../../images/icons/rogue.png";


// Components.

// Character Sheet Function.
ComponentDidMount = () => {
    this.GetCharacters();
};

GetCharacters = () => {
    axios.get('/api')
        .then((response) => {
            let Generatedcharacter = response.data;
            this.setState()
            console.log('Character data has been recieved!')
        })
        .catch(() => {
            console.log('Error retriving character data')
        })
}

function CharacterSheet(props) {
let savedCharacter = 

    let { path } = useRouteMatch();
    const [savedCharacter, printCharacter] = useState({

        name: "Cheese",
        level: 1,
        race: "dwarf",
        class: "fighter",
        subclass: "champion",
        abilities: [],
        spells: [],
        feats: [],
        userId: null,

    });

    // Sets icon for sheet.
    // if (item.class = "fighter") {
    //     let Classicon = Fighter;
    // } else if (item.class = "wizard") {
    //     let Classicon = Wizard;
    // } else if (item.class = "ranger") {
    //     let Classicon = Ranger;
    // } else (item.class = "rogue") {
    //     let Classicon = Rogue;
    // };

    // The information that is going to be displayed in react.
    return (
        <div className="modal-content-box">
            <h1>Character Sheet</h1>
            <br />
            <h2>{item.name}</h2>
            <h2 id="lvlbox">{item.level}</h2>
            <h2>{item.class}</h2>
        </div>
    );
}

export default CharacterSheet;
