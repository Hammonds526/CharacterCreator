//eslint-ignore

import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Button from "../../components/Button";
import Form from "react-bootstrap/Form";

function Login({ setUser, setMyCharacters }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [incorrect, setIncorrect] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    API.login(username.trim(), password.trim())
      .then((res) => {
        setUser(res.data._id);
        setMyCharacters([]);
      })
      .catch((err) => {
        setIncorrect(err.response.data.message);
      });
  }

  const handleKeyPress = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      handleSubmit(e);
    }
  };

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

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
            onKeyPress={handleKeyPress}
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
            onKeyPress={handleKeyPress}
          />
        </Form.Group>
        <p>{incorrect}</p>
        <div className="d-flex justify-content-center">
          <div type="submit" disabled={!validateForm()} onClick={handleSubmit}>
            <Button type="submit" text={"Login"} />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;
