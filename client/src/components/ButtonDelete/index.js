// Core React imports
import React from "react";
import { Link } from "react-router-dom";

// Btn image
import Deletebtn from "../../images/ui/delete.png";

// CSS
import "./style.css";

// Main function
function ButtonDelete(props) {
    return (
        <div id="delete-btn" className="position-relative">
            
            {/* <Link to={props.xBtnUrl}> */}
            <img src={Deletebtn} style={props.DeletebtnStyle} className="position-absolute" />
            {/* </Link> */}
            
        </div>
    );
}

export default ButtonDelete;