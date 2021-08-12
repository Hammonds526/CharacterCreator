import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

// Btn image
import Trashbtn from "../../../images/ui/delete.png";

// Our X-btn function, should close the main page when clicked.
function Deletebtn(props) {
  let history = useHistory();

  function handleClick() {
    history.push(props.xBtnUrl);
  }

  return (
    <div className="position-relative">
      <img
        src={Trashbtn}
        style={props.DeletebtnStyle}
        id="Deletebtn"
        className="position-absolute"
        onClick={props.DeletebtnFunc ? props.DeletebtnFunc : handleClick}
      />
    </div>
  );
}

export default Deletebtn;
