// Core Components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Racebase
// import Human from "../../images/costumes/human";
// import Elf from "../../images/costumes/elf";
// import HalfElf from "../../images/costumes/half-elf";
// import HalfOrc from "../../images/costumes/half-orc";
// import Halfling from "../../images/costumes/halfling";
// import Dwarf from "../../images/costumes/dwarf";

// Avatar & outfits
import DefaultCostume from "../../images/costumes/base.png";
import RangerCostume from "../../images/costumes/ranger.png";
import FighterCostume from "../../images/costumes/fighter.png";
import RogueCostume from "../../images/costumes/rogue.png";
import WizardCostume from "../../images/costumes/wizard.png";

// Our main component
function AvatarImage({ newCharacter }) {
  // console.log("Avatar image:", newCharacter);
  const [AvatarCostume, setAvatarCostume] = useState(DefaultCostume);
  // const [AvatarRace, setAvatarRace] = useState(DefaultRace);

  useEffect(() => {
    switch (newCharacter.class) {
      // Fighter
      case "Fighter":
      case "fighter":
        setAvatarCostume(FighterCostume);
        break;

      // Ranger
      case "Ranger":
      case "ranger":
        setAvatarCostume(RangerCostume);
        break;

      // Rogue
      case "Rogue":
      case "rogue":
        setAvatarCostume(RogueCostume);
        break;

      // Wizard
      case "Wizard":
      case "wizard":
        setAvatarCostume(WizardCostume);
        break;

      default:
        setAvatarCostume(DefaultCostume);
        break;
    }
  }, [newCharacter.class]);

  return (
    <div>
      <img className="avatar" src={AvatarCostume} alt="Character Avatar"></img>
    </div>
  );
}

export default AvatarImage;
