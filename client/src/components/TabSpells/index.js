import React from "react";
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

function TabSpells(props) {
  return (
    <div>
      <h4 className="text-white ml-3">Choose your Spells</h4>
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

      {props.character.race[0].description}
      <div className="d-flex justify-content-between">
        <LevelSelector text={"4"} />
        <Link to={"/character-creator/feats"}>
          <SelectButton utton text={"Select"} />
        </Link>
      </div>
    </div>
  );
}

export default TabSpells;
