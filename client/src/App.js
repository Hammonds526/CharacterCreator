import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tavern from "./components/Tavern";
import MyCharacters from "./components/MyCharacters";
import CharacterMakerScreen from "./components/CharacterMakerScreen";
// Data
import Fighter from "./data/fighter";
import Ranger from "./data/ranger";
import Rogue from "./data/rogue";
import Wizard from "./data/wizard";

function App() {
  const [myCharacters, setMyCharacters] = useState([
    {
      Name: "John",
      Level: 12,
      CharClass: "Wizard",
    },
    {
      Name: "Sally",
      Level: 1,
      CharClass: "Ranger",
    },
    {
      Name: "Alexander",
      Level: 10,
      CharClass: "Rogue",
    },
  ]);

  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route path="/character-creator">
            <CharacterMakerScreen
              charClasses={{ Fighter, Ranger, Rogue, Wizard }}
            />
          </Route>
        </Switch>

        <div className="row">
          <h3 className="ml-3">Character Creator</h3>
        </div>
        <div className="row">
          <div className="col-10">
            <div className="row">
              <div className="col"></div>
            </div>
            <Tavern />
          </div>
          <div className="col-2">
            <MyCharacters myCharacters={myCharacters} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
