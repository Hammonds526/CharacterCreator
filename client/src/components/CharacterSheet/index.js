// Important React Imports.
import axios from "axios";
import { response } from "express";
import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";

// CSS
// import "./style.css";

// Components.

// Character Sheet Function.
ComponentDidMount = () => {
    this.GetCharacters();
};

GetCharacters= () => {
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

    let { path } = useRouteMatch();
    const [savedCharacter, setNewSheet] = useState({

        name: "",
        level: 1,
        race: "dwarf",
        class: "fighter",
        subclass: "champion",
        abilities: [],
        spells: [],
        feats: [],
        userId: null,

    });

    return (
        <div className="modal-content-box">

        </div>
    );
}

export default CharacterSheet;
