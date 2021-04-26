import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  let [ClassIcon, setClassIcon] = useState(NoIcon);

  useEffect(() => {
    switch (props.myCharacters.class) {

      // Fighter
      case "fighter":
        case "Fighter":
        setClassIcon(FighterIcon)
        break;

      // Ranger
      case "ranger":
        case "Ranger":
        setClassIcon(RangerIcon)
        break;

      // Rogue
      case "rogue":
        case "Rogue":
        setClassIcon(RogueIcon)
        break;

      // Wizard
      case "wizard":
        case "Wizard":
        setClassIcon(WizardIcon)
        break;

      default:
        setClassIcon(FighterIcon);
        break;
    }

  }, [props.myCharacters.class]);

  return (
    <div className="character-list">
      {props.myCharacters.map((item, index) => (
        <Link to={`/character-sheet/${index}`} key={index}>
          <div id="charbox" className="list-group-item mb-1">
            <h4 className="text-truncate mt-2">{item.name}</h4>
            <p>
              {item.race.charAt(0).toUpperCase() + item.race.slice(1)}{" "}
              {item.class.charAt(0).toUpperCase() + item.class.slice(1)}
            </p>
            <img
                className="icon"
                src={ClassIcon}
                alt="Character Avatar"
            ></img>

            <p id="level">{item.level}</p>
            <hr className="my-4" />
            <br />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CharacterListItem;
