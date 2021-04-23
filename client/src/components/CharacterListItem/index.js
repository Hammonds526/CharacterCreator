import React from "react";

// CSS
import "./style.css";

// Icons
import Ranger from "../../images/icons/ranger.png";
import Rogue from "../../images/icons/rogue.png";
import Fighter from "../../images/icons/fighter.png";
import Wizard from "../../images/icons/wizard.png";
import EmptyFrame from "../../images/icons/empty_frame.png";

// The main function
function CharacterListItem(props) {
  return (
    <div className="character-list">
      {props.myCharacters.map((item, index) => (
        <div id="charbox" className="list-group-item" key={index}>
          <p>{item.name}</p>
          {/* <p>{item.race}</p> */}
          <p>
            {item.race} {item.class}
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
