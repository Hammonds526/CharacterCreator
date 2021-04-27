// Important React Imports.
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// CSS
import "./style.css";

// Components
import Corner from "../../components/Corner";
import WoodBeamX from "../../components/WoodBeamX";
import WoodBeamY from "../../components/WoodBeamY";
import Xbtn from "../../components/ButtonClose";
import Listings from "../../components/Listings";

// Icons
import NoIcon from "../../images/icons/empty_frame.png";
import FighterIcon from "../../images/icons/fighter.png";
import RangerIcon from "../../images/icons/ranger.png";
import RogueIcon from "../../images/icons/rogue.png";
import WizardIcon from "../../images/icons/wizard.png";

// Avatar & outfits
import DefaultCostume from "../../images/costumes/base.png";
import RangerCostume from "../../images/costumes/ranger.png";
import FighterCostume from "../../images/costumes/fighter.png";
import RogueCostume from "../../images/costumes/rogue.png";
import WizardCostume from "../../images/costumes/wizard.png";

// Frame
import Frame from "../../images/char_card_frame3.png";

// Main function.
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function CharacterSheet({ myCharacters }) {
  let { id } = useParams();

  const [AvatarCostume, setAvatarCostume] = useState(DefaultCostume);

  useEffect(() => {
    switch (myCharacters[id].class) {
      // Fighter
      case "Fighter":
      case "fighter":
        setAvatarCostume(FighterCostume);
        break;

      // Ranger
      case "Ranger":
      case "ranger":
        setAvatarCostume(RangerCostume);
        break;

      // Rogue
      case "Rogue":
      case "rogue":
        setAvatarCostume(RogueCostume);
        break;

      // Wizard
      case "Wizard":
      case "wizard":
        setAvatarCostume(WizardCostume);
        break;

      default:
        setAvatarCostume(DefaultCostume);
        break;
    }
  }, [myCharacters[id].class]);

  // Dynamic icon
  let [ClassIcon, setClassIcon] = useState(NoIcon);

  useEffect(() => {
    switch (myCharacters[id].class) {
      // Fighter
      case "fighter":
      case "Fighter":
        setClassIcon(FighterIcon);
        break;

      // Ranger
      case "ranger":
      case "Ranger":
        setClassIcon(RangerIcon);
        break;

      // Rogue
      case "rogue":
      case "Rogue":
        setClassIcon(RogueIcon);
        break;

      // Wizard
      case "wizard":
      case "Wizard":
        setClassIcon(WizardIcon);
        break;

      default:
        setClassIcon(NoIcon);
        break;
    }
  }, [myCharacters[id].class]);

  // The information that is going to be displayed in react.
  return (
    <div className="modal-content-box justify-content-center pt-2">
      <div id="divbox" className="container">
        <WoodBeamX beamStyle={{ top: "-5px" }} />

        <WoodBeamY beamStyle={{ right: "-10px", top: "0px" }} />
        <WoodBeamY beamStyle={{ left: "-10px", top: "0px" }} />

        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "-16px",
            top: "-5px",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "-16px",
            top: "-5px",
            transform: "rotate(90deg)",
          }}
        />
        {/* This this button below is supposed to close the creator */}
        <Xbtn
          xBtnStyle={{
            width: "30px",
            height: "auto",
            right: "-14px",
            top: "-3px",
            zIndex: "2",
          }}
          xBtnUrl="/"
        />
        <div>
          <div id="divbox">
            <br />
            <div className="d-flex justify-content-center">
              <h2>
                {myCharacters[id].name
                  ? myCharacters[id].name
                  : "No-Name Baggins"}
              </h2>
            </div>
            <br />
            <div className="row mb-4">
              <br />
              <div className="col px-4">
                <div id="card" className="col-12">
                  <h2 className="mt-2">
                    Race:{" "}
                    {myCharacters[id].race.charAt(0).toUpperCase() +
                      myCharacters[id].race.slice(1)}{" "}
                  </h2>
                  <div>
                    <br />
                    <h2>
                      Class:{" "}
                      {myCharacters[id].class.charAt(0).toUpperCase() +
                        myCharacters[id].class.slice(1)}
                    </h2>
                    <h3>
                      Subclass:{" "}
                      {myCharacters[id].subclass
                        ? myCharacters[id].subclass
                        : "No Subclass"}
                    </h3>
                    <br />
                    <img
                      className="icon"
                      src={ClassIcon}
                      alt="Character Avatar"
                    ></img>
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
              <div className="col d-flex justify-content-center">
                <div className="avatar__container text-center">
                  <div>
                    <img
                      className="frame"
                      src={Frame}
                      alt="Character Avatar"
                    ></img>
                    <div>
                      <img
                        className="avatar"
                        src={AvatarCostume}
                        alt="Character Avatar"
                      ></img>
                    </div>
                    <div className="vortex"></div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div id="card">
                  <div id="listman">
                    <div>
                      <h2 id="listnames">Spells:</h2>
                      <Listings items={myCharacters[id].spells} />
                    </div>
                    <br />
                    <div>
                      <h2 id="listnames">Feats:</h2>
                      <Listings items={myCharacters[id].feats} />
                    </div>
                    <br />
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
