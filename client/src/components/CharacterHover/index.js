import React, { useState } from "react";
import "./style.css";
import Button from "../Button";

function CharacterHover(props) {
  const [number, setNumber] = useState(0);

  const reveal = (event) => {
    console.log("I'm invisible");
    // console.log("event.target ", event.target);
    if (number === 0) {
      setNumber(1);
    } else {
      setNumber(0);
    }
  };
  return (
    <div>
      <div className="position-absolute" style={props.data.styles}>
        <Button
          text={props.data.name}
          buttonStyles={{
            backgroundSize: "67px 20px",
            height: "25px",
            width: "84px",
            bottom: "35px",
            left: "-11px",
            opacity: number,
          }}
        />
      </div>
      <div
        className="character-hover__touch-target"
        style={props.data.styles}
        name={props.data.name}
        onMouseEnter={reveal}
        onMouseLeave={reveal}
      ></div>
    </div>
  );
}

export default CharacterHover;
