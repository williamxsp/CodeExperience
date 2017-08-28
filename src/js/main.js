var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100
});   


var toggleMenu = document.querySelector('.toggle-menu');
var menu = document.querySelector('header');

toggleMenu.addEventListener('click', (e) => {
  menu.classList.toggle('active');
});