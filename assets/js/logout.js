const logoutBtn = document.querySelector('.success__message__btn');

logoutBtn.addEventListener('click', event => {
    event.preventDefault();

    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = 'login';
})