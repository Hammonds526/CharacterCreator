$(document).ready(() => {
  const loginForm = $("form.lenght");
  const usernameInput = $("input#username-input");
  const passwordInput = $("input#password-input");

  loginForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.username || !userData.password) {
      return;
    }

    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  //loginUser does a post to our "api/login" route and if successful, redirects us to the register page
  function loginUser(username, password) {
    //console.log(username);
    //console.log(password);
    //not too sure about the api/login
    $.post("api/login", {
      username: username,
      password: password,
    })
      .then(() => {
        $.get("/api/user/" + username).then((response) => {
          localStorage.setItem("currentUser", response);
        });
        const id = localStorage.getItem("currentUser");
        window.location.href = "/packages" + id;
        // If there's an error, log the error
      })
      
      .catch((err) => {
        console.log(err);
      });
  }
});
