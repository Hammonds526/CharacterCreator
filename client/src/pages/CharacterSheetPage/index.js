// import AvatarContainer from "../../components/AvatarContainer"
// CSS
// import "../styles.css";

// Pixel border stuff

// Wood border
import Corner from "../../components/Corner";
import WoodBeamX from "../../components/WoodBeamX";
import WoodBeamY from "../../components/WoodBeamY";

// Stone Border
<<<<<<< HEAD
import Corner2 from "../../components/Corner2"
import StonebeamX from "../../components/StonebeamX";
import StonebeamY from "../../components/StonebeamY";
=======
>>>>>>> parent of 6ffa2ab (Update index.js)

// Main function. 
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function CharacterSheetPage({ newCharacter }) {
    console.log("newCharacter from Sheet ", newCharacter);
    // The information that is going to be displayed in react.
    return (
        <div className="modal-content-box">
            <h1>Character Sheet</h1>
            <br />
            <div>
                <h2>{newCharacter.name}</h2>
                < div className="modal-content-box">
                    <br />
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
                        <div id="divbox">
                            <br />
                            <h1>My Character</h1>
                            <br />
                            <div className="col-12">
                                <div className="col-7">
<<<<<<< HEAD
                                    <h2 id="character-name">{myCharacters[id].name ? myCharacters[id].name : "No-Name Baggins"}</h2>
                                    <h2>{myCharacters[id].race}</h2>
=======
                                <h2 id="character-name">{newCharacter.name}</h2>
>>>>>>> parent of 6ffa2ab (Update index.js)
                                    <br />
                                    <h2>{myCharacters[id].class}</h2>
                                    <h2>{myCharacters[id].subclass}</h2>
                                    <br />
                                    <h3>{newCharacter.subclass.charAt(0).toUpperCase() + newCharacter.subclass.slice(1)}</h3>
                                    <br />
                                    <div>
<<<<<<< HEAD
                                        <h2 id="lvlbox">Level : {myCharacters[id].level}</h2>
=======
                                        <h2>Level :</h2>
                                    <h2 id="lvlbox">{newCharacter.level}</h2>
>>>>>>> parent of 6ffa2ab (Update index.js)
                                    </div>
                                    {/* < AvatarContainer /> */}
                                    <br />
                                </div>
                                <div className="col-5">
<<<<<<< HEAD
                                    {/* <StonebeamX beamStyle={{ top: "-2px" }} />

                                    <StonebeamY beamStyle={{ right: "10px", top: "9px" }} />
                                    <StonebeamY beamStyle={{ left: "10px", top: "9px" }} />

                                    <Corner2
                                        cornerStyle={{
                                            width: "80px",
                                            height: "auto",
                                            left: "-5px",
                                            top: "-2px",
                                        }}
                                    />
                                    <Corner2
                                        cornerStyle={{
                                            width: "80px",
                                            height: "auto",
                                            right: "-4px",
                                            top: "-2px",
                                            transform: "rotate(90deg)",
                                        }}
                                    /> */}
                                    <p>{myCharacters[id].spells}</p>
                                    <br />
                                    <p>{myCharacters[id].feats}</p>
                                    {/* <StonebeamX beamStyle={{ bottom: "-3px" }} />
                        <Corner2
                            cornerStyle={{
                                width: "80px",
                                height: "auto",
                                right: "-4px",
                                bottom: "-4px",
                                transform: "rotate(180deg)",
                            }}
                        />
                        <Corner2
                            cornerStyle={{
                                width: "80px",
                                height: "auto",
                                left: "-4px",
                                bottom: "-4px",
                                transform: "rotate(270deg)",
                            }}
                        /> */}
=======
                                    <p>{newCharacter.spells}</p>
                                    <br />
                                    <p>{newCharacter.feats}</p>
>>>>>>> parent of 6ffa2ab (Update index.js)
                                </div>
                            </div>
                        </div>
                        {/* Nothing below here */}
                        <WoodBeamX beamStyle={{ bottom: "-3px" }} />
                        <Corner
                            cornerStyle={{
                                width: "80px",
                                height: "auto",
                                right: "-4px",
                                bottom: "-4px",
                                transform: "rotate(180deg)",
                            }}
                        />
                        <Corner
                            cornerStyle={{
                                width: "80px",
                                height: "auto",
                                left: "-4px",
                                bottom: "-4px",
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

export default CharacterSheetPage;