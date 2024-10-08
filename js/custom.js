
$(window).load(function () {
  $(".preloader").delay(1000).fadeOut(300)
})

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 4000,
  autoplay: true,
  arrows: true,
  dots: true,
  nextArrow: ".next",
  prevArrow: ".prev"
});

// new WOW().init();

AOS.init();

$('.testimonial_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  speed: 4000,
  autoplay: true,
  arrows: false,
  dots: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

$("#colorful").colorfulTab();

$('.partner_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 3000,
  arrows: true,
  dots: false,
  prevArrow: "partner_prev",
  nextArrow: "partner_next",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 3000,
  arrows: false,
  dots: true,
      }
    }
  ]
});



new VenoBox({
  selector: '.my-video-links',
});

$('.gallery').simpleLightbox({
  sourceAttr: 'href',
  overlay: true,
  nav: true,
  fileExt: 'png|jpg|jpeg|gif',
  animationSlide: true,
  enableKeyboard: true,
  close: true,
  closeText: 'X',
});



