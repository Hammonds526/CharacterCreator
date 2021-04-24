// CSS
import "./style.css";


// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

// Main function. 
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function CharacterSheet({ newCharacter }) {
    console.log("newCharacter from Sheet ", newCharacter);
    // The information that is going to be displayed in react.
    return (
        <div className="modal-content-box">
            <h1>Character Sheet</h1>
            <br />
            <div>
                <h2>{newCharacter.name}</h2>
                < div className="modal-content-box">

                    <div className="col">
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
                        <h1>Character Sheet</h1>
                        <br />
                        <div>
                            <h2>{newCharacter.name}</h2>
                            <br />
                            <div>
                                <br />
                                <h2 id="lvlbox">Level : {newCharacter.level}</h2>
                                <h2>{newCharacter.class}</h2>
                                <br />
                            </div>
                            <br />
                            <div>
                                <p>{newCharacter.spells}</p>
                                <br />
                                <p>{newCharacter.feats}</p>
                            </div>
                        </div>
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
                <br />
            </div>
        </div>
    );
}