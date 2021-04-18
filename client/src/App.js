import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Tavern from "./components/Tavern";
import MyCharacters from "./components/MyCharacters";
import CharacterMakerScreen from "./components/CharacterMakerScreen";
import character from "./data/character";
import API from "./utils/API";

function App() {
  const [myCharacters, setmyCharacters] = useState([]);

  useEffect(()=>{
    API.getUser("6078fa52093e11225c2d4b85")
      .then(res => {
        // console.log(res.data.user.characters);
        setmyCharacters(res.data.user.characters);
        // console.log(myCharacters);
    });
  },[]);

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
            <MyCharacters myCharacters={myCharacters}/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
