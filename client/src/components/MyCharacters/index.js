// Basic imports
import React from "react";
// import "./style.css";

// We should look into providing better clarification on what this precisely does.
import CharacterListItem from "../CharacterListItem";

// Magic imports
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

// My Character function
function MyCharacters(props) {
  return (
    <div className="row">
      <div className="col">
        <h4>My Characters</h4>
        <WoodBeamX beamStyle={{ top: "-48px" }} />

        <WoodBeamY beamStyle={{ right: "0px", top: "9px" }} />
        <WoodBeamY beamStyle={{ left: "0px", top: "9px" }} />

        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "-48px",
            top: "-48px",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "-48px",
            top: "-48px",
            transform: "rotate(90deg)",
          }}
        />

        {/* Start */}

        <CharacterListItem {...props} />

        {/* End, wow. That was quick. */}

        <WoodBeamX beamStyle={{ bottom: "-57px" }} />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "-48px",
            bottom: "-57px",
            transform: "rotate(180deg)",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "-48px",
            bottom: "-57px",
            transform: "rotate(270deg)",
          }}
        />
      </div>
    </div>
  );
}

// Export the component 
export default MyCharacters;
