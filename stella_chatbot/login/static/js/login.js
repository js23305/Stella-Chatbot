// function to check input is valid
function validateLoginForm() {
    let UserEmail = document.getElementById("loginEmail").value.trim();
    let UserPassword = document.getElementById("loginPassword").value.trim();

    var validationResult = true;

    EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!EmailRegex.test(UserEmail)) {
        alert('Please choose an email');

        validationResult = false;
    }

    if (UserPassword < 6) {
        alert('Please choose a password');        
       
        validationResult = false;
    }


    return validationResult;

}