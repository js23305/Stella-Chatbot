// function to check input is valid
function validateLoginForm() {
    let UserEmail = document.getElementById("inputEmail").value.trim();
    let UserPassword = document.getElementById("inputPassword").value.trim();

    var validationResult = true;

    EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!EmailRegex.test(UserEmail)) {
        $('#loginErrorList').append('<li>Please choose an email</li>')

        validationResult = false;
    }

    if (UserPassword < 6) {
        $('#loginErrorList').append('<li>Please choose a password</li>')
        validationResult = false;
    }


    return validationResult;

}