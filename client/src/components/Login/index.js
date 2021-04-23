//eslint-ignore

import React, { useState } from "react";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    API.login(username.trim(), password.trim())
      .then((res) => {
        props.setUser(res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  //going to created basic bootstrap
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
