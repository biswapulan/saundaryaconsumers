

document.querySelector('.openSlideBar').addEventListener('click', function() {
    document.querySelector('.slideBar').style.display = 'flex'
})
document.querySelector('.slideBar img').addEventListener('click', function() {
    document.querySelector('.slideBar').style.display = 'none'
})

var typed = new Typed(".autoType", {
    strings : ["Beauty Products", "Salon Booking", "Doorstep Beautician"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination Bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });