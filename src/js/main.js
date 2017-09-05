const windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var header = document.querySelector('header');

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

toggleMenu.parentNode.querySelectorAll("nav ul a").forEach(link => {
  link.addEventListener("click", clickE =>{
    clickE.preventDefault();
    var targetElem = document.querySelector(clickE.currentTarget.hash);
    window.scrollBy({top:targetElem.getBoundingClientRect().top - document.querySelector("header").getBoundingClientRect().height, behavior: 'smooth' });
    menu.classList.toggle('active');

  })
})

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
  window.scrollBy({top:targetElem.getBoundingClientRect().top - document.querySelector("header").getBoundingClientRect().height, behavior: 'smooth' });
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

var sections = document.querySelectorAll("body > section");
function verifySectionsActive(){
    var offsets = [].map.call(sections,  section => {
        header.classList.remove(section.id);
        return { id: section.id, y: Math.abs(section.getBoundingClientRect().top)}
    });

    var newOffsets =  offsets.sort((a,b)=>a.y > b.y);
    header.classList.add(newOffsets[0].id);

    var activeLink = header.querySelector("a.active");
    if(activeLink)
        activeLink.classList.remove('active');
    var nextLink = header.querySelector("a[href='#"+newOffsets[0].id+"']");
    if(nextLink)
        nextLink.classList.add('active');

};

window.addEventListener('scroll', (e) => {
  var scrollY = window.scrollY;
  bannerHeight = banner.offsetHeight;
  
  if (scrollY > header.offsetHeight) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
    verifySectionsActive();


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

let typed = new Typed('.typing', { 
  strings: ["mobile", "front-end", "back-end", "iot"],
  typeSpeed:70,
  backSpeed:50,
  backDelay: 1500,
  loop: true,
})