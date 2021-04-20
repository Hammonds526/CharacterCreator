import React from "react";

// CSS
import "./style.css";

// The main function
function CharacterListItem(props) {
  return (
    <div>
      {props.myCharacters.map((item) => (
        <div id="charbox" className="list-group-item" key={item.name}>
          <p>{item.name}</p>
          {/* <p>{item.race}</p> */}
          <p>{item.race} {item.class}</p>
          <p id="level">{item.level}</p>
          <hr className="my-4" />
          <br />
        </div>
      ))}
    </div>
  );
}

export default CharacterListItem;
