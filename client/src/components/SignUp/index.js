import React, { useState } from "react";
import API from "../../utils/API";

function signUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // const [signUp, setSignUp] = useState();

function handleSubmit(e) {
  e.preventDefault();
  API.signUp(
    username.trim(),
    email.trim(),
    password.trim(),
    confirmPassword.trim()
  )
    .then()
    .catch();
}

//going to created basic bootstrap
// return (
//     <div></div>;
// )
