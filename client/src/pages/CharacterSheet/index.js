// Important React Imports.
import React from "react";
import { useParams } from "react-router-dom";

// CSS
import "./style.css";

// Wood border
import Corner from "../../components/Corner";
import WoodBeamX from "../../components/WoodBeamX";
import WoodBeamY from "../../components/WoodBeamY";


// Close btn
import Xbtn from "../../components/ButtonClose";

// Main function.
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function CharacterSheet({ myCharacters }) {
  let { id } = useParams();
  //   console.log("newCharacter from Sheet ", newCharacter);
  // The information that is going to be displayed in react.

  return (
    <div className="modal-content-box">
      <h1>Character Sheet</h1>
      <div>
        <br />
        <div>
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
                    <h2>{myCharacters[id].race}</h2>
                    <br />
                    <h2>{myCharacters[id].class}</h2>
                    <h2>{myCharacters[id].subclass}</h2>
                    <br />
                    <br />
                    <div>
                      <h2 id="lvlbox">Level : {myCharacters[id].level}</h2>
                    </div>
                    {/* < AvatarContainer /> */}
                    <br />
                  </div>
                  <div className="col-5">
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
    </div>
  );
}

// Good god, this makes me want to die.
export default CharacterSheet;
