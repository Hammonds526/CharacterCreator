import React, { useState, useEffect } from "react";
import "./style.css";
import CharacterProgressBar from "../CharacterProgressBar";
import CharInfoBox from "../CharInfoBox";
import AvatarContainer from "../AvatarContainer";

function CharacterMakerScreen(props) {
  const Races = ["Elf", "Gnome", "Troll"];

  return (
    <div className="modal-content-box">
      <div className="character-maker-screen mx-auto bg-transparent container mt-5">
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col">
                <CharacterProgressBar />
              </div>
            </div>
            <div className="row">
              <div className="col p-0">
                <CharInfoBox Races={Races} />
              </div>
            </div>
            <div style={{ height: "60px" }}></div>
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
