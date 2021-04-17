import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Tavern from "./components/Tavern";
import MyCharacters from "./components/MyCharacters";
import CharacterMakerScreen from "./components/CharacterMakerScreen";
import character from "./data/character";

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
        <div className="col">
          <Switch>
            <Route path="/character-creator">
              <CharacterMakerScreen character={{ ...character }} />
            </Route>
          </Switch>

          <br />
          {/* <h3 id="title" className="ml-3">Character Creator</h3> */}
        </div>
        <div className="row">
          <div className="col">
            <div className="row"></div>
            <Tavern />
          </div>
          <div className="col">
            <MyCharacters myCharacters={myCharacters} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
