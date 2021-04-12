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
import SelectButton from "../SelectButton";
import LevelSelector from "../LevelSelecter";
import Button from "../Button";

function TabRace(props) {
  let { path, url } = useRouteMatch();
  const [raceDescription, setRaceDescription] = useState("");

  // Get the dwarf description and put it in state
  useEffect(() => {
    setRaceDescription(props.character.race[0].description);
  }, []);

  return (
    <div>
      <h5 className="text-white ml-3">Choose a Race</h5>
      <div className="row mb-2">
        {props.character.race.map((item, i) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
          >
            <div
              onClick={() => {
                console.log("You clicked me");
                setRaceDescription(props.character.race[i].description);
              }}
            >
              <Button text={item.name} />
            </div>
          </div>
        ))}
      </div>

      <p className="mb-2">{raceDescription}</p>
      <div className="d-flex justify-content-between">
        <LevelSelector />
        <Link to={"/character-creator/class"}>
          <SelectButton utton text={"Select"} />
        </Link>
      </div>
    </div>
  );
}

export default TabRace;
