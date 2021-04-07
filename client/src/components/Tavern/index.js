import React from "react";
import "./style.css";
import TavernImage from "./temporaryTavern.jpg";

function Tavern() {
  return (
    <div>
      <img
        className="desktop-tavern__image-main"
        src={TavernImage}
        alt="A tavern filled with 12 interesting looking characters representing the 12 classes in the game DND"
      ></img>
    </div>
  );
}

export default Tavern;
