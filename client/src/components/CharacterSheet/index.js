// Important React Imports.
import axios from "axios";
import { response } from "express";
import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";

// CSS
// import "./style.css";

// Icons
// import Fighter from "../../images/icons/fighter.png";
// import Wizard from "../../images/icons/wizard.png";
// import Ranger from "../../images/icons/ranger.png";
// import Rogue from "../../images/icons/rogue.png";

// Character Sheet Function.
// GetCharacters = () => {
//     axios.get('/api')
//         .then((response) => {
//             let Generatedcharacter = user.characters[0]._id
//             this.setState()
//             console.log('Character data has been recieved!')
//         })
//         .catch(() => {
//             console.log('Error retriving character data')
//         })
// }

function CharacterSheet(props) {
    // let savedCharacter = 

    let { path } = useRouteMatch();
    const [savedCharacter, printCharacter] = useState({

        // user.characters[0]._id
        // store id on button
        
        name: "Grimbo",
        level: 1,
        race: "half-orc",
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
            {/* <p>{item.abilities}</p> */}
            <p>{item.spells}</p>
            <p>{item.abilities}</p>
        </div>
    );
}

export default CharacterSheet;
