import React, { useState, useEffect } from "react";
import "./style.css";
import CharacterProgressBar from "../CharacterProgressBar";
import CharInfoBox from "../CharInfoBox";
import AvatarContainer from "../AvatarContainer";

function CharacterMakerScreen(props) {
  const Races = ["Elf", "Gnome", "Troll"];

  return (
    <div className="modal-content-box">
      <div className="character-maker-screen bg-transparent">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col">
                <CharacterProgressBar />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <CharInfoBox Races={Races} />
              </div>
            </div>
          </div>
          <div className="col-3">
            <AvatarContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterMakerScreen;
