"use strict";
(function () {
  // MEMBERS SLIDER

  let musicSlider;
  let starSlider;
  let partnerSlier;

  const breakpoint = window.matchMedia( '(max-width: 743px)' );

  const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed


    if ( breakpoint.matches === true ) {
       // clean up old instances and inline styles when available
       if ( musicSlider !== undefined ) musicSlider.destroy( true, true );
       if ( starSlider !== undefined ) musicSlider.destroy( true, true );
       if ( partnerSlier !== undefined ) musicSlider.destroy( true, true );
       // or/and do nothing
       return;
    // else if a small viewport and single column layout needed
    } else if ( breakpoint.matches === false ) {
       // fire small viewport version of swiper
       return enableSwipers();
    }
 };

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

  const partnersSliderOptions = {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".partners .swiper__next",
      prevEl: ".partners .swiper__prev",
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
  }

  function enableSwipers() {
    musicSlider = new Swiper(".js-slider-music", membersSliderOptions('music'));
    starSlider = new Swiper(".js-slider-stars", membersSliderOptions('stars'));

    //PARTNERS SLIDER
    partnerSlier = new Swiper(".partners .js-slider-inner", partnersSliderOptions);

  }

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();


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
