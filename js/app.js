let nav = document.querySelector('.nav')
let menu = document.querySelector('.menu')
let menuIcon = document.querySelector('.menu__icon')

menu.addEventListener('click', function(){
    menuIcon.classList.toggle('fa-times')
    nav.classList.toggle('nav-active')
})