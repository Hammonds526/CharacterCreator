import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import "./style.css";
import CharacterProgressBar from "../CharacterProgressBar";
import CharInfoBox from "../CharInfoBox";
import AvatarContainer from "../AvatarContainer";
// import AbilityFeatSpell from "../AbilityFeatSpell";

function CharacterMakerScreen(props) {
  let { path } = useRouteMatch();
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    level: 1,
    race: "dwarf",
    class: "fighter",
    subclass: "champion",
    abilities: [],
    spells: [],
    feats: [],
    userId: null,
  });

  // console.log("path ", path);
  // console.log("url ", url);

  // let { tab } = useParams();

  // console.log("tab ", tab);

  return (
    <div className="modal-content-box">
      <div className="character-maker-screen mx-auto bg-transparent container mt-5">
        <div className="row text-white">
          <div
            id="stonebg"
            className="col-10 col-lg-3 order-lg-2 mb-2 p-0 px-lg-2 d-flex justify-content-center"
          >
            {/* Swirly avatar portrait, be careful with this. */}
            <AvatarContainer />

            {/* Left side bar below */}
          </div>
          <div className="col-12 col-lg-9 order-lg-1 p-0">
            <CharacterProgressBar />
            <div className="row">
              <Route path={`${path}/:tabId`}>
                <div className="col">
                  <CharInfoBox
                    {...props}
                    setNewCharacter={setNewCharacter}
                    newCharacter={newCharacter}
                  />
                </div>
              </Route>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterMakerScreen;
