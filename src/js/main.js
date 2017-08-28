var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100
});   


var toggleMenu = document.querySelector('.toggle-menu');
var menu = document.querySelector('header');

toggleMenu.addEventListener('click', (e) => {
  menu.classList.toggle('active');
});

var selectCoursesContainer = document.querySelector('#select-course');
var selectCoursesButton = document.querySelectorAll('#select-course ul li a');

selectCoursesButton.forEach((item) => {
  item.addEventListener('click', selectCourse);
});


function selectCourse(e) {
  console.log();
  var targetElem = document.querySelector(e.currentTarget.hash);
  selectCoursesContainer.classList.add('active');
  targetElem.classList.add('active');
}
