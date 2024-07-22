window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})
const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    document.body.classList.toggle('overflow-hidden');
});
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove('show');
    document.body.classList.remove('overflow-hidden');
});


// Carousal section
$(document).ready(function() {
    var carousel = $('#carouselExampleCaptions');

    // Reduce interval to 3 seconds after 5 seconds
    setTimeout(function() {
        carousel.carousel({
            interval: 3000
        });
    }, 5000);
  
});


// const swiperEl = document.querySelector('swiper-container');

// // swiper parameters
// const swiperParams = {
//   slidesPerView: 1,
//   breakpoints: {
//     700: {
//       slidesPerView: 1,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
//   on: {
//     init() {
//       // ...
//     },
//   },
// };

// // now we need to assign all parameters to Swiper element
// Object.assign(swiperEl, swiperParams);

// // and now initialize it
// swiperEl.initialize();

// const swiperEl = document.querySelector('swiper-container');

// swiperEl.addEventListener('swiper-progress', (event) => {
//   const [swiper, progress] = event.detail;
// });

// swiperEl.addEventListener('swiper-slidechange', (event) => {
//   console.log('slide changed');
// });

