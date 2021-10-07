// Important React Imports.
import React from "react";

// CSS
import "./style.css";

// Components
import WoodBeamCard from "../WoodBeamCard";

// Main function.
//  Using the temporarily created character stored in the newcharacter array, and not the ones in the DB. Helps with offline
function TextBox({ data, TextBoxVisibility, setTextBoxVisibility }) {
  const handleModalClose = () => {
    setTextBoxVisibility("hidden");
  };

  return (
    <div
      style={{
        visibility: TextBoxVisibility,
      }}
      className="modal__blury-backround text-box__padding-top justify-content-center
      "
    >
      <div id="divbox" className="col-12 col-md-6 offset-md-3">
        <WoodBeamCard xbtn={true} xBtnFunc={handleModalClose}>
          <div id="character-sheet__container">
            <h2 className="pt-4 px-4">{data.name}</h2>
            <p className="py-3 px-4 preserve-line-breaks">
              {data.desc ? data.desc : data.description.desc}
            </p>
          </div>
        </WoodBeamCard>
      </div>
    </div>
  );
}
export default TextBox;
