import React from "react";
// import "./style.css";

function CharacterListItem(props) {
  return (
    <div>
      {props.myCharacters.map((item) => (
        <div className="list-group-item" key={item.Name}>
          <p>{item.Name}</p>
          <p>{item.CharClass}</p>
          <p>{item.Level}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterListItem;
