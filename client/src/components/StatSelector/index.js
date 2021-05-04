import React from "react";
// import "./style.css";


function StatSelecter(props) {
  return (
    <div className="">
      <center>
        <input
          className=" ml-3 form-control form"
          type="number"
          name="stat"
          min="1"
          max="20"
          value={props.newCharacter.stats}
          placeholder={props.newCharacter.stats}
          onChange={props.handleInputChange}
        />
      </center>
    </div>
  );
}

export default StatSelecter;
