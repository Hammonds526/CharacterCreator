//prettier-ignore
$(document).ready(() => {
    //Getting references to our form and input

    const usernameInput = $("input#username-input");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
    const confirmPassword = $("input#password-input check");
    const signUpButton = $("#sign-up-button");

    const signUp = event => {
        event.preventDefault();
        const userData = {
            username: usernameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            confirmPassword: passwordInput.val().trim()
        };

        if (!userData.username || !userData.password || !userData.email) {
            return alert("Enter a valid email, username, and password!...please.");
        }

        // console.log(userData.passwordInput);
    // console.log(userData.confirmPassword);
    if (userData.password !== userData.confirmPassword) {
        return alert("Thy passwords Dost not match!");
    }

    //If wer have an email and password,run the signUpUser function
    signUpUser(
        userData.username,
        userData.email,
        userData.password,
        userData.confirmPassword
    );
    usernameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    confirmPassword.val("");

    };
    signUpButton.click(signUp);
     // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors

  // console.log(emailInput);
    function signUpUser(username, email, password) {
        $.post("/api/signup", {
            username: username,
            email: email,
            password: password
        })
        .then(() => {
            window.location.href = "/";
            //If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
