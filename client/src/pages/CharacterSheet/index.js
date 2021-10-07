// Important React Imports.
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// CSS
import "./style.css";

// Components
import Corner from "../../components/Corner";
import WoodBeamX from "../../components/WoodBeamX";
import WoodBeamY from "../../components/WoodBeamY";
import Xbtn from "../../components/Xbtn";
import Listings from "../../components/Listings";
import TextBox from "../../components/TextBox";

// Icons
import NoIcon from "../../images/icons/empty_frame.png";
import FighterIcon from "../../images/icons/fighter.png";
import RangerIcon from "../../images/icons/ranger.png";
import RogueIcon from "../../images/icons/rogue.png";
import WizardIcon from "../../images/icons/wizard.png";
import PaladinIcon from "../../images/icons/paladin.png";

// Avatar & outfits
import DefaultCostume from "../../images/costumes/base.png";
import RangerCostume from "../../images/costumes/ranger.png";
import FighterCostume from "../../images/costumes/fighter.png";
import RogueCostume from "../../images/costumes/rogue.png";
import WizardCostume from "../../images/costumes/wizard.png";
import PaladinCostume from "../../images/costumes/paladin.png";

// Frame
import Frame from "../../images/char_card_frame3.png";

// Main function.
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function CharacterSheet({ myCharacters, character }) {
  let { id } = useParams();

  const [TextBoxVisibility, setTextBoxVisibility] = useState("hidden");
  const [ClassIcon, setClassIcon] = useState(NoIcon);
  const [AvatarCostume, setAvatarCostume] = useState(DefaultCostume);
  const [abilities, setAbilities] = useState([
    {
      name: "This character has no abilities",
      desc: "This abiltiy has no description",
      level: 0,
    },
  ]);
  const [TextBoxData, setTextBoxData] = useState({
    name: "No name",
    desc: "No description",
  });

  useEffect(() => {
    switch (myCharacters[id].class) {
      // Fighter
      case "Fighter":
      case "fighter":
        setAvatarCostume(FighterCostume);
        setClassIcon(FighterIcon);
        setAbilities(character.class[0].abilities);
        break;

      // Ranger
      case "Ranger":
      case "ranger":
        setAvatarCostume(RangerCostume);
        setClassIcon(RangerIcon);
        setAbilities(character.class[1].abilities);

        break;

      // Rogue
      case "Rogue":
      case "rogue":
        setAvatarCostume(RogueCostume);
        setClassIcon(RogueIcon);
        setAbilities(character.class[2].abilities);

        break;

      // Wizard
      case "Wizard":
      case "wizard":
        setAvatarCostume(WizardCostume);
        setClassIcon(WizardIcon);
        setAbilities(character.class[3].abilities);

        break;
     
        // Paladin
//  Commented out as potential future proofing. Assumed that paladin will be class number 4.
        /*     case "Paladin":
      case "paladin":
        setAvatarCostume(PaladinCostume);
        setClassIcon(PaladinIcon);
        setAbilities(character.class[4].abilities);

        break;
*/
      default:
        setAvatarCostume(DefaultCostume);
        setClassIcon(NoIcon);
        break;
    }
  }, [myCharacters]);

  const handleClickEvents = (event) => {
    // Search for the ability in state
    console.log("event.target.dataset.type", event.target.dataset.type);
    let localTextBoxData;
    switch (event.target.dataset.type) {
      case "ability":
        localTextBoxData = abilities.find((obj) => {
          return obj.name === event.target.getAttribute("name");
        });
        break;
      case "spell":
        localTextBoxData = character.spells.find((obj) => {
          return obj.name === event.target.getAttribute("name");
        });
        break;
      case "feat":
        localTextBoxData = character.feats.find((obj) => {
          return obj.name === event.target.getAttribute("name");
        });
        break;
      default:
        break;
    }

    // set the text box data state to that ability
    setTextBoxData(localTextBoxData);
    setTextBoxVisibility("visible");
    // alert("click handled " + event.target.getAttribute("name"));
    // console.log("event ", event);
    // console.log("localTextBoxData ", localTextBoxData);
  };

  // console.log("myCharacters[id] ", myCharacters[id]);

  // The information that is going to be displayed in react.
  return (
    <div className="modal__blury-backround justify-content-center pt-4">
      <TextBox
        TextBoxVisibility={TextBoxVisibility}
        setTextBoxVisibility={setTextBoxVisibility}
        data={TextBoxData}
      />
      <div id="divbox" className="col-12 col-md-10 offset-md-1">
        <WoodBeamX beamStyle={{ top: "-5px" }} />

        <WoodBeamY beamStyle={{ right: "0px", top: "0px" }} />
        <WoodBeamY beamStyle={{ left: "0px", top: "0px" }} />

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
            zIndex: "1",
          }}
          xBtnUrl="/"
        />
        <div>
          <div id="character-sheet__container">
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
              {/* Left Column */}
              <div className="col px-4">
                <div id="card" className="col-12">
                  <h2 className="mt-2">
                    Race:{" "}
                    {myCharacters[id].race.charAt(0).toUpperCase() +
                      myCharacters[id].race.slice(1)}{" "}
                  </h2>
                  <div>
                    <img
                      className="icon"
                      src={ClassIcon}
                      alt="Character Avatar"
                    ></img>
                    <h2>
                      Class:{" "}
                      {myCharacters[id].class.charAt(0).toUpperCase() +
                        myCharacters[id].class.slice(1)}
                    </h2>
                    <h3>
                      Subclass:{" "}
                      {myCharacters ? myCharacters[id].subClass : "No Subclass"}
                    </h3>
                    <br />
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
              {/* Center Column */}
              <div className="col-4 d-flex justify-content-center">
                <div className="row avatar__container text-center">
                  <div>
                    <img
                      className="frame position-relative"
                      src={Frame}
                      alt="Character Avatar"
                    ></img>
                    <div>
                      <img
                        className="avatar position-relative"
                        src={AvatarCostume}
                        alt="Character Avatar"
                      ></img>
                    </div>
                    <div className="vortex"></div>
                  </div>
                  <div className="row mt-3">
                    <div className="row">
                      <div className="col">
                        <p id="divbox">
                          STR:{" "}
                          {myCharacters[id].str ? myCharacters[id].str : "5"}
                        </p>
                      </div>

                      <div className="col">
                        <p id="divbox">
                          DEX:{" "}
                          {myCharacters[id].dex ? myCharacters[id].dex : "5"}
                        </p>
                      </div>

                      <div className="col">
                        <p id="divbox">
                          CON:{" "}
                          {myCharacters[id].con ? myCharacters[id].con : "5"}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p id="divbox">
                          WIS:{" "}
                          {myCharacters[id].wis ? myCharacters[id].wis : "5"}
                        </p>
                      </div>

                      <div className="col">
                        <p id="divbox">
                          INT:{" "}
                          {myCharacters[id].int ? myCharacters[id].int : "5"}
                        </p>
                      </div>

                      <div className="col">
                        <p id="divbox">
                          CHA:{" "}
                          {myCharacters[id].cha ? myCharacters[id].cha : "5"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="col px-4">
                <div id="card">
                  <div id="character-sheet__right-list">
                    <div>
                      <h2 id="listnames">Abilities:</h2>
                      <Listings
                        items={abilities}
                        clickFunction={handleClickEvents}
                        type={"ability"}
                      />
                    </div>
                    <div>
                      <h2 id="listnames">Spells:</h2>
                      <Listings
                        items={myCharacters[id].spells}
                        clickFunction={handleClickEvents}
                        type={"spell"}
                      />
                    </div>
                    <br />
                    <div>
                      <h2 id="listnames">Feats:</h2>
                      <Listings
                        items={myCharacters[id].feats}
                        clickFunction={handleClickEvents}
                        type={"feat"}
                      />
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
