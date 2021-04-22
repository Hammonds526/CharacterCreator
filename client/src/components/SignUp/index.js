import React, { useState } from "react";
import API from "../../utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function signUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [signUp, setSignUp] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (password.trim() === confirmPassword.trim()) {
      API.saveUser({
        username: email.trim(),
        password: password.trim(),
        characters: [],
      })
        .then()
        .catch();
    }
  }

  //need event handler
  //need to create routes for login and signup

  //going to created basic bootstrap

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Create Username" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default signUp;
