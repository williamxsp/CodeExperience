const windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;


var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView:windowWidth > 800 ? 2 : 1,
  pagination:'.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev'
});   


var toggleMenu = document.querySelector('.toggle-menu');
var menu = document.querySelector('header');

toggleMenu.addEventListener('click', (e) => {
  menu.classList.toggle('active');
});
   
