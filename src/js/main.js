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

var selectCoursesContainer = document.querySelector('#select-course');
var selectCoursesButton = document.querySelectorAll('#select-course .course-list a');

selectCoursesButton.forEach((item) => {
  item.addEventListener('click', selectCourse);
});


function selectCourse(e) {
  e.preventDefault();
  var targetElem = document.querySelector(e.currentTarget.hash);
  
  var activeCourse = document.querySelector('.course.active')
  if(activeCourse)
  activeCourse.classList.remove('active');

  selectCoursesContainer.classList.add('active');
  targetElem.classList.add('active');
}


var gradeButtons = document.querySelectorAll('.grade a');

gradeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('active');
    e.preventDefault();
  });
})

var secionts = {
  banner: document.querySelector('#banner'),
  courses: document.querySelector('#courses'),
  contact: document.querySelector('#schedule'),
  contact: document.querySelector('#contact')
};
window.addEventListener('scroll', (e) => {
  var header = document.querySelector('header');
  var scrollY = window.scrollY;
  bannerHeight = banner.offsetHeight;
  
  if (scrollY > bannerHeight / 2) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }

  if((scrollY > courses.offsetTop && scrollY < courses.offsetTop + courses.offsetHeight) || 
    ((scrollY > contact.offsetTop && scrollY < contact.offsetTop + contact.offsetHeight))) {
    header.classList.add('bg-iot')
  } else {
    header.classList.remove('bg-iot')
  }

  if(scrollY > schedule.offsetTop && scrollY < schedule.offsetTop + schedule.offsetHeight) {
    header.classList.add('bg-front')
  } else {
    header.classList.remove('bg-front')
  }

});