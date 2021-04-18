import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Tavern from "./components/Tavern";
import MyCharacters from "./components/MyCharacters";
import CharacterMakerScreen from "./components/CharacterMakerScreen";
import character from "./data/character";
import API from "./utils/API";
require("dotenv").config();

function App() {
  const [myCharacters, setmyCharacters] = useState([]);

  useEffect(() => {
    // TO DO: REPLACE THIS HASH WITH AUTHENTICATED USER
    API.getUser(process.env.REACT_APP_USER_ID).then((res) => {
      // console.log(res.data.user.characters);
      setmyCharacters(res.data.user.characters);
      // console.log(myCharacters);
    });
  }, []);

  return (
    <Router>
      <div className="container-fluid">
        <div className="col">
          <Switch>
            <Route path="/character-creator">
              <CharacterMakerScreen character={{ ...character }} />
            </Route>
          </Switch>

          {/* <h3 id="title" className="ml-3">Character Creator</h3> */}
        </div>
        <div className="row mt-4">
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
