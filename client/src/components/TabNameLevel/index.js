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

function TabNameLevel(props) {
  let { path, url } = useRouteMatch();

  const handleInputChange = (event) => {
    const { value } = event.target;
    props.setNewCharacter({
      name: value,
    });
  };

  // console.log("props ", props);
  console.log("newCharacter ", props.newCharacter);

  return (
    <div>
      <h5 className="text-white ml-1">What is your character's name?</h5>
      <div className="row">
        <div className="col-10 col-lg-5 col-md-6">
          <input
            className=" mb-3 ml-3  form-control"
            type="text"
            placeholder="Name here"
            onChange={handleInputChange}
            maxlength="20"
          />
        </div>
      </div>

      <h5 className="text-white ml-1">What is your character's level?</h5>
      <div className="d-flex justify-content-between">
        <LevelSelector />
        <Link to={"/character-creator/race"}>
          <SelectButton utton text={"Select"} />
        </Link>
      </div>
    </div>
  );
}

export default TabNameLevel;
