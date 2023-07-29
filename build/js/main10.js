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

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();
