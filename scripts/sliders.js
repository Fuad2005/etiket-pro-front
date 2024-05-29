var swiper = new Swiper(".about-mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
    },
loop:true,  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 548px
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is > 548px and <= 992px
      549: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is > 992px
      993: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  