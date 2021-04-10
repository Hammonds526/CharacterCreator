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
        <div class="row text-white">
          <div class="col-12 col-lg-3 offset-lg-9 mb-2 p-0 px-lg-2">
            <AvatarContainer />
            <div className="d-lg-none" style={{ height: "200px" }}></div>
          </div>
          <div class="col-12 col-lg-9 p-0">
            <CharacterProgressBar />
          </div>

          {/* Seperator */}

          <div className="col-12 col-lg-9 p-0">
            <CharInfoBox Races={Races} />
          </div>
        </div>
        {/* <div style={{ height: "60px" }}></div> */}
      </div>
    </div>
  );
}

export default CharacterMakerScreen;
