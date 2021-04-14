import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import TavernImage from "./temporaryTavern.png";

function Tavern() {
  return (
    <div>
      <Link to="/character-creator/race">
        <img
          className="desktop-tavern__image-main"
          src={TavernImage}
          alt="A tavern filled with 12 interesting looking characters representing the 12 classes in the game DND"
        ></img>
      </Link>
    </div>
  );
}

export default Tavern;
