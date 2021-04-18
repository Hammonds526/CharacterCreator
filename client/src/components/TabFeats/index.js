import React from "react";
import "./style.css";
import SelectButton from "../SelectButton";
import LevelSelector from "../LevelSelecter";
import Button from "../Button";
import API from "../../utils/API";

function TabFeats(props) {

  const selectButtonOnClick = () => {
    // console.log("Button Click");
    // TO DO: REPLACE THIS HASH WITH AUTHENTICATED USER
    API.getUser("6078fa52093e11225c2d4b85") 
      .then(res => 
        {
          // SOME DEBUGGING (CHANGING STRINGS TO NUMBERS/ASSIGNING ID'S) BUT WORKS
          // console.log(res.data.user.characters)
          res.data.user.characters.push(props.newCharacter)
          // console.log(res.data.user.characters)
          // console.log(res.data);
          API.updateUser("6078fa52093e11225c2d4b85", res.data).then(() => {
            console.log(res.data.user.characters)
          })
        });
  }

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
        <SelectButton text={"Finish"} selectButtonOnClick={selectButtonOnClick}/>
      </div>
    </div>
  );
}

export default TabFeats;
