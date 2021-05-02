import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SelectButton from "../SelectButton";
import Button from "../Button";

function TabRace(props) {
  const [activeRace, setActiveRace] = useState("");

  useEffect(() => {
    setActiveRace(props.character.race[0]);
    // Also on page load, get the name of the race and put it in the newCharacter State. This will change if the user selects a different race before they continue.
    // props.setNewCharacter({
    //   ...props.newCharacter,
    //   race: props.character.race[0].name.toLowerCase(),
    // });
  }, []);

  return (
    <div>
      <h4 className="ml-3 text-bisque">Set Your Stats</h4>
      {/* <p className="ml-3 text-bisque">....................</p> */}
      <div className="row mb-2">
<h3>Strength (STR) :</h3>
<br/>
<h3>Constitution (CON) :</h3>
<br/>
<h3>Dexterity (DEX) :</h3>
<br/>
<h3>Wisdom (WIS) :</h3>
<br/>
<h3>Intelligence (INT) :</h3>
<br/>
<h3>Charisma (CHA) :</h3>
<br/>
      </div>

      <div className="d-flex justify-content-end">
        <Link to={"/character-creator/class"}>
          <SelectButton text={"Continue"} />
        </Link>
      </div>
    </div>
  );
}

export default TabRace;
