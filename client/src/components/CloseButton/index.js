import React from "react";
import "./style.css";
// import {useHistory} from "react-router-dom";

function CloseButton(props) {

const routeChange = () =>{
    // path.dirname('/')
    // const history = useHistory()
    // history.push(('/'), [history]);
    window.location.assign("/");
}

  return (
    <button
      className={
        "position-relative" +
        (props.buttonStyles === undefined ? "xbtn" : "")
      }
      style={props.buttonStyles ? props.buttonStyles : null}
      onClick={routeChange} 
    >
    </button>
  );
}

export default CloseButton;
