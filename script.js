const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }

//Show success messsage
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
;
if(re.test(input.value.trim())) {
  showSuccess(input);
} else {
    showError(input, 'Email is not valid');
}
} 

// check required fields for 
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
    } else {
        showSuccess(input);
    }
    });
}
//the .trim function above helps remove any whitespace


//The function below makes every first letter a capital
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

//check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at 
        least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be 
        less than ${max} characters`);  
    }
}

//Confirm that password match
function  checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    } 
}

//Event listeners this section

form.addEventListener('submit', function(e) {
    e.preventDefault();

checkRequired([username, email, password, password2])
//Below check length and email validity
checkLength(username, 3, 15);
checkLength(password, 6, 25);
checkEmail(email);
checkPasswordMatch(password, password2);

});


  
   