const firstNameInput = document.getElementById('name');
const secondNameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('number');
const passwordInput = document.getElementById('password');



let emailReadyForSend = false,
    passwordReadyForSend = false;


firstNameInput.addEventListener('change', event => {
    let name = event.target.value;
    validateName(name);
});

secondNameInput.addEventListener('change', event => {
    let name = event.target.value;
    validateName(name);
});

emailInput.addEventListener('change', event => {
    let email = event.target.value;
    validateEmail(email)
});

telInput.addEventListener('change', event => {
    let tel = event.target.value;
    validateTel(tel)
})

passwordInput.addEventListener( 'change', event => {
    let password = event.target.value;
    validatePassword(password);
})





////////functions

function validateEmail(email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;   
    if(reg.test(email) == false) {

        changeClass(event.target, 'incorrect')

       return false;
    } else {
        changeClass(event.target, 'correct')
        emailReadyForSend = true;
        return true
    }

};



function validateName(uname) {
    let name = uname.replace(/\s/g, '');
    let letters = /^[A-Za-z]+$/;
    if (name.match(letters) && name.length > 2) {
        changeClass(event.target, 'correct');
        return true;
    } else {
        changeClass(event.target, 'incorrect');
        return false;
    };
};

function validateTel(tel) {
    let num = tel.slice(1);
    
    if(num.length > 15 || num.length < 5 || isNaN(num)) {
        changeClass(event.target, 'incorrect');  
        return false
    } else {
        changeClass(event.target, 'correct');
        return true
    }
}




function validatePassword(pass) {
    const beginWithoutDigit = /^\D.*$/
    const withoutSpecialChars = /^[^-() /]*$/
    const containsLetters = /^.*[a-zA-Z]+.*$/
    const minimum8Chars = /^.{8,}$/


    if( beginWithoutDigit.test(pass) &&
        withoutSpecialChars.test(pass) &&
        containsLetters.test(pass) &&
        minimum8Chars.test(pass) ) {
            changeClass(event.target, 'correct');
            passwordReadyForSend = true;
            return true
    } else {
        changeClass(event.target, 'incorrect');
        return false
    }
}

function changeClass(item, className) {
    let privateClass = item.className.split(' ')[0];
    
    item.className='';
    item.className = `${privateClass} ${className}`;

    let parrentPrivateClass = item.parentNode.className.split(' ')[0]
    item.parentNode.className='';
    item.parentNode.className = `${parrentPrivateClass} ${className}`;
}