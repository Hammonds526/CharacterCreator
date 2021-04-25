import React from "react";
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

  // const [ClassIcon, setClassIcon] = useState(NoIcon);

  // useEffect(() => {
  //   switch (item.class) {

  //     // Fighter
  //     case "Fighter":
  //     case "fighter":
  //       setClassIcon(FighterIcon)
  //       break;

  //     // Ranger
  //     case "Ranger":
  //     case "ranger":
  //       setClassIcon(RangerIcon)
  //       break;

  //     // Rogue
  //     case "Rogue":
  //     case "rogue":
  //       setClassIcon(RogueIcon)
  //       break;

  //     // Wizard
  //     case "Wizard":
  //     case "wizard":
  //       setClassIcon(WizardIcon)
  //       break;

  //     default:
  //       setClassIcon(NoIcon);
  //       break;
  //   }

  // }, [item.class]);

  return (
    <div className="character-list">
      {props.myCharacters.map((item, index) => (
        <Link to={`/character-sheet/${index}`} key={index}>
          <div id="charbox" className="list-group-item mb-1">
            <h4 className="text-truncate mt-2">{item.name}</h4>
            {/* <p>{item.race}</p> */}
            <p>
              {item.race.charAt(0).toUpperCase() + item.race.slice(1)}{" "}
              {item.class.charAt(0).toUpperCase() + item.class.slice(1)}
            </p>
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
