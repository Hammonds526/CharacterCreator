import React from "react";

// Visuals
import "./style.css";
import Frame from "../../images/char_card_frame3.png";
import Avatar from "../../images/man2.png";


function AvatarContainer(props) {

  return (
    <div>
      <div className="avatar__container text-center">
        <img
          className="frame"
          src={Frame}
          alt="Character Avatar"
        ></img>
        <div>
          <img
            className="avatar"
            src={Avatar}
            alt="Character Avatar"
          ></img>
        </div>
        <div className="vortex"></div>

      </div>
    </div>
  );
}

export default AvatarContainer;
