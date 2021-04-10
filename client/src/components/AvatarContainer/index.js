import React from "react";
import "./style.css";
import Avatar from "../../images/man2.png";

function AvatarContainer(props) {
  return (
    <div className="avatar__container mx-auto d-flex justify-content-end">
      <img
        className="center"
        src={Avatar}
        style={{ height: "180px" }}
        alt="Character Avatar"
      ></img>
    </div>
  );
}

export default AvatarContainer;
