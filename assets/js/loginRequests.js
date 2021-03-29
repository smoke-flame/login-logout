const loginBtn = document.getElementById('login');
const toRegister = document.getElementById('to-register');

toRegister.addEventListener('click', event => {
    event.preventDefault();
    // console.log(window.location.href);
    window.location.href = '/';
})