//WYSUWANIE MENU NA MOBILE

const menu = document.querySelector('.nav-mobile-menu');
const body = document.getElementsByTagName('body')[0];

body.addEventListener('click', function (e) {

    if (e.target.id === 'fa-bars' || e.target.id === 'mobile-btn') {
        menu.classList.toggle('active');
    } else {
        menu.classList.remove('active');
    }
});