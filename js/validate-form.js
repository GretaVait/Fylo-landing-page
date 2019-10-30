//Error message when user types wrong input
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submit = document.querySelector('#submit');
const errorText = document.querySelectorAll('.error--text');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.value).toLowerCase());
}

function validateName(name) {
    var re = /^[a-zA-Z]{1,}$/;
    return re.test(String(name.value).toLowerCase());
}

function errorInput(input) {
    input.style.backgroundImage = 'url(images/icon-error.svg)';
    input.style.paddingRight = '50px';
    input.style.border = '2px solid var(--error-red)';
    input.style.marginBottom = '5px';
}

function correctInput(input, errorText) {
    input.style.backgroundImage = 'none';
    input.style.paddingRight = '10px';
    input.style.border = 'none';
    errorText.innerHTML = '';
}

submit.addEventListener('click', () => {
    // First name
    if (nameInput.value === '') {
        errorInput(nameInput);
        errorText[0].innerHTML = 'Name field cannot be empty';
    } else if (validateName(nameInput) === false) {
        errorInput(nameInput);
        errorText[0].innerHTML = 'Name is incorrect';
    } else {
        correctInput(nameInput, errorText[0]);
    }

    // Email
    if (emailInput.value === '') {
        errorInput(emailInput);
        errorText[1].innerHTML = 'Email field cannot be empty';
    }
    else if (validateEmail(emailInput) === false) {
        errorInput(emailInput);
        errorText[1].innerHTML = 'Email is incorrect';
    } else {
        correctInput(emailInput, errorText[1]);
    }
});