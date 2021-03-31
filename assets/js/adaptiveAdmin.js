const menuBtn = document.querySelector('.header__menu');

const menu = document.querySelector('.panel');

menuBtn.addEventListener('click', () => {
    if (window.innerWidth < 1300) {
        menu.classList.toggle('active');
        //apply a semi-transparent mask to the rest of the page
    }

})