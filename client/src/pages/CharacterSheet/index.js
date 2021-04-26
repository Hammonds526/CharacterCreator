import React from "react"

// CSS
import "./style.css";

// Pixel border stuff

// Wood border
import Corner from "../../components/Corner";
import WoodBeamX from "../../components/WoodBeamX";
import WoodBeamY from "../../components/WoodBeamY";
import Xbtn from "../../components/ButtonClose";

// Main function. 
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function CharacterSheetPage({ myCharacters }) {
    // let { id } = useParams();
    // The information that is going to be displayed in react.
    return (
        <div className="modal-content-box">
            <Xbtn
                xBtnStyle={{
                    width: "30px",
                    height: "auto",
                    right: "9px",
                    top: "6px",
                    zIndex: "2",
                }}
                xBtnUrl="/"
            />
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
                                <h2 id="character-name">{myCharacters[id].name ? myCharacters[id].name : "No-Name Baggins"}</h2>
                                <br />
                                <h2>{myCharacters[id].class}</h2>
                                <br />
                                <h2>{myCharacters[id].subclass}</h2>
                                <br />
                                <div>
                                    <h2 id="lvlbox">Level : {myCharacters[id].level}</h2>
                                </div>
                                {/* < AvatarContainer /> */}
                                <br />
                            </div>
                            <div className="col-5">
                                <p>{myCharacters[id].spells}</p>
                                <br />
                                <p>{myCharacters[id].feats}</p>
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
        </div>
    );
}

export default CharacterSheetPage;