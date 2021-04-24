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
  console.log("props saved charcters ", props);

  // const [ClassIcon, setClassIcon] = useState(NoIcon);

  // useEffect(() => {

  //     switch (newCharacter.class) {

  //         // Fighter
  //         case "Fighter":
  //         case "fighter":
  //             setClassIcon(FighterIcon)
  //             break;

  //         // Ranger
  //         case "Ranger":
  //         case "ranger":
  //             setClassIcon(RangerIcon)
  //             break;

  //         // Rogue
  //         case "Rogue":
  //         case "rogue":
  //             setClassIcon(RogueIcon)
  //             break;

  //         // Wizard
  //         case "Wizard":
  //         case "wizard":
  //             setClassIcon(WizardIcon)
  //             break;

  //         default:
  //             setClassIcon(NoIcon);
  //             break;
  //     }
  // });


    return (
      <div className="character-list">
      {props.myCharacters.map((item) => (
        <div id="charbox" className="list-group-item" key={item.name}>
            <p>{item.name}</p>
            {/* <p>{item.race}</p> */}
            <p>
              {item.race}
            </p>
           <p id="class">{item.class}</p>
           
           {/* <img className="Class Icon" src={ClassIcon} alt="Character Icon"></img> */}
           <p id="level">{item.level}</p>
            <hr className="my-4" />
            <br />
          </div>
        ))}
      </div>
    );
}

export default CharacterListItem;
