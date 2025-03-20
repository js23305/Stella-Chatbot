// function to check input is valid
function registerLoginForm() {
    let UserEmail = document.getElementById("registerEmail").value.trim();
    let UserPassword = document.getElementById("registerPassword").value.trim();
    let UserConfirmPassword = document.getElementById("inputConfirmPassword").value.trim();

    var registrationResult = true;

    EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!EmailRegex.test(UserEmail)) {
        alert('Please choose an email');

        registrationResult = false;
    }

    if (UserPassword < 6) {
        alert('Please choose a password');        
       
        registrationResult = false;
    }

    if(UserPassword !== UserConfirmPassword) {
        alert('Password does not match');

        registrationResult = false;

    }    



    return registrationResult;

}