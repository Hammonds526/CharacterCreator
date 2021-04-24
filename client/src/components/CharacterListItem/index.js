import React from "react";

// CSS
import "./style.css";

// Icons
import NoIcon from "../../images/icons/empty_frame.png"
import FighterIcon from "../../images/icons/fighter.png"
import RangerIcon from "../../images/icons/ranger.png"
import RogueIcon from "../../images/icons/rogue.png"
import WizardIcon from "../../images/icons/wizard.png"

// The main function
function CharacterListItem(props) {


  
  return (
    <div className="character-list">
      {props.myCharacters.map((item, index) => (
        <div id="charbox" className="list-group-item" key={index}>
          <h3>{item.name}</h3>
          {/* <p>{item.race}</p> */}
          <p>
            {item.race.charAt(0).toUpperCase() + item.race.slice(1)}{" "}
            {item.class.charAt(0).toUpperCase() + item.class.slice(1)}
          </p>
          <p id="level">{item.level}</p>
          <hr className="my-4" />
          <br />
        </div>
      ))}
    </div>
  );
}

export default CharacterListItem;
