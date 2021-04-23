import React from "react";

// CSS
import "./style.css";

// Pixel border stuff
// import Corner from "../Corner";
// import WoodBeamX from "../WoodBeamX";
// import WoodBeamY from "../WoodBeamY";

// import WoodBeamX from "../WoodBeamX";

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
