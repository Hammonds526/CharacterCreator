import React, { useEffect, useState } from "react";
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

function TabClass(props) {
  console.log("Character ", props.character);

  const [classDescription, setClassDescription] = useState("");

  // Get the dwarf description and put it in state
  useEffect(() => {
    setClassDescription(props.character.class[0].desc);
  }, []);

  return (
    <div>
      <h4 className="text-bisque ml-3">Choose a Class</h4>
      <div className="row mb-2">
        {props.character.class.map((item, i) => (
          <div
            className="col p-0 d-flex justify-content-center"
            key={item.name}
          >
            <div
              onClick={() => {
                setClassDescription(item.desc);
              }}
            >
              <Button text={item.name} />
            </div>
          </div>
        ))}
      </div>

      <p className="tab_descriptions text-bisque mb-2">{classDescription}</p>
      <div className="d-flex justify-content-end">
        <Link to={"/character-creator/subclass"}>
          <SelectButton text={"Select"} />
        </Link>
      </div>
    </div>
  );
}

export default TabClass;
