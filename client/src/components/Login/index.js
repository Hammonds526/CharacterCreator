//eslint-ignore

import React, { useState } from "react";
import API from "../../utils/API";
import Button from "../../components/Button";
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
        console.log(err.message);
      });
  }

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  //going to created basic bootstrap
  return (
    <div className="Login">
      <Form className="px-4" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>

          <Form.Control
            className="form"
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="form"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <div type="submit" disabled={!validateForm()} onClick={handleSubmit}>
            <Button text={"Login"} />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;
