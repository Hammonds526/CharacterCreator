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

  const [newCharacter, setNewCharacter] = useState({
    name: "No-Name Baggins",
    level: 1,
    race: "human",
    class: "fighter",
    subclass: "",
    abilities: [],
    spells: [],
    feats: [],
    userId: null,
  });

console.log("newCharacter ", newCharacter);

  const getMyCharacters = (res) => {
    API.getUser(process.env.REACT_APP_USER_ID || "085189151981561189651985" ).then((res) => {
      if (!res.data === null) {
        
        setmyCharacters(res.data.user.characters);
       
      } 
    })
  }

  useEffect(() => {
    // TO DO: REPLACE THIS HASH WITH AUTHENTICATED USER
      getMyCharacters()
  }, []);

  return (
    <Router>
      <div className="container-fluid">
        <div className="col">
          <Switch>
            <Route path="/character-creator">
              <CharacterMakerScreen newCharacter={newCharacter} setNewCharacter={setNewCharacter} character={{ ...character }} />
            </Route>
          </Switch>

          {/* <h3 id="title" className="ml-3">Character Creator</h3> */}
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-9 ">
            <div className="row"></div>
            <Tavern setNewCharacter={setNewCharacter} newCharacter={newCharacter}/>
          </div>
          <div className="col-12 col-lg-3 p-0">
            <MyCharacters myCharacters={myCharacters} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
