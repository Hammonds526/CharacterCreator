import React from "react";
import { Route } from "react-router";

// Btn image
import xBtn from "../../images/ui/xbtn.png";
import API from "../../utils/API";

// Our X-btn function, should delete character when clicked.
function DeleteButton(props) {
  function DeleteCharacter() {
    //call on finding current User
    API.check().then((res) => {
      //delete character based off id of user and character
      API.deleteCharacter(res.data, props.item._id);
    });
  }

  return (
    <div className="position-relative">
      <div onClick={DeleteCharacter}>
        <img src={xBtn} style={props.xBtnStyle} className="position-absolute" />
      </div>
    </div>
  );
}

export default DeleteButton;
