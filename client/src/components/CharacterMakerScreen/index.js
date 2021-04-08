import React, { useState, useEffect } from "react";
import "./style.css";
import Avatar from "../../images/man2.png";
import CharacterProgressBar from "../CharacterProgressBar";

function CharacterMakerScreen(props) {
  return (
    <div className="modal-content-box">
      <div className="character-maker-screen">
        <div className="row">
          <div className="col-9">
            <CharacterProgressBar />
            <h4>Character Maker Screen</h4>
          </div>
          <div className="col-3">
            <div className="character-avatar__container mx-auto">
              <img
                className="center"
                src={Avatar}
                style={{ height: "180px" }}
                alt="Character Avatar"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterMakerScreen;
