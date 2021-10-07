import React from "react";
import { Route } from "react-router";

// Btn image
import xBtn from "../../images/ui/xbtn.png";
import API from "../../utils/API";
import "./style.css";

// Our X-btn function, should delete character when clicked.
function DeleteButton(props) {
  function DeleteCharacter() {
    //call on finding current User
    API.check().then((res) => {
      //delete character based off id of user and character
      API.deleteCharacter(res.data, props.item._id).then((res) => {
        props.setmyCharacters(res.data.characters);
      });
    });
  }

  /*
  DELETE BUTTON NEEDS WORK. 
  CURRENTLY BUGGY DOES DELETE THOUGH
  BUGS:
  PULLS UP CHARACTER SHEET ON CLICK: NEED TO FIND WAY OF STOPPING EVENT PROPS/EVENT BUBBLING
  DOESN'T DELETE DYNAMICALLY: NEEDS REFRESH TO SHOW NEW LIST, HOPE SOMEONE CAN HELP WITH THIS ONE
  */
  return (
    <div className="position-relative">
      <div>
        <img
          id="x-btn"
          src={xBtn}
          style={props.xBtnStyle}
          className="position-absolute"
          onClick={DeleteCharacter}
        />
      </div>
    </div>
  );
}

export default DeleteButton;
