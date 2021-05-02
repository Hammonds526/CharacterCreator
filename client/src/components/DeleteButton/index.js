import React from "react";
import { Route } from "react-router";

// Btn image
import xBtn from "../../images/ui/xbtn.png";
import API from "../../utils/API";

// Our X-btn function, should close the main page when clicked.
function DeleteButton(props) {
  function DeleteCharacter() {
    API.check().then((res) => {
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
