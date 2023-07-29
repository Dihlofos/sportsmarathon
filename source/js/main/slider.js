"use strict";
(function () {
  // MEMBERS SLIDER

  const membersSliderOptions = (select) => {
    return {
      // Optional parameters
      loop: true,
      slidesPerView: 'auto',
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: `.${select}.swiper__next`,
        prevEl: `.${select}.swiper__prev`,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        1025: {
          slidesPerView: 4,
          spaceBetween: 34,
        },
      },
    }
  }

  new Swiper(".js-slider-music", membersSliderOptions('music'));
  new Swiper(".js-slider-stars", membersSliderOptions('stars'));

  //PARTNERS SLIDER

  new Swiper(".js-slider-inner", {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },

      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

      1025: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  if (isTouchDevice()) {
    const slides = document.querySelectorAll('.js-slider .swiper-slide');
    slides.forEach((slide)=>{
      slide.addEventListener('click', ()=>{
        slide.classList.toggle('hover');
      })
    })

} else {
    return;
}

function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}


})();
