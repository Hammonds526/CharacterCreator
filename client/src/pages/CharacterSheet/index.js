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
      <br />
      <h1>My Character</h1>
      <br />
      <div className="container">
      <div className="col-6">
        <h2>
          {myCharacters[id].name ? myCharacters[id].name : "No-Name Baggins"}
        </h2>
        <h2>{myCharacters[id].class}</h2>
        <h2>{myCharacters[id].subclass}</h2>
        <br />
        <h2 id="lvlbox">Level : {myCharacters[id].level}</h2>
      </div>
      <br />
      <div className="col-5">
        <p>{myCharacters[id].spells}</p>
        <br />
        <p>{myCharacters[id].feats}</p>
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
  );
}

// Good god, this makes me want to die.
export default CharacterSheet;