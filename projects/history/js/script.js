const btn__burger = document.querySelector('#btn-burger');
const btn__close = document.querySelector('#btn-close');
const menu__open = document.querySelector('.dropdown');
const header = document.querySelector('#header');


btn__burger.addEventListener('click', function(){
    header.classList.add('menu-open');

    btn__close.addEventListener('click', function(){

        header.classList.replace('menu-open', 'header')
    })
})