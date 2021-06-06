import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

// Components
import ScrollList from "../ScrollList";
import API from "../../utils/API";
import SelectButton from "../SelectButton";
import FeatLimiter from "../FeatLimiter";
import spells from "../../data/spells";
require("dotenv").config();

function TabFeats({
  newCharacter,
  setNewCharacter,
  getFeats,
  // getMyCharacters,
  user,
  myCharacters,
  setmyCharacters,
  ...props
}) {
  const [activeFeat, setActiveFeat] = useState({
    name: "No feats available",
    description: {
      desc: "No feats available for this class/race/level combo.",
    },
  });
  const [feats, setFeats] = useState({
    totalFeatsAvailable: 0,
    totalFeatsSelected: 0,
  });
  const history = useHistory();

  //When the tab loads, make the page display the first feat in the list of filtered feats.
  useEffect(() => {
    setActiveFeat(props.character.feats[0]);
  }, []);

  //Set total feats available their current level / 2
  useEffect(() => {
    const localFeats = { ...feats };
    localFeats.totalFeatsAvailable = Math.floor(newCharacter.level / 2);
    //Humans get an extra feat
    if (newCharacter.race === "human") {
      localFeats.totalFeatsAvailable++;
    }
    localFeats.totalFeatsSelected = newCharacter.feats.length;
    setFeats(localFeats);
  }, [newCharacter]);

  const finishButtonOnClick = () => {
    // Update characters list
    const charList = [...myCharacters, newCharacter];
    // Send updated list to server
    API.updateUser(user, {
      characters: charList,
    })
      .then((res) => {
        //set characters based off database rather than state. Gives full list with current information.
        setmyCharacters(res.data.characters);

        history.push(`/character-sheet/${myCharacters.length}`);
      })
      .catch((err) => console.log(err));
  };

  // When a checkbox is clicked, if the corresponing feat is not in myCharacter, add it. If it is, remove it.
  const checkboxOnClick = (event) => {
    // Make a new copy of newCharacter state
    const localNewCharacter = { ...newCharacter };
    //Check if feat is in newCharacter already
    if (newCharacter.feats.includes(event.target.name)) {
      //If it is, return everything in the array other than it, as a new array
      const activeFeats = localNewCharacter.feats.filter((item) => {
        if (item !== event.target.name) {
          return true;
        }
      });
      // Store the newly modified object back in newCharacter.
      localNewCharacter.feats = activeFeats;
      setNewCharacter(localNewCharacter);
      //If the feat can't be found in newCharacter, add it
    } else if (newCharacter.feats.length < feats.totalFeatsAvailable) {
      localNewCharacter.feats.push(event.target.name);
      setNewCharacter(localNewCharacter);
    }
  };

  return (
    <div>
      <h2 className=" ml-3 text-bisque">
        Choose your Feat{feats.totalFeatsAvailable > 1 ? "s" : null}
      </h2>
      <div className="row mb-2">
        <div className="col-5">
          <FeatLimiter
            feats={feats}
            setFeats={setFeats}
            activeFeat={activeFeat}
            newCharacter={newCharacter}
            {...props}
          />
          <ScrollList
            list={getFeats}
            setActive={setActiveFeat}
            checkboxOnClick={checkboxOnClick}
            newCharacter={newCharacter}
            zs
            {...props}
            itemType={"feat"}
            scrollListStyle={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-7">
          {feats.totalFeatsAvailable === 0 ? (
            <p className="text-warning">
              No feats avaiable with this Level/Race combo
            </p>
          ) : null}
          <h3 className="text-bisque mt-3 text-align-left">
            {activeFeat.name}
          </h3>
          <p className="tab_descriptions text-bisque mt-3 preserve-line-breaks">
            {activeFeat.desc}
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <SelectButton
          text={"Finish"}
          selectButtonOnClick={finishButtonOnClick}
        />
      </div>
    </div>
  );
}

export default TabFeats;
