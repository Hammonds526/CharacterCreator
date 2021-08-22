// Important React Imports.
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// CSS
import "./style.css";

// Components
import WoodBeamCard from "../../components/UI/WoodBeamCard";
import Listings from "../../components/CharacterSheet/Listings";
import TextBox from "../../components/CharacterSheet/TextBox";
import CharacterIcon from "../../components/Avatar/ClassIcon";
import NavArrow from "../../components/UI/NavArrow";

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const StatBox = ({ stat }) => {
  const [number, setNumber] = useState(0);

  const reveal = () => {
    if (number === 0) {
      setNumber(1);
    } else {
      setNumber(0);
    }
  };

  return (
    <div
      className="card character-sheet__statbox-card p-2"
      onMouseOver={reveal}
      onMouseOut={reveal}
    >
      <p className="mb-0 character-sheet__statbox-title">{stat.name}</p>
      <div className="row d-flex justify-content-around">
        <div style={{ opacity: number, transition: "opacity 0.3s" }}>
          <NavArrow
            arrowStyle={{
              width: "20px",
              height: "auto",
              left: "0px",
              top: "16px",
              zIndex: "1",
              transform: "rotate(180deg)",
            }}
          />
        </div>
        <h2 className="mb-0 character-sheet__statbox-number mt-1">
          {stat.number}
        </h2>
        <div style={{ opacity: number, transition: "opacity 0.3s" }}>
          <NavArrow
            arrowStyle={{
              width: "20px",
              height: "auto",
              left: "-19px",
              top: "16px",
              zIndex: "1",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const CharacterSheet = ({ myCharacters, character }) => {
  let { id } = useParams();

  const [TextBoxVisibility, setTextBoxVisibility] = useState("hidden");
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

  // Get abilities
  useEffect(() => {
    const currentClassIndex = character.class.findIndex(
      (charClass) => charClass.name.toLowerCase() === myCharacters[id].class
    );

    console.log("currenetClassIndex ", currentClassIndex);

    setAbilities(character.class[currentClassIndex].abilities);
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
              {/* Header */}
              <div className="card mt-4 mx-5 mb-2 text-left d-flex flex-row justify-content-between character-sheet__header-container ">
                <div className="d-flex align-items-center justify-content-center w-100">
                  <h2 className="mb-0 pl-3 character-sheet__character-title">
                    {myCharacters[id].name}
                  </h2>
                </div>
                <div className="d-flex flex-row">
                  {/* Class  */}
                  <div className="d-flex flex-row justify-content-center align-items-center">
                    <CharacterIcon size={40} class={myCharacters[id].class} />
                  </div>
                  <div className=" ml-2">
                    <p className="mb-0 character-sheet__header-superscript">
                      Class
                    </p>
                    <p className="character-sheet__header-class text-nowrap px-2 mb-0">
                      {myCharacters[id].class.capitalize()}
                    </p>
                  </div>
                  {/* SubClass  */}
                  <div className="ml-2">
                    <p className="mb-0 character-sheet__header-superscript">
                      Sub-Class
                    </p>
                    <p className="character-sheet__header-class text-nowrap px-2 mb-0">
                      {myCharacters[id].subClass
                        ? myCharacters[id].subClass.capitalize()
                        : "No subclass chosen"}
                    </p>
                  </div>
                  {/* Race  */}

                  <div className=" ml-2">
                    <p className="mb-0 character-sheet__header-superscript">
                      Race
                    </p>
                    <p className="character-sheet__header-class text-nowrap px-2 mb-0">
                      {myCharacters[id].race.capitalize()}
                    </p>
                  </div>
                  {/* Level  */}
                  <div className="d-flex align-items-center ml-2">
                    <p className="mb-0">Level</p>
                  </div>
                  <div className="d-flex align-items-center mx-2">
                    <p className="character-sheet__header-level mb-0">
                      {myCharacters[id].level}
                    </p>
                  </div>
                </div>
              </div>
              {/* End of Header */}

              {/* StatBoxes */}
              <div className="row mx-5 mb-2 justify-content-around">
                {myCharacters[id].stats
                  ? myCharacters[id].stats.map((stat) => (
                      <StatBox stat={stat} key={stat.name} />
                    ))
                  : null}
              </div>

              <div className="row mb-4">
                {/* Left Column */}
                <div className="col px-4"></div>
                {/* Center Column */}
                <div className="col-4 d-flex justify-content-center"></div>
                {/* Right Column */}
                <div className="col px-4 mr-3">
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
};

// Good god, this makes me want to die.
export default CharacterSheet;
