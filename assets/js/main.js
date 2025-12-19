$(document).ready(function(){



    // color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    // bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // bg img
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", `url(${$(this).data('bg-img')})`);
    });

    // testimonial slider
    var swiper = new Swiper(".mh-testimonial-active", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        prevEl: ".mh-test-arrow-prev",
        nextEl: ".mh-test-arrow-next",
      },
    });

    // brand slider yellow
      var swiper = new Swiper(".mh-brand-yellow-active", {
      slidesPerView: 'auto',
      spaceBetween: 80,
      loop: true,
      speed: 4000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      }
    });

    // brand slider blue
      var swiper = new Swiper(".mh-brand-blue-active", {
      slidesPerView: 'auto',
      spaceBetween: 80,
      loop: true,
      speed: 4000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      }
    });

    // Team Slider
      var swiper = new Swiper(".mh-team-slider-active", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        prevEl: ".mh-team-slider-prev",
        nextEl: ".mh-team-slider-next",
      },
    });


});