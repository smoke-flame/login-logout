const logoutBtn = document.querySelector('.success__btn');

let userInfo = {
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password')
};

let infoHTML = document.createElement('p');
infoHTML.classList.add('success__info');
infoHTML.textContent = `Your email is - ${userInfo.email}. Your password is - ${userInfo.password}`;

const blockInfo = document.querySelector('.success__info');
blockInfo.insertAdjacentElement('beforeend', infoHTML)



logoutBtn.addEventListener('click', event => {
    event.preventDefault();

    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('number');
    localStorage.removeItem('password');

    createMessage('You have successfully logged out of your account', 'success');

    setTimeout(() => {
        window.location.href = 'login';
    }, 2000)

})