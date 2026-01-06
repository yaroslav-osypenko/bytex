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

const preferencesSwiper = new Swiper('.preferences-slider', {
  wrapperClass: 'preferences-slider-wrapper',
  slideClass: 'preferences-slider-slide',
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  breakpoints: {
    850: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".preferences-slider-next",
    prevEl: ".preferences-slider-prev",
  },
});

const reviewSwiper = new Swiper('.review-slider', {
  wrapperClass: 'review-slider-wrapper',
  slideClass: 'review-slider-slide',
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".review-slider-next",
    prevEl: ".review-slider-prev",
  },
});

document.querySelectorAll('.questions__acordion').forEach((details) => {
  const summary = details.querySelector('summary');
  const content = details.querySelector('.process__acordion-text');

  summary.addEventListener('click', (e) => {
    e.preventDefault();

    if (!details.hasAttribute('open')) {
      document.querySelectorAll('.questions__acordion[open]').forEach((openDetails) => {
        closeElement(openDetails);
      });
      openElement(details);
    } else {
      closeElement(details);
    }
  });

  function openElement(el) {
    const content = el.querySelector('.process__acordion-text');
    el.style.overflow = 'hidden';
    el.setAttribute('open', '');

    const startHeight = 0;
    const endHeight = content.offsetHeight;

    el.animate([
      { height: summary.offsetHeight + 'px' },
      { height: (summary.offsetHeight + endHeight) + 'px' }
    ], {
      duration: 300,
      easing: 'ease-out'
    });
  }

  function closeElement(el) {
    const content = el.querySelector('.process__acordion-text');
    const startHeight = el.offsetHeight;
    const endHeight = summary.offsetHeight;

    const anim = el.animate([
      { height: startHeight + 'px' },
      { height: endHeight + 'px' }
    ], {
      duration: 300,
      easing: 'ease-out'
    });

    anim.onfinish = () => el.removeAttribute('open');
  }
});