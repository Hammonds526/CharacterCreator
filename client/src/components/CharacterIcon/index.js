import React, { useState, useEffect } from "react";
import "./style.css";

// Icons
import NoIcon from "../../images/icons/empty_frame.png";
import FighterIcon from "../../images/icons/fighter.png";
import RangerIcon from "../../images/icons/ranger.png";
import RogueIcon from "../../images/icons/rogue.png";
import WizardIcon from "../../images/icons/wizard.png";

function CharacterIcon(props) {
  let [classIcon, setClassIcon] = useState(NoIcon);
  useEffect(() => {
    switch (props.class) {
      // Fighter
      case "fighter":
      case "Fighter":
        setClassIcon(FighterIcon);
        break;

      // Ranger
      case "ranger":
      case "Ranger":
        setClassIcon(RangerIcon);
        break;

      // Rogue
      case "rogue":
      case "Rogue":
        setClassIcon(RogueIcon);
        break;

      // Wizard
      case "wizard":
      case "Wizard":
        setClassIcon(WizardIcon);
        break;

      default:
        setClassIcon(FighterIcon);
        break;
    }
  }, [props.class]);
  return (
    <img
      style={{ height: props.size + "px", width: props.size + "px" }}
      src={classIcon}
      alt="Character Icon"
    ></img>
  );
}

export default CharacterIcon;
