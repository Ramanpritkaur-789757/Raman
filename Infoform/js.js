// Run function when DOM Content has loaded
document.addEventListener("DOMContentLoaded", init);

// Function to run when DOM Content has loaded
function init(event) {
  // Get registration form and keep in global scope
  regForm = document.forms["registration"];

  // Listen for form submit
  regForm["register"].onclick = validateForm;
}

// Function to validate form elements
function validateForm(event) {
  // Array to contain all error messages
  var errorMessages = Array();

  // If username is empty
  if (!regForm["username"].value) {
    errorMessages.push("* Please enter Username");
  }

  // If number is empty
  if (!regForm["number"].value) {
    errorMessages.push("* Please enter number");
  }

   // If email is empty
  if (!regForm["email"].value) {
    errorMessages.push("* Please enter Email");
  }

  // If password1 is empty
  if (!regForm["password1"].value) {
    errorMessages.push("* Please enter Password1");
  }

  // If password2 is empty
  if (!regForm["password2"].value) {
    errorMessages.push("* Please enter Password2");
  }

  // If both passwords have values
  if (regForm["password1"].value && regForm["password2"].value) {
    // If passwords don't match
    if (regForm["password1"].value != regForm["password2"].value) {
      errorMessages.push("* Passwords do not match");
    }
  }

  // Find out if a gender has been selected
  var isChecked = false;
  for (var i = 0; i < regForm["gender"].length; i++) {
    if (regForm["gender"][i].checked) {
      isChecked = true; // Found a checked radio button!
      break; // No need to continue the search
    }
  }

  // If a gender selection was not found
  if (!isChecked) {
    errorMessages.push("* Please choose your gender");
  }

   

var isChecked = document.getElementById('agree');

    if (isChecked.checked){

       
    }
  // If a gender selection was not found
  else{
    
    errorMessages.push("* Please choose your agree ");
     
  }






  // If selection has no value
  if (!regForm["continent"].value) {
    errorMessages.push("* Please select your location");
  }

  // If address is empty
  if (!regForm["address"].value) {
    errorMessages.push("* Please enter a address ");
  }

  // If description is empty
  if (!regForm["description"].value) {
    errorMessages.push("* Please enter a description about Seminar");
  }

  // Show error messages
  displayErrors(errorMessages);

  // If there are errors
  if (errorMessages.length) {
    // Stop the form from submitting
    return false;
  }
}

function displayErrors(errors) {
  var errorBox = document.getElementById("errorMessages");

  // If there aren't any errors
  if (!errors.length) {
    errorBox.innerHTML = "";
    return false;
  }

  // Get reference to error box
  var errorBox = document.getElementById("errorMessages");

  // Prepare a container to hold the completed error message string
  var messageString = "<ul>";

  // Loop through each error to display
  for (var i = 0; i < errors.length; i++) {
    messageString += "<li>" + errors[i] + "</li>";
  }

  messageString += "</ul>";

  errorBox.innerHTML = messageString;
}
/*Captcha*/

let captchaText = document.querySelector('#captcha');
let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#csubmit');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refresh');

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
for(let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
captchaText.innerHTML = emptyArr.join('');

userText.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        if(userText.value === captchaText.innerHTML) {
            output.classList.add("greenText");
            output.innerHTML = "Correct!";
        } else {
            output.classList.add("redText");
            output.innerHTML = "Incorrect, please try again";
        }
    }
});

submitButton.addEventListener('click',  function() {
    if(userText.value === captchaText.innerHTML) {
        output.classList.add("greenText");
        output.innerHTML = "Correct!";
    } else {
        output.classList.add("redText");
        output.innerHTML = "Incorrect, please try again";
    }
});

refreshButton.addEventListener('click', function () {
    userText.value = "";
    let refreshArr = [];
    for(let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    captchaText.innerHTML = refreshArr.join('');
    output.innerHTML = "";
});

submitButton.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
    if(userText.value === captchaText.innerHTML) {
        console.log("correct!");
        output.classList.add("greenText");
        output.innerHTML = "Correct!";
    } else {
        output.classList.add("redText");
        output.innerHTML = "Incorrect, please try again";
    }
    }
});

function allowNumbersOnly(e) {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
}


    function ValidateEmail() {
        var email = document.getElementById("email").value;
        var lblError = document.getElementById("lblError");
        lblError.innerHTML = "";
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!expr.test(email)) {
            lblError.innerHTML = "Invalid email address.";
        }
    }


