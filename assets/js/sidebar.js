// panel menu

const sidebarPanel = document.querySelector('.panel__body__list');
const sidebarItems = document.querySelectorAll('.panel__body__list__item');

sidebarPanel.addEventListener('click', event => {

   sidebarItems.forEach(item => item.classList.contains('active') ? item.classList.remove('active') : false);

   if (event.target.classList.contains('panel__body__list__item')) {
      event.target.classList.add('active')
   } else {
      event.target.parentNode.classList.add('active')
   }

})