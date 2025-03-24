const swiper = new Swiper('.slider-wrapper', {
  
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive beackpoint
    breakpoints:{
      0: {
        slidesPerView:1
      },
      480:{
        slidesPerView:2
      },
      620: {
      slidesPerView: 3
      },
      778:{
        slidesPerView:4
      },
      1024:{
        slidesPerView:5
      },
      1200:{
        slidesPerView:6
      }
      
      
  
    }
  });


  const swiper2 = new Swiper('.slider-wrapperr', {
  
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive beackpoint
    breakpoints:{
      620: {
        slidesPerView:1
      },
    
      
  
    }
  });

  

  // third hero-section 
  const swiperr = new Swiper('.slider-wrappe', {
  
    loop: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive beackpoint
    breakpoints:{
      0: {
        slidesPerView:1
      },
      480:{
        slidesPerView:2
      },
      // 620: {
      // slidesPerView: 3
      // },
      // 778:{
      //   slidesPerView:4
      // },
      
      
      
  
    }
  });