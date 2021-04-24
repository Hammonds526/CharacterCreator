import React from "react";
// import "./style.css";
import CharacterListItem from "../CharacterListItem";

// CSS
import "./Style.css";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

function MyCharacters(props) {
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
      <CharacterListItem {...props} />
      {/* Nothing below here */}
      <WoodBeamX beamStyle={{ bottom: "-17px" }} />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          right: "0px",
          bottom: "-17px",
          transform: "rotate(180deg)",
        }}
      />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          left: "0px",
          bottom: "-17px",
          transform: "rotate(270deg)",
        }}
      />
    </div>
  );
}

export default MyCharacters;
