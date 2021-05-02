import React from "react";
import { Link } from "react-router-dom";

// Btn image
import xBtn from "../../images/ui/xbtn.png";

// CSS
import "./style.css";

// Our X-btn function, should close the main page when clicked.
function Xbtn(props) {
  return (
    <div id="x-btn" className="position-relative">
      <Link to={props.xBtnUrl}>
        <img src={xBtn} style={props.xBtnStyle} className="position-absolute" />
      </Link>
    </div>
  );
}

export default Xbtn;
