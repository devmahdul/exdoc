$(document).ready(function(){


    //Mobile Menu Custom
    var mhMenuHTML = $('.mh-mobile-menu-active > ul').clone();
    var mhOffcanvasMenu = $('.mh-offcanvas-menu > nav');

    mhOffcanvasMenu.append(mhMenuHTML);

    if($(mhOffcanvasMenu).find('.sub-menu').length !=0) {
      $(mhOffcanvasMenu).find('.sub-menu').parent().append('<button class="mh-sidemenu-close"><i class="far fa-chevron-right"></i></button>');
    };

    var mhSideMenuToggle = $('button.mh-sidemenu-close');

    $(mhSideMenuToggle).on('click',function(){
      $(this).siblings('.sub-menu').slideToggle();
      $(this).parent().toggleClass('active');
    });



    // offcanvas
    $(".mh-offcanvas-toggle").on('click',function(){
      $(".mh-offcanvas-area").addClass("mh-offcanvas-open");
      $(".mh-offcanvas-overlay").addClass("mh-offcanvas-overlay-open");
    });

    $(".mh-offcanvas-close-button,.mh-offcanvas-overlay").on('click',function(){
      $(".mh-offcanvas-area").removeClass("mh-offcanvas-open");
      $(".mh-offcanvas-overlay").removeClass("mh-offcanvas-overlay-open");
    });

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

    // width
    $("[data-width]").each(function () {
      $(this).css("width", $(this).attr("data-width"));
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
      },
      breakpoints: {
        300: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 80,
        }
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
      },
      breakpoints: {
        300: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 80,
        }
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
      breakpoints: {
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }
    });

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // popup img
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
    });


});