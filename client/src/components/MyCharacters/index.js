import React from "react";
// import "./style.css";
import CharacterListItem from "../CharacterListItem";

function MyCharacters(props) {
  return (
    <div className="row">
      <div className="col">
        <h4>Saved Characters</h4>
        <CharacterListItem {...props} />
      </div>
    </div>
  );
}

export default MyCharacters;
