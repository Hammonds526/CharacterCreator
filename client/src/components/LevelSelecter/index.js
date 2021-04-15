import React from "react";
import "./style.css";
import NavArrow from "../NavArrow";

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
      <input
        className=" ml-3  form-control"
        type="number"
        min="1"
        max="20"
        placeholder="1"
      />

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
