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
        // This Array will be what we shall be using to properly display information into our sheet.
        
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

    let classIndex = props.character.class.findIndex(
        (element) => element.name.toLowerCase() === newCharacter.class
    );

    const getSubClassIndex = () => {
        const subClassIndex = props.character.class[classIndex].subClass.findIndex(
            (element) => element.name.toLowerCase() === newCharacter.subclass
        );
        if (subClassIndex === -1) {
            return 0;
        } else {
            return subClassIndex;
        }
    };

    //   Console logs information.
    console.log("class index main ", classIndex);
    console.log("subClass index main ", getSubClassIndex);
    console.log("character from main ", props.character);

    return (
        <div className="modal-content-box">
            <div className="character-sheet-screen mx-auto bg-transparent container mt-5">
                <div className="row text-white">
                    <div
                        id="stonebg"
                        className="col-10 col-lg-3 order-lg-2 mb-2 p-0 px-lg-2 d-flex justify-content-center"
                    >
                        {/* Character sheet information goes here! */}



                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterSheet;
