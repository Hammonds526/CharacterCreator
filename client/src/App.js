// 
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Tavern from "./components/Tavern";
import CharacterList from "./components/CharacterList";
import CharacterMakerScreen from "./components/CharacterMakerScreen";
import character from "./data/character";


function App() {

  // This is here for a potential icon change based on the class.
  /*
 if (CharClass = "Rogue") {
let classimage = "../../images/icons/rogue.png"
} if (CharClass = "Wizard") {
let classimage = "../../images/icons/wizard.png"
}if (CharClass = "Fighter") {
let classimage = "../../images/icons/fighter.png"
}if (CharClass = "Ranger") {
let classimage = "../../images/icons/ranger.png"
}
*/

  return (
    <Router>
      <div className="container-fluid">
        <div className="col">
          <Switch>
            {/* The Character Generator info box. */}
            <Route path="/character-creator">
              <CharacterMakerScreen character={{ ...character }} my />
            </Route>

            {/* <Route path="/character-sheet">
              <CharacterSheet />
            </Route> */}

          </Switch>
          {/* <h3 id="title" className="ml-3">Character Creator</h3> */}
        </div>
        <div className="row">
          <div className="col-12 col-lg-9 mt-4">
            <div>
              <Tavern />
            </div>
          </div>

          <div className="col-12 col-lg-3 mt-4">
            <div>
              <CharacterList />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
