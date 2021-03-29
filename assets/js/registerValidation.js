const nameInput = document.getElementById('input-name');
const emailInput = document.getElementById('input-email');
const telInput = document.getElementById('input-tel');
const passwordInput = document.getElementById('input-password');

const messageArea = document.querySelector('.form-messages');

let emailReadyForSend = false,
    passwordReadyForSend = false;


nameInput.addEventListener('focusout', event => {
    let name = event.target.value;
    validateName(name);
});

emailInput.addEventListener('focusout', event => {
    let email = event.target.value;
    validateEmail(email)
});

telInput.addEventListener('focusout', event => {
    let tel = event.target.value;
    validateTel(tel)
})

passwordInput.addEventListener( 'focusout', event => {
    let password = event.target.value;
    validatePassword(password);
})





////////functions

function validateEmail(email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;   
    if(reg.test(email) == false) {
        createMessage('Invalid email format. Please try again', 'error')
       return false;
    } else {
        emailReadyForSend = true;
        return true
    }

};



function validateName(uname) {
    let name = uname.replace(/\s/g, '');
    let letters = /^[A-Za-z]+$/;
    if (name.match(letters) && name.length > 3) {
        return true;
    } else {
        createMessage('The name can contain only Latin letters and must contain more than 3 letters. Correct the error and try again', 'error');
        return false;
    };
};

function validateTel(tel) {
    if(tel.length > 15 || tel.length < 5) {
        createMessage('Invalid mobile phone number. Correct the error and try again', 'error');  
        return false
    } else {
        return true
    }
}

function createMessage(message, type, area = messageArea) {

    // create message depending on the type
    let blockMessage = document.createElement('div');
    blockMessage.textContent = message;
    blockMessage.classList.add('form-messages__item');
    
    if(area.child) {
        return true;
    } 
        if(type === 'error') {
            blockMessage.classList.add('error-message');
        }
        else {
            blockMessage.classList.add('success-message');
        }
    
        // add block to html
        
        area.insertAdjacentElement('afterbegin', blockMessage);
        
        let messageInHtml = document.querySelector('.form-messages__item');
    
        // animation block appearance
        setTimeout( ()=> {  
    
            messageInHtml.classList.add('active');
        },0);
    
        setTimeout( () => {
    
            messageInHtml.classList.remove('active');
    
            // after animation delete block with message
            setTimeout (()=> {
                area.innerHTML = '';
            }, 700);
    
    
        }, 4000);
    
    
    
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
            passwordReadyForSend = true;
            return true
    } else {
        createMessage('The password must contain letters, must not start with a number, must not contain special characters and must be at least 8 characters long.', 'error');
        return false
    }
}