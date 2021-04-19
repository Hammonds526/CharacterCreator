//eslint-ignore

import React, { useState } from "react";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    API.login(username.trim(), password.trim()).then().catch();
  }

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  //going to created basic bootstrap
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disable={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
