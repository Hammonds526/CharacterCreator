import { Link } from "react-router-dom";

// CSS
import "./style.css";

//Components
import CharacterIcon from "../CharacterIcon";
import DeleteButton from "../DeleteButton";

// The main function
function CharacterListItem(props) {
  return (
    <div className="character-list">
      {props.myCharacters.map((item, index) => (
        <div key={index}>
          <DeleteButton
            xBtnStyle={{
              width: "30px",
              height: "auto",
              right: "110px",
              top: "7px",
              zIndex: "2",
            }}
            xBtnUrl="/"
            item={item}
            user={props.user}
            setmyCharacters={props.setmyCharacters}
          />
          <Link to={`/character-sheet/${index}`}>
            {/* This this button below is supposed to close the creator */}

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
        </div>
      ))}
    </div>
  );
}

export default CharacterListItem;
