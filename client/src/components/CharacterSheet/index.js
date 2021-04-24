// Important React Imports.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import "./style.css";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";
import AvatarContainer from "../AvatarContainer";

// Main function. 
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function CharacterSheet({ newCharacter }) {

    console.log("newCharacter from Sheet ", newCharacter);
    // The information that is going to be displayed in react.
    return (
        < div className="modal-content-box">

            <div id="divbox" className="col">
                <WoodBeamX beamStyle={{ top: "-2px" }} />

                <WoodBeamY beamStyle={{ right: "10px", top: "9px" }} />
                <WoodBeamY beamStyle={{ left: "10px", top: "9px" }} />

                <Corner
                    cornerStyle={{
                        width: "80px",
                        height: "auto",
                        left: "-5px",
                        top: "-2px",
                    }}
                />
                <Corner
                    cornerStyle={{
                        width: "80px",
                        height: "auto",
                        right: "-4px",
                        top: "-2px",
                        transform: "rotate(90deg)",
                    }}
                />
                {/* This this button below is supposed to close the creator */}
                <br />
                <h1>Character Sheet</h1>
                <br />
                <h2 id="character-name">{newCharacter.name}</h2>
                <br />
                <div id="card" className="col-6">
                    <div>
                        <br />
                        <h3 id="lvlbox">Level : {newCharacter.level}</h3>
                        <h3>{newCharacter.class}</h3>
                        <h4 id="subclass">{newCharacter.subclass}</h4>
                    </div>
                </div>
                <br />
                <div className="col-6">
                    <div>
                        <p>{newCharacter.spells}</p>
                        <br />
                        <p>{newCharacter.feats}</p>
                    </div>
                </div>
                <br />
                {/* Nothing below here */}
                <WoodBeamX beamStyle={{ bottom: "-10px" }} />
                <Corner
                    cornerStyle={{
                        width: "80px",
                        height: "auto",
                        right: "-4px",
                        bottom: "-10px",
                        transform: "rotate(180deg)",
                    }}
                />
                <Corner
                    cornerStyle={{
                        width: "80px",
                        height: "auto",
                        left: "-4px",
                        bottom: "-10px",
                        transform: "rotate(270deg)",
                    }}
                />
            </div>
        </div>
    );
}

// Good god, this makes me want to die.
export default CharacterSheet;
