import React from "react";
import "./style.css";
import SelectButton from "../SelectButton";
import LevelSelector from "../LevelSelecter";
import Button from "../Button";

function TabClass(props) {
  return (
    <div>
      <h6 className="text-white ml-5 mt-3">Choose a Class</h6>
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
        <SelectButton utton text={"Select"} />
      </div>
    </div>
  );
}

export default TabClass;
