// Important React Imports.
import React from "react";

// CSS
import "./style.css";

// Components
import Corner from "../Corner";
import WoodBeamX from "../WoodBeamX";
import WoodBeamY from "../WoodBeamY";
import Xbtn from "../Xbtn";

// Main function.
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function TextBox({ data, TextBoxVisibility, setTextBoxVisibility }) {
  const handleModalClose = () => {
    setTextBoxVisibility("hidden");
  };

  // The information that is going to be displayed in react.
  return (
    <div
      style={{
        visibility: TextBoxVisibility,
      }}
      className="modal-content-box text-box__padding-top justify-content-center row"
    >
      <div id="divbox" className="col-12 col-md-6 offset-md-3">
        <WoodBeamX beamStyle={{ top: "-5px" }} />

        <WoodBeamY beamStyle={{ right: "0px", top: "0px" }} />
        <WoodBeamY beamStyle={{ left: "0px", top: "0px" }} />

        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "-16px",
            top: "-5px",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "-16px",
            top: "-5px",
            transform: "rotate(90deg)",
          }}
        />
        {/* This this button below is supposed to close the creator */}
        <Xbtn
          xBtnStyle={{
            width: "30px",
            height: "auto",
            right: "-14px",
            top: "-3px",
            zIndex: "1",
          }}
          xBtnFunc={handleModalClose}
          xBtnUrl="/"
        />
        {/*Put content below this line */}
        <div id="character-sheet__container">
          <h2 className="pt-4">{data.name}</h2>
          <p className="py-3 px-4">{data.desc}</p>
        </div>
        {/* Nothing below here */}
        <WoodBeamX beamStyle={{ bottom: "-3px" }} />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            right: "-16px",
            bottom: "-4px",
            transform: "rotate(180deg)",
          }}
        />
        <Corner
          cornerStyle={{
            width: "80px",
            height: "auto",
            left: "-16px",
            bottom: "-4px",
            transform: "rotate(270deg)",
          }}
        />
      </div>
    </div>
  );
}

// Good god, this makes me want to die.
export default TextBox;
