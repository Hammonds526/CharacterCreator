import React from "react";
import "./style.css";
import Avatar from "../../images/man2.png";
import Frame from "../../images/char_card_frame3.png";



function AvatarContainer(props) {
  return (
    <div>
      <div className="avatar__container text-center">
        <div>
          <img
            className="frame"
            src={Frame}
            alt="Character Avatar"
          ></img>
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
