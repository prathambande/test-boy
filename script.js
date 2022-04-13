const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkAll(inputs){

    inputs.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    }); 
}

function checklength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} length should be greater than ${min}`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} length should be lesser than ${max}`);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!(re.test(String(email.value).toLowerCase())))
    {
        showError(email,"Please enter a valid Email");
    }
    else{
        showSuccess(email);
    }
}

function matchpass(password,password2){
    if(password.value !== password2.value || password2.value === ''){
        showError(password2, 'Password Not Matching');
    }else{
        showSuccess(password2);
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkAll([username,email,password,password2]);
    validateEmail(email);
    checklength(username,3,15);
    matchpass(password,password2);
    checklength(password,5,10);
 
});
