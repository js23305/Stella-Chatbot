// function to check input is valid
function registerLoginForm() {
    let UserEmail = document.getElementById("registerEmail").value.trim();
    let UserPassword = document.getElementById("registerPassword").value.trim();

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

    return registrationResult;

}

function sendRegistrartionIsSuccessful() {

    console.log("Hello")

    var formData = new FormData()
    formData.append('register', $('#registerEmail').val())
    formData.append('register', $('#registerPasswored').val())

    $.ajax(
        {
            url: "/register/sendRegistrartionIsSuccessful",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                if (response['status_code'] == 200) {
                    var listItem = `
                        <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0">
                            <div class="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                    <h6 class="mb-0">Stella</h6>
                                    <p class="mb-0 opacity-75">` + response['message'] + `</p>
                                </div>
                                <small class="opacity-50 text-nowrap">now</small>
                            </div>
                        </a>
                    `;

                    $('#regsiterResponses').append(listItem);

                    $('#registerEmail').val('')
                    $('#registerPassword').val('')


                }
            },

            error: function(error) {
                console.log(error)
            }
        }
    )

}