import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SelectButton from "../SelectButton";
import LevelSelector from "../LevelSelecter";

function TabNameLevel(props) {
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    props.setNewCharacter({
      ...props.newCharacter,
      [name]: value,
    });
  };

  // console.log("props ", props);
  console.log("newCharacter ", props.newCharacter);

  return (
    <div>
      <center>
        <h5 className="text-bisque ml-1">What is your character's name?</h5>
        <div className="col">
          <div className="col-10 col-lg-5 col-md-6">
            <input
              className=" mb-3 ml-3 background-darkgoldenrod form-control"
              type="text"
              name="name"
              id="namecard"
              placeholder="Name here"
              onChange={handleInputChange}
              maxLength="20"
            />
          </div>
        </div>

        <h5 className="text-bisque ml-1">What is your character's level?</h5>
        <div className="d-flex justify-content-between">
          <LevelSelector {...props} handleInputChange={handleInputChange} />
          <Link to={"/character-creator/race"}>
            <SelectButton utton text={"Select"} />
          </Link>
        </div>
      </center>
    </div>
  );
}

export default TabNameLevel;
