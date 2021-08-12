import React from "react";

// Visuals
import "./style.css";
import Frame from "../../../images/char_card_frame3.png";
import AvatarImage from "../AvatarImage";

function AvatarContainer(props) {
  return (
    <div>
      <div className="avatar__container text-center">
        <img className="frame" src={Frame} alt="Character Avatar"></img>
        <div>
          <AvatarImage {...props} />
        </div>
        <div className="vortex"></div>
      </div>
    </div>
  );
}

export default AvatarContainer;
