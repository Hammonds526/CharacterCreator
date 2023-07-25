import React, { useState } from "react";

// API
import API from "../../utils/API";

// Bootstrap & Components
import Form from "react-bootstrap/Form";
import Button from "../../components/Button";

function signUp({ setUser, setMyCharacters }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password.trim() === confirmPassword.trim()) {
      API.saveUser({
        email: email.trim(),
        username: username.trim(),
        password: password.trim(),
      })
        .then((res) => {
          // Redirect to login
          setMyCharacters([]);
          setUser(res.data._id);
        })
        .catch((err) => console.log(err));
    } else {
      setFormError("Passwords do not match");
    }
  }

  //need event handler
  //need to create routes for login and signup

  // Page

  return (
    <div className="signup-page__background">
      <Form className="px-4">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="form"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Create Username"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="form"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="form"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            className="form"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </Form.Group>
        <div className="d-flex justify-content-center flex-column">
          {formError && <p className="text-danger">{formError}</p>}
          <div className="d-flex justify-content-center" onClick={handleSubmit}>
            <Button text={"Submit"} />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default signUp;
