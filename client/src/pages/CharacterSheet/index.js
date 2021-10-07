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
  let myUserCharacters = [];

  if (myCharacters != 0) {
    window.sessionStorage.setItem("myCharacters", JSON.stringify(myCharacters));
    myUserCharacters = JSON.parse(
      window.sessionStorage.getItem("myCharacters")
    );
  } else {
    myUserCharacters = JSON.parse(
      window.sessionStorage.getItem("myCharacters")
    );
  }
  console.log(myUserCharacters);
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
    switch (myUserCharacters[id].class) {
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
  }, [myUserCharacters]);

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
              <br />
              <div className="d-flex justify-content-center">
                <h2>
                  {myUserCharacters[id].name
                    ? myUserCharacters[id].name
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
                      {myUserCharacters[id].race.charAt(0).toUpperCase() +
                        myUserCharacters[id].race.slice(1)}{" "}
                    </h2>
                    <div>
                      <img
                        className="icon"
                        src={ClassIcon}
                        alt="Character Avatar"
                      ></img>
                      <h2>
                        Class:{" "}
                        {myUserCharacters[id].class.charAt(0).toUpperCase() +
                          myUserCharacters[id].class.slice(1)}
                      </h2>
                      <h3>
                        Subclass:{" "}
                        {myUserCharacters
                          ? myUserCharacters[id].subClass
                          : "No Subclass"}
                      </h3>
                      <br />
                      <br />
                      <div>
                        <h2 id="lvlbox">Level</h2>
                        <p id="level">{myUserCharacters[id].level}</p>
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
                            {myUserCharacters[id].str
                              ? myUserCharacters[id].str
                              : "5"}
                          </p>
                        </div>

                        <div className="col">
                          <p id="divbox">
                            DEX:{" "}
                            {myUserCharacters[id].dex
                              ? myUserCharacters[id].dex
                              : "5"}
                          </p>
                        </div>

                        <div className="col">
                          <p id="divbox">
                            CON:{" "}
                            {myUserCharacters[id].con
                              ? myUserCharacters[id].con
                              : "5"}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p id="divbox">
                            WIS:{" "}
                            {myUserCharacters[id].wis
                              ? myUserCharacters[id].wis
                              : "5"}
                          </p>
                        </div>

                        <div className="col">
                          <p id="divbox">
                            INT:{" "}
                            {myUserCharacters[id].int
                              ? myUserCharacters[id].int
                              : "5"}
                          </p>
                        </div>

                        <div className="col">
                          <p id="divbox">
                            CHA:{" "}
                            {myUserCharacters[id].cha
                              ? myUserCharacters[id].cha
                              : "5"}
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
                          items={myUserCharacters[id].spells}
                          clickFunction={handleClickEvents}
                          type={"spell"}
                        />
                      </div>
                      <br />
                      <div>
                        <h2 id="listnames">Feats:</h2>
                        <Listings
                          items={myUserCharacters[id].feats}
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
