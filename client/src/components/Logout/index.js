import React, { useState } from "react";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import "./style.css";

function Logout(props) {
  return (
    <Button
      id="logout"
      type="button"
      className="btn btn-danger"
      onClick={() => {
        // sessionStorage.removeItem("currentUser");
        props.setUser();
        API.logout();
      }}
    >
      Hero Wanted
    </Button>
  );
}

export default Logout;
