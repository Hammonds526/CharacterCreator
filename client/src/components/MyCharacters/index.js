import React from "react";
import { Link } from "react-router-dom";
// CSS
import "./Style.css";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

import CharacterIcon from "../CharacterIcon";
import Deletebtn from "../Deletebtn";
//Images
import cardThing from "../../images/cardthing.png";

function MyCharacters(props) {
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
    <div>
      <WoodBeamX beamStyle={{ top: "0px" }} />

      <WoodBeamY beamStyle={{ left: "0px", top: "0px" }} />
      <WoodBeamY beamStyle={{ right: "0px", top: "0px" }} />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          left: "0px",
          top: "0px",
        }}
      />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          right: "0px",
          top: "0px",
          transform: "rotate(90deg)",
        }}
      />

      {/* Nothing Above this line */}
      <h4 className="my-characters__title pt-4">My Characters</h4>
      <div className="character-list">
        {props.myCharacters.map((item, index) => (
          <div key={index}>
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
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <div style={{ marginBottom: "17px" }}>
                    <CharacterIcon
                      class={item.class}
                      size={50}
                      myCharacters={props.myCharacters}
                    />
                  </div>

                  <p className="ml-2" id="level">
                    {item.level}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* Nothing below here */}

      <WoodBeamX beamStyle={{ bottom: "0px" }} parentClass={"absolute"} />

      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          right: "0px",
          bottom: "-1px",
          transform: "rotate(180deg)",
        }}
        parentClass={"absolute"}
      />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          left: "0px",
          bottom: "-1px",
          transform: "rotate(270deg)",
        }}
        parentClass={"absolute"}
      />
    </div>
  );
}

export default MyCharacters;
