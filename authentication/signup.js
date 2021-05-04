//prettier-ignore
$(document).ready(() => {
    //Getting references to our form and input

    const usernameInput = $("input#username-input");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
    const confirmPassword = $("input#password-input check");
    const signUpButton = $("#sign-up-button");

    //password requirements code below;not sure if its going to work, but here it goes
    const myInput = document.getElementById("psw");
    const letter = document.getElementById("letter");
    const capital = document.getElementById("capital");
    const number = document.getElementById("number");
    const length = document.getElementById("length");
    const specialCharacter = document.getElementById("specialCharacter");

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

        //password requirements; show message box
        myInput.onfocus = function() {
            document.getElementById("message").style.display = "block";
        }

        //password requirements; clicking outside the pw field it hides the message box
        myInput.onblur = function() {
            document.getElementById("message").style.display = "none";
        }

        //when pw begins being typed; lower case
        myInput.onkeyup = function () {
const lowerCaseLetters = /[a-z]/g;
if (myInput.nodeValue.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
} else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}
        }

        //uppercase
        const upperCaseLetters = /[A-Z]/g;
        if (myInput.Value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        //numbers
        const numbers = /[0-9]/g;
        if(myInput.Value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        //special characters
        const specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "."];
        if(myInput.value.match(specialCharacter)) {
            specialCharacter.classList.remove("invalid");
            specialCharacter.classList.add("valid");

        } else {
            specialCharacter.classList.remove("invalid");
            specialCharacter.classList.add("valid");
        }

        //length
        if(myInput.Value.length >=8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
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