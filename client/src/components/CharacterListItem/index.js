import { Link } from "react-router-dom";

// CSS
import "./style.css";

//Components
import CharacterIcon from "../CharacterIcon";

// The main function
function CharacterListItem(props) {
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

            <CharacterIcon item={item} />

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
