import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import character from "./data/character";
require("dotenv").config();

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Tavern from "./components/Tavern";
import MyCharacters from "./components/MyCharacters";
import CharacterMakerScreen from "./pages/CharacterMakerScreen";
import AuthPages from "./pages/AuthPages";
import Logout from "./components/Logout";
import CharacterSheetPage from "./pages/CharacterSheet";

function App() {
  const [myCharacters, setmyCharacters] = useState([]);

  const [newCharacter, setNewCharacter] = useState({
    name: "No-Name Baggins",
    level: 1,
    race: "human",
    class: "fighter",
    subclass: "",
    // WE GOT STATS... BOIIIIZZZZ
    str: "",
    dex: "",
    con: "",
    wis: "",
    int: "",
    cha: "",

    // ///////// //
    abilities: [],
    spells: [],
    cantrips: [],
    feats: [],
    userId: null,
  });

  // console.log("newCharacter ", newCharacter);

  const [signIn, setSignIn] = useState(true);
  //Check if user is already logged in
  //Look for cookie/session information and data of user if exists
  //Otherwise return empty user
  const [user, setUser] = useState(
    API.check()
      .then((res) => res.data)
      .catch(() => null)
  );

  useEffect(() => {
    //Double check if user is already logged in
    //If no session found no user
    API.check()
      .then((res) => {
        setUser(res.data);
        if (user) {
          API.getUser(user)
            .then((res) => {
              //set characters whether or not they exist from user
              setmyCharacters(res.data !== null ? res.data.characters : []);
            })
            .catch(() => {});
        }
      })
      .catch(() => console.log("no session found"));
  }, [user]);

  // console.log("myCharacters", myCharacters)

  return (
    <Router>
      {user ? (
        <div className="container-fluid">
          <div className="col">
            <Switch>
              <Route path="/character-creator">
                <CharacterMakerScreen
                  newCharacter={newCharacter}
                  setNewCharacter={setNewCharacter}
                  character={{ ...character }}
                  user={user}
                  myCharacters={myCharacters}
                  setmyCharacters={setmyCharacters}
                />
              </Route>

              <Route path={"/character-sheet/:id"}>
                <CharacterSheetPage
                  myCharacters={myCharacters}
                  character={character}
                />
              </Route>
            </Switch>
          </div>

          <div className="d-flex justify-content-center">
            <div className="ml-auto">
              <h1 className="main-title__text color-burlywood">
                Character Tavern{" "}
              </h1>
            </div>

            <div className="ml-auto mt-1">
              <Logout setSignIn={setSignIn} setUser={setUser} />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-9 ">
              <div className="row">
                <div className="col">
                  <Tavern
                    setNewCharacter={setNewCharacter}
                    newCharacter={newCharacter}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 p-0 ">
              <MyCharacters
                myCharacters={myCharacters}
                setMyCharacters={setmyCharacters}
                user={user}
              />
            </div>
          </div>
        </div>
      ) : (
        <AuthPages signIn={signIn} setSignIn={setSignIn} setUser={setUser} />
      )}
    </Router>
  );
}

export default App;
