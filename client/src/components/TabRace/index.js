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
      <h6 className="text-white ml-5 mt-3">Choose a Race</h6>
      <div className="row">
        {props.character.race.map((item) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
          >
            <Button text={item.name} />
          </div>
        ))}
      </div>

      {raceDescription}
      <div className="d-flex justify-content-between">
        <LevelSelector text={"4"} />
        <Link to={"/character-creator/class"}>
          <SelectButton utton text={"Select"} />
        </Link>
      </div>
    </div>
  );
}

export default TabRace;
