import React from "react";
import "./style.css";
import NavArrow from "../NavArrow";

function LevelSelecter(props) {
  console.log("props ", props);
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
        className="   form-control-lg"
        type="number"
        placeholder="Choose level"
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
