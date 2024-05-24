
const menuIcon = document.getElementById('menu-icon');

const links = document.getElementById('menu');
menuIcon.addEventListener('click', function () {
    links.classList.add('active')


})

const menu_close = document.getElementById('menu-close');

menu_close.addEventListener('click', function () {
    links.classList.remove('active')
})





