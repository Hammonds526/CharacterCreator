import React, {useState, useEffect} from "react";
import "./style.css";
import SelectButton from "../SelectButton";
import LevelSelector from "../LevelSelecter";
import Button from "../Button";
import ScrollList from "../ScrollList"
import API from "../../utils/API";
import { Link } from "react-router-dom";
require("dotenv").config();


function TabFeats({newCharacter, setNewCharacter, getFilteredFeats, getMyCharacters, ...props}) {
  const [activeFeat, setActiveFeat] = useState({
    name: "No feats available",
    description: {
      desc: "No feats available for this class/race/level combo.",
    },
  });

  //When the tab loads, make the page display the first feat in the list of filtered feats.
  useEffect(() => {
    setActiveFeat(
      props.character.feats[0]
    );
  }, []);


  const selectButtonOnClick = () => {
    // console.log("Button Click");
    // TO DO: REPLACE THIS HASH WITH AUTHENTICATED USER
    API.getUser("085189151981561189651985" || process.env.REACT_APP_USER_ID).then((res) => {
      // SOME DEBUGGING (CHANGING STRINGS TO NUMBERS/ASSIGNING ID'S) BUT WORKS
      // console.log(res.data.user.characters)
      res.data.user.characters.push(newCharacter);
      console.log(res.data.user.characters)
      // console.log(res.data);
      API.updateUser(process.env.REACT_APP_USER_ID, res.data).then(() => {
        getMyCharacters();
        console.log(res.data.user.characters);
      });
    });
  };

console.log("newCharacter from tabFeats ", newCharacter);

    // When a checkbox is clicked, if the corresponing feat is not in myCharacter, add it. If it is, remove it.
    const checkboxOnClick = (event) => {
      console.log("event.target.name feat name ", event.target.name);
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
      } else {
        localNewCharacter.feats.push(event.target.name);
        setNewCharacter(localNewCharacter);
      }
    };

  return (
    <div>
    <h2 className=" ml-3 text-bisque">Choose your Feats</h2>
    <div className="row mb-2">
      <div className="col-4">
        <ScrollList
        list={getFilteredFeats}
          setActive={setActiveFeat}
          checkboxOnClick={checkboxOnClick}
          newCharacter={newCharacter}
          setNewCharacter={setNewCharacter}
          {...props}
          itemType={"feat"}
          scrollListStyle={{ maxHeight: "400px" }}
        />
      </div>
      <div className="col-8">
        <h3 className="text-bisque mt-3 text-align-left">
          {activeFeat.name}
        </h3>
        <text className="tab_descriptions text-bisque mt-3">
          {console.log("activeFeat.desc", activeFeat.desc)}
          {activeFeat.desc}
        </text>
      </div>
    </div>

      
      <div className="d-flex justify-content-end">
        
        <Link to={"/"}>
          <SelectButton
            text={"Finish"}
            selectButtonOnClick={selectButtonOnClick}
          />
        </Link>
      </div>
    </div>
  );
}

export default TabFeats;
