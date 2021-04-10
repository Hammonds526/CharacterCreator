import React from "react";
import "./style.css";
import Avatar from "../../images/man2.png";

function AvatarContainer(props) {
  return (
    <div>
      <div className="avatar__container mx-auto">
        <img
          className=""
          src={Avatar}
          style={{ height: "100%" }}
          alt="Character Avatar"
        ></img>
      </div>
    </div>
  );
}

export default AvatarContainer;
