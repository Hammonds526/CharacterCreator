import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import HoverArrow from "../../images/hover_arrow.gif";
import Button from "../Button";

function CharacterHover({ setNewCharacter, newCharacter, ...props }) {
  const [number, setNumber] = useState(0);

  const reveal = (event) => {
    // console.log("I'm invisible");
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
        <div
          className="position-relative character-hover_button_container character-hover__floating"
          style={{ opacity: number }}
        >
          <Button text={props.data.text} />
        </div>

        <div className="position-relative character-hover_arrow_container character-hover__floating ">
          <img
            className="character-hover__arrow mt-1"
            src={HoverArrow}
            alt="spinning arrow"
            style={{
              opacity: number,
            }}
          />
        </div>
      </div>
      <Link to="/character-creator/name">
        <div
          className="character-hover__touch-target"
          style={props.data.styles}
          name={props.data.name}
          onMouseEnter={reveal}
          onMouseLeave={reveal}
          onClick={() => {
            setNewCharacter({
              ...newCharacter,
              class: props.data.name.toLowerCase(),
            });
          }}
        ></div>
      </Link>
    </div>
  );
}

export default CharacterHover;
