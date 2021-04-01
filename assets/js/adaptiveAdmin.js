const menuBtn = document.querySelector('.header__menu');

const menu = document.querySelector('.panel');
const body = document.querySelector('.container')

menuBtn.addEventListener('click', () => {
    if (window.innerWidth < 1300) {
        menu.classList.toggle('active');
        body.classList.toggle('masked')
        //apply a semi-transparent mask to the rest of the page
    }

});



