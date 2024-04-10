document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 5000, // Auto-play delay in milliseconds
    },
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,

    // If pagination required
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
});