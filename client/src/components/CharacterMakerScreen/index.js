import React, { useState, useEffect } from "react";
import "./style.css";
import CharacterProgressBar from "../CharacterProgressBar";
import CharInfoBox from "../CharInfoBox";
import AvatarContainer from "../AvatarContainer";

function CharacterMakerScreen(props) {
  return (
    <div className="modal-content-box">
      <div className="character-maker-screen">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col">
                <CharacterProgressBar />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <CharInfoBox />
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
