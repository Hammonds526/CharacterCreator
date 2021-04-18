// Core dependancies
import React from "react";
import "./Style.css";

// Character List
function CharacterList(props) {

    const [myCharacters] = useState([
        {
            Name: "John",
            Level: 12,
            CharClass: "Wizard",
        },
        {
            Name: "Sally",
            Level: 1,
            CharClass: "Ranger",
        },
        {
            Name: "Chuck Norris",
            Level: 25,
            CharClass: "Fighter",
        },
        {
            Name: "Alexander",
            Level: 10,
            CharClass: "Rogue",
        },
    ]);
}

export default CharacterList