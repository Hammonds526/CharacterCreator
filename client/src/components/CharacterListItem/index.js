import { Link } from "react-router-dom";
import API from "../../utils/API";
// CSS
import "./style.css";

//Components
import CharacterIcon from "../CharacterIcon";
import Deletebtn from "../Deletebtn";
//Images
import cardThing from "../../images/cardthing.png";

// The main function
function CharacterListItem(props) {
  function DeleteCharacter(item) {
    //call on finding current User
    API.check().then((res) => {
      //delete character based off id of user and character
      API.deleteCharacter(res.data, item._id).then((res) => {
        props.setMyCharacters(res.data.characters);
      });
    });
  }

  return (
    <div className="character-list">
      {props.myCharacters.map((item, index) => (
        <div key={index}>
<<<<<<< HEAD
          <DeleteButton
            xBtnStyle={{
              width: "30px",
              height: "auto",
              right: "110px",
              top: "7px",
              zIndex: "2",
            }}
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

=======
          <div className="d-inline-block">
            <img src={cardThing} alt="card thing" id="cardThing" />
            <Deletebtn
              DeletebtnStyle={{
                width: "24px",
                height: "auto",
                right: "-122px",
                top: "11px",
                zIndex: "1",
              }}
              item={item}
              DeletebtnFunc={() => {
                DeleteCharacter(item);
              }}
            />
          </div>

          <Link to={`/character-sheet/${index}`}>
            {/* This button deletes the character */}

            <div id="charbox" className="list-group-item mb-1">
              <h4 className="text-truncate mt-2">{item.name}</h4>
              <p>
                {item.race.charAt(0).toUpperCase() + item.race.slice(1)}{" "}
                {item.class.charAt(0).toUpperCase() + item.class.slice(1)}
              </p>
              <CharacterIcon item={item} myCharacters={props.myCharacters} />
              <p id="level">{item.level}</p>
              <hr className="my-4" />
>>>>>>> f54bfe1be2f0f2a3128bb569d6ea6d52c32acc7d
              <br />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CharacterListItem;
