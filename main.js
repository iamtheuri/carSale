let search = document.querySelector('.search-box');

document.querySelector('#search-icon').addEventListener('click', () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
});

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').addEventListener('click', () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
});
// Hide Menu & Search Bar On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});