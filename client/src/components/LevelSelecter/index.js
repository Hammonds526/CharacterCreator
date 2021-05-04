import React from "react";
import "./style.css";
// import NavArrow from "../NavArrow";

function LevelSelecter(props) {
  return (
    <div className="">
      {/* <NavArrow
        arrowStyle={{
          width: "25px",
          height: "auto",
          left: "68px",
          top: "6px",
          zIndex: "1",
        }}
      /> */}
      <center>
        <input
          id="numberbox"
          className=" ml-3 form-control"
          type="number"
          name="level"
          min="1"
          max="20"
          value={props.newCharacter.level}
          placeholder={props.newCharacter.level}
          onChange={props.handleInputChange}
        />
      </center>

      {/* <NavArrow
        arrowStyle={{
          width: "25px",
          height: "auto",
          left: "68px",
          top: "6px",
          zIndex: "1",
        }}
      /> */}
    </div>
  );
}

export default LevelSelecter;
