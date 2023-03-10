
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost'

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()

$(".directions_toggle").click(function (e) {
  e.preventDefault();
  var $this = $(this);
  if ($this.parent().hasClass("show")) {
    $this.parent().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.parent().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

var e = document.querySelectorAll(".js_scroll-text"),
  a = document.querySelectorAll(".js_sticky-img");
window.addEventListener("scroll", function () {
  e.forEach(function (e, t) {
    var s;
    (s = e.getBoundingClientRect()).top >= 0 &&
      s.left >= 0 &&
      s.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      s.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      (a.forEach(function (e) {
        e.classList.remove("active");
      }),
      a[t].classList.add("active"));
  });
});

$('.slider-training').slick({
  dots: false,
  dotsClass: 'slider-training_nav',
  arrows: true,
  infinite: true,
  speed: 500,
  centerMode: true,
  fade: true,
  cssEase: 'linear',
  prevArrow: '<img class="slider-training_left" src="images/arrow-left-bg.png" alt="">',
  nextArrow: '<img class="slider-training_right" src="images/arrow-right-bg.png" alt="">',
});

$('.slider-training_nav').slick({
  focusOnSelect: true,
  centerMode: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-training',
  prevArrow: '<img class="slider-training_left" src="images/arrow-left.png" alt="">',
  nextArrow: '<img class="slider-training_right" src="images/arrow-right.png" alt="">',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
});

$('.marquee').marquee({
  duration: 7000,

	gap: 50,

	delayBeforeStart: 0,

	direction: 'left',

	duplicated: true
});