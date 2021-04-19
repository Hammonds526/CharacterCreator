import React from "react";
import "./style.css";

function CharacterImage(props) {
  const reveal = (event) => {
    if (event.target.style.opacity === "0") {
      event.target.style.opacity = "1.0";
    } else {
      event.target.style.opacity = "0";
    }
  };
  return (
    <div>
      <img
        className="position-absolute"
        src={props.character.src}
        alt={props.character.name}
        style={props.character.styles}
        onMouseEnter={reveal}
        onMouseLeave={reveal}
        key={props.i}
      />
    </div>
  );
}

export default CharacterImage;
