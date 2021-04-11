import React from "react";
import "./style.css";
import SelectionTab from "../SelectionTab";

const tabTitles = ["Race/Level", "Class", "Subclass", "Spells", "Feats"];

function CharacterProgressBar(props) {
  return (
    <div className="character-progress-bar__container">
      <div className="d-flex justify-content-center flex-wrap">
        {tabTitles.map((title, i) => {
          return (
            <div key={title}>
              <SelectionTab
                charProperty={title}
                tabStyle={{
                  zIndex: `-${i}`,
                  // left: `-${i * 25}px`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterProgressBar;
