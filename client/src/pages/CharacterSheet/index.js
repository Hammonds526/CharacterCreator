// Important React Imports.
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// CSS
import "./style.css";

// Components
import WoodBeamCard from "../../components/WoodBeamCard";
import Listings from "../../components/Listings";
import TextBox from "../../components/TextBox";

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
function CharacterSheet({ myCharacters, character }) {
  let { id } = useParams();

  const [TextBoxVisibility, setTextBoxVisibility] = useState("hidden");
  const [ClassIcon, setClassIcon] = useState(NoIcon);
  const [AvatarCostume, setAvatarCostume] = useState(DefaultCostume);
  const [abilities, setAbilities] = useState([
    {
      name: "This Character has no abilities",
      desc: "This abiltiy has no description",
      level: 0,
    },
  ]);
  const [TextBoxData, setTextBoxData] = useState({
    name: "No name",
    desc: "No description",
  });

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
  };

  return (
    <div className="modal__blury-backround justify-content-center pt-4">
      <TextBox
        TextBoxVisibility={TextBoxVisibility}
        setTextBoxVisibility={setTextBoxVisibility}
        data={TextBoxData}
      />
      <div id="divbox" className="col-12 col-md-10 offset-md-1">
        <WoodBeamCard WoodBeamCardStyleClass="mb-4" xbtn={true}>
          <div>
            <div id="character-sheet__container">
              <div className="d-flex justify-content-center">
                {/* Header */}
                <div className="card mt-3">
                  <h2>{myCharacters[id].name}</h2>
                </div>
              </div>

              <div className="row mb-4">
                {/* Left Column */}
                <div className="col px-4">
                  <div className="card" className="col-12">
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
                        {myCharacters
                          ? myCharacters[id].subClass
                          : "No Subclass"}
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
                <div className="col-4 d-flex justify-content-center"></div>
                {/* Right Column */}
                <div className="col px-4">
                  <div className="card">
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
        </WoodBeamCard>
      </div>
    </div>
  );
}

// Good god, this makes me want to die.
export default CharacterSheet;
