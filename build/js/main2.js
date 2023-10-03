"use strict";
(function () {
  let upButton = document.querySelector(".up");

  if (upButton) {
    window.onscroll = function () {
      if (window.pageYOffset > 260) {
        upButton.classList.add("up--shown");
      } else {
        upButton.classList.remove("up--shown");
      }
    };
  }
})();

"use strict";
(function () {
  const dropdowns = document.querySelectorAll(".js-dropdown");

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".js-dropdown-trigger");

    trigger.addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });
  });
})();

"use strict";
(function () {
  const togglers = document.querySelectorAll(".js-faq-toggler");
  if (!togglers.length) return;

  togglers.forEach((toggler) => {
    toggler.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (!target) return;
      const content = target.nextElementSibling;
      if (!content) return;
      target.classList.toggle("active");
      content.classList.toggle("active");
    });
  });
})();

"use strict";
(function () {
  const nav = document.querySelector('.js-nav');
  const toggler = document.querySelector('.js-nav-toggler');
  const closeButtons = document.querySelectorAll('.js-nav-close');
  const links = nav.querySelectorAll('.js-scroll');

  toggler.addEventListener('click', () => {
    nav.classList.toggle('is-active');
  })

  closeButtons.forEach((item)=> {

    item.addEventListener('click', () => {
      console.log('here?');
      closeNav();
    })
  })

  links.forEach((link) => {
    link.addEventListener('click', () => {
      closeNav();
    })
  })


  function closeNav() {
    nav.classList.remove('is-active');
  }


})();

"use strict";
(function () {
  // MEMBERS SLIDER

  let musicSlider;
  let starSlider;
  let partnerSlier;
  let photoSlider;

  const breakpoint = window.matchMedia("(max-width: 743px)");

  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    photoSlider = new Swiper(".photos .js-slider-inner", photosSliderOptions);

    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (musicSlider !== undefined) musicSlider.destroy(true, true);
      if (starSlider !== undefined) starSlider.destroy(true, true);
      if (partnerSlier !== undefined) partnerSlier.destroy(true, true);
      // or/and do nothing
      return;
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwipers();
    }
  };

  const membersSliderOptions = (select) => {
    return {
      // Optional parameters
      loop: true,
      slidesPerView: "auto",
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
    };
  };

  const partnersSliderOptions = {
    // Optional parameters
    loop: true,
    slidesPerView: "auto",
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
  };

  const photosSliderOptions = {
    // Optional parameters
    loop: false,
    slidesPerView: "auto",
    allowTouchMove: false,
    speed: 1000,
    navigation: {
      nextEl: ".photos .swiper__next",
      prevEl: ".photos .swiper__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: true,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        allowTouchMove: true,
      },

      1025: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
    },
  };

  function enableSwipers() {
    const partnersSliderWrapper = document.querySelector(
      ".partners .swiper-wrapper"
    );
    musicSlider = new Swiper(".js-slider-music", membersSliderOptions("music"));
    starSlider = new Swiper(".js-slider-stars", membersSliderOptions("stars"));
    partnerSlier = new Swiper(
      ".partners .js-slider-inner",
      partnersSliderOptions
    );
  }

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();

  if (isTouchDevice()) {
    const slides = document.querySelectorAll(".js-slider .swiper-slide");
    slides.forEach((slide) => {
      slide.addEventListener("click", () => {
        slide.classList.toggle("hover");
      });
    });
  } else {
    return;
  }

  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
})();

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();
