import React, { useState } from "react";

// API
import API from "../../utils/API";

// Bootstrap Button Component
import Button from "react-bootstrap/Button";

// CSS
import "./style.css";

function Logout(props) {
  return (
    <p
      className=""
      id="logout"
      onClick={() => {
        // sessionStorage.removeItem("currentUser");
        props.setSignIn(true);
        props.setUser();

        API.logout();
      }}
    >
      Log Out
    </p>
  );
}

export default Logout;
