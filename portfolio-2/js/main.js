/* ============== Setting JS like jQuery =============== */
const $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document);

/* ============== Mixitup Filter =============== */
var mixer = mixitup(".projects__container", {
  selectors: {
    target: ".project__item",
  },
  animation: {
    duration: 300,
  },
});

/* Active Work */
const linkWork = $$(".category__btn");

function activeWork() {
  linkWork.forEach((a) => a.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/* ============== Testimonials Swiper =============== */
var testimonialSwiper = new Swiper(".testimonial__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/* ============== Active Link =============== */
const navLink = $$(".nav__link");

function activeLink() {
  navLink.forEach((a) => a.classList.remove("active-link"));
  this.classList.add("active-link");
}

navLink.forEach((a) => a.addEventListener("click", activeLink));
