import React, { useState } from "react";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import "./style.css";

function Logout(props) {
  return (
    <p
      className=""
      id="logout"
      onClick={() => {
        // sessionStorage.removeItem("currentUser");
        props.setUser();
        API.logout();
      }}
    >
      Log Out
    </p>
  );
}

export default Logout;
