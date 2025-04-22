
const swiper = new Swiper('.Destination-images', {
    slidesPerView: 2, // Show one slide at a time initially
    spaceBetween: 20, // Space between slides
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    navigation: {
      nextEl: '.swiper-button-next', // Right arrow navigation
      prevEl: '.swiper-button-prev', // Left arrow navigation
    },
    pagination: {
      el: '.swiper-pagination', // Pagination dots
      clickable: true, // Allow clicking on dots to navigate
    },
    breakpoints: {
      640: {
        slidesPerView: 2, // Show 2 slides on small screens
      },
      768: {
        slidesPerView: 3, // Show 3 slides on medium screens
      },
      1024: {
        slidesPerView: 4, // Show 4 slides on larger screens
      },
    },
  });