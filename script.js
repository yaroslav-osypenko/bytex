const mainSwiper = new Swiper('.values-brands-list-slider', {
  wrapperClass: 'values-brands-list-wrapper',
  slideClass: 'values-brands-list-item',

  loop: true,
  grabCursor: true,

  slidesPerView: 5,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1
  }
});


const thumbsSwiper = new Swiper(".values-thumbs-swiper", {
  wrapperClass: 'values-thumbs-swiper-wrapper',
  slideClass: 'values-thumb-swiper-slide',
  slidesPerView: '8',
  spaceBetween: 7,
  watchSlidesProgress: true,
});


const glSwiper = new Swiper(".values-swiper", {
  wrapperClass: 'values-swiper-wrapper',
  slideClass: 'values-swiper-slide',
  navigation: {
    nextEl: ".values-swiper-button-next",
    prevEl: ".values-swiper-button-prev",
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
});