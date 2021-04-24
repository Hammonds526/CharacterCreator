import React, { useState } from "react";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";

function Logout(props) {
  return (
    <Button id="logout" type="button" className="btn btn-danger">
      Wanted
    </Button>
  );
}

export default Logout;
