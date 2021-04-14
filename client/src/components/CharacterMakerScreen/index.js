import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "./style.css";
import CharacterProgressBar from "../CharacterProgressBar";
import CharInfoBox from "../CharInfoBox";
import AvatarContainer from "../AvatarContainer";
import AbilityFeatSpell from "../AbilityFeatSpell";

function CharacterMakerScreen(props) {
  let { path, url } = useRouteMatch();

  // console.log("path ", path);
  // console.log("url ", url);

  // let { tab } = useParams();

  // console.log("tab ", tab);

  return (
    <div className="modal-content-box">
      <div className="character-maker-screen mx-auto bg-transparent container mt-5">
        <div className="row text-white">
          <div className="col-12 col-lg-3 order-lg-2 mb-2 p-0 px-lg-2 d-flex justify-content-center">
            <AvatarContainer />

            {/* Removed from MVP: */}
            {/* <AbilityFeatSpell /> */}
          </div>
          <div className="col-12 col-lg-9 order-lg-1 p-0">
            <CharacterProgressBar />
            <div className="row">
              <Route path={`${path}/:tabId`}>
                <div className="col">
                  <CharInfoBox {...props} />
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
