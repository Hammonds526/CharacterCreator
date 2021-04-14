import React from "react";

// CSS
import "./style.css";

// Pixel border stuff

 import Corner from "../Corner";
 import WoodBeamX from "../WoodBeamX";
 import WoodBeamY from "../WoodBeamY";



// import WoodBeamX from "../WoodBeamX";

// The main function
function CharacterListItem(props) {
  return (
    <div>
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
      {props.myCharacters.map((item) => (
        <div className="list-group-item" key={item.Name}>
          <p>{item.Name}</p>
          <p>{item.CharClass}</p>
          <p id="level">{item.Level}</p>
          <hr className="my-4" />
        </div>
      ))}

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

export default CharacterListItem;
