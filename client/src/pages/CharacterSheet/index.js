// Important React Imports.
import React from "react";
import { useParams } from "react-router-dom";

// CSS
import "./style.css";

// Components
import Corner from "../../components/Corner";
import WoodBeamX from "../../components/WoodBeamX";
import WoodBeamY from "../../components/WoodBeamY";
import Xbtn from "../../components/ButtonClose";

// Main function.
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function CharacterSheet({ myCharacters }) {
    let { id } = useParams();
    //   console.log("newCharacter from Sheet ", newCharacter);
    // The information that is going to be displayed in react.

    return (
        <div className="modal-content-box">
            <div id="divbox" className="container">
                <WoodBeamX beamStyle={{ top: "-2px" }} />

                <WoodBeamY beamStyle={{ right: "64px", top: "9px" }} />
                <WoodBeamY beamStyle={{ left: "64px", top: "9px" }} />

                <Corner
                    cornerStyle={{
                        width: "80px",
                        height: "auto",
                        left: "-16px",
                        top: "-2px",
                    }}
                />
                <Corner
                    cornerStyle={{
                        width: "80px",
                        height: "auto",
                        right: "-16px",
                        top: "-2px",
                        transform: "rotate(90deg)",
                    }}
                />
                {/* This this button below is supposed to close the creator */}
                <Xbtn
                    xBtnStyle={{
                        width: "30px",
                        height: "auto",
                        right: "-14px",
                        top: "2px",
                        zIndex: "2",
                    }}
                    xBtnUrl="/"
                />
                <div>
                    <div id="divbox">
                        <br />
                        <div className="d-flex justify-content-center">
                            <h2>My Character</h2>
                        </div>
                        <br />
                        <div className="row">
                            <br />
                            <div className="col">
                                <div className="col">
                                    <div id="card" className="col-8">
                                        <br />
                                        <div>
                                            <h1>{myCharacters[id].name ? myCharacters[id].name : "No-Name Baggins"}</h1>
                                        </div>
                                        <br />
                                        <div>
                                            <h2>Class: {myCharacters[id].class}</h2>
                                            <br />
                                            <h3>Subclass: {myCharacters[id].subclass}</h3>
                                            <br />
                                            <div>
                                                <h2 id="lvlbox">Level</h2>
                                                <p id="level">{myCharacters[id].level}</p>
                                                <br />
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="col-4">
                                <div id="card">
                                    <div id="listman">
                                        <h2 id="listnames">Spells:</h2>
                                        <p>{myCharacters[id].spells}</p>
                                        <br />
                                        <h2 id="listnames">Feats:</h2>
                                        <p>{myCharacters[id].feats}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                {/* Nothing below here */}
                <WoodBeamX beamStyle={{ bottom: "-3px" }} />
                <Corner
                    cornerStyle={{
                        width: "80px",
                        height: "auto",
                        right: "-16px",
                        bottom: "-4px",
                        transform: "rotate(180deg)",
                    }}
                />
                <Corner
                    cornerStyle={{
                        width: "80px",
                        height: "auto",
                        left: "-16px",
                        bottom: "-4px",
                        transform: "rotate(270deg)",
                    }}
                />
            </div>
        </div>
    );
}

// Good god, this makes me want to die.
export default CharacterSheet;