import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

// Btn image
import xBtn from "../../../images/ui/xbtn.png";

// Our X-btn function, should close the main page when clicked.
function Xbtn(props) {
  let history = useHistory();

  function handleClick() {
    history.push(props.xBtnUrl);
  }

  return (
    <div className="position-relative">
      <img
        src={xBtn}
        style={props.xBtnStyle}
        id="xbtn"
        className="position-absolute"
        onClick={props.xBtnFunc ? props.xBtnFunc : handleClick}
      />
    </div>
  );
}

export default Xbtn;
