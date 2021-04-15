import React from "react";
// import "./style.css";
import CharacterListItem from "../CharacterListItem";

// These are fore those fancy pixel art edging
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

// CSS
import "./Style.css";

function MyCharacters(props) {
  return (

    <div id="container" className="row">
      <div className="col">
 <h4>My Characters</h4>
        <CharacterListItem {...props} />
        
      </div>
    </div>
  );
}

export default MyCharacters;
