import React from "react";
import "./style.css";
import Button from "../Button";
import Corner from "../Corner";

function CharInfoBox(props) {
  return (
    <div
      class="char-info-box__container p-2 mt-5"
      style={{
        backgroundImage: "url(" + require("../../images/stone_tile.png") + ")", // I stack overflowed the shit out of this. https://stackoverflow.com/questions/38794106/backgroundimage-is-not-working-in-react
        backgroundSize: "64px",
      }}
    >
      <Corner
        cornerStyle={{
          width: "117px",
          height: "auto",
          left: "-43px",
          top: "-37px",
        }}
      />
      <h6 className="text-white ml-5 mt-3">Choose a Race</h6>
    </div>
  );
}

export default CharInfoBox;
