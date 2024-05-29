
const menuIcon = document.getElementById('menu-icon');

const links = document.getElementById('responsive-menu');
menuIcon.addEventListener('click', function () {
    links.classList.add('active')
    document.body.classList.add('no-scroll');

})

const menu_close = document.getElementById('menu-close');

menu_close.addEventListener('click', function () {
    links.classList.remove('active')
    document.body.classList.remove('no-scroll');

})







