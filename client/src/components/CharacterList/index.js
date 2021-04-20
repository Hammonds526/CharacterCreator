import React from "react";
// import "./style.css";
import CharacterListItem from "../CharacterListItem";

// Pixel border stuff
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";

// CSS
import "./Style.css";

function CharacterList(props) {
  return (
    <div id="container" className="row">
      <WoodBeamX beamStyle={{ top: "-47px", }} />

      <WoodBeamY beamStyle={{ left: "-3px", top: "13px" }} />
      <WoodBeamY beamStyle={{ right: "-3px", top: "13px" }} />

      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          left: "-18px",
          top: "-47px",
        }}
      />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          right: "-18px",
          top: "-47px",
          transform: "rotate(90deg)",
        }}
      />
      <div className="col">
        <h4>My Characters</h4>
        <CharacterListItem {...props} />
      </div>

      {/* Nothing below here */}
      <WoodBeamX beamStyle={{ bottom: "-17px" }} />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          right: "-18px",
          bottom: "-17px",
          transform: "rotate(180deg)",
        }}
      />
      <Corner
        cornerStyle={{
          width: "40px",
          height: "auto",
          left: "-18px",
          bottom: "-17px",
          transform: "rotate(270deg)",
        }}
      />
    </div>
  );
}

export default CharacterList;
