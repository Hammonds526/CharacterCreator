import React from "react";
import "./style.css";
import SelectionTabStart from "../SelectionTabStart";

function CharacterProgressBar(props) {
  return (
    <div class="character-progress-bar__container">
      <SelectionTabStart charProperty={"Race / Level"} />
    </div>
  );
}

export default CharacterProgressBar;
