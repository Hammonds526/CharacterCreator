import React from "react";
import "./style.css";
import SelectButton from "../SelectButton";
import LevelSelector from "../LevelSelecter";
import Button from "../Button";
import API from "../../utils/API";
import { Link } from "react-router-dom";
require("dotenv").config();

function TabFeats(props) {
  const selectButtonOnClick = () => {
    // console.log("Button Click");
    // TO DO: REPLACE THIS HASH WITH AUTHENTICATED USER
    API.getUser(process.env.REACT_APP_USER_ID).then((res) => {
      // SOME DEBUGGING (CHANGING STRINGS TO NUMBERS/ASSIGNING ID'S) BUT WORKS
      // console.log(res.data.user.characters)
      res.data.user.characters.push(props.newCharacter);
      // console.log(res.data.user.characters)
      // console.log(res.data);
      API.updateUser(process.env.REACT_APP_USER_ID, res.data).then(() => {
        console.log(res.data.user.characters);
      });
    });
  };

  return (
    <div>
      <h4 className="text-white ml-3">Choose your Feats</h4>
      <div className="row">
        {props.character.race.map((item) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
          >
            <Button text={item.name} />
          </div>
        ))}
      </div>

      {props.character.race[0].description}
      <div className="d-flex justify-content-between">
        <LevelSelector text={"4"} />
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
