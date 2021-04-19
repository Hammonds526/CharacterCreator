// Important React Imports.
import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";

// CSS
// import "./style.css";

// Components.

// Character Sheet Function.
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
