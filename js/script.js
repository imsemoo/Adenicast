$(document).ready(function () {
  $(".ticker ul").hover(
    function () {
      $(this).css("animation-play-state", "paused");
    },
    function () {
      $(this).css("animation-play-state", "running");
    }
  );

  $("#toggleTheme").click(function () {
    $("body").toggleClass("dark-theme");
  });


  // $(".owl-carousel").owlCarousel({
  //   loop: true,
  //   margin: 30,

  //   nav: true,
  //   rtl: true,
  //   navText: [
  //     '<i class="fas fa-chevron-right"></i>',
  //     '<i class="fas fa-chevron-left"></i>',
  //   ],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 4,
  //     },
  //   },
  // });
  // تفعيل Owl Carousel
  $("#videos-carousel").owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    dots:false,
    navText: [
      '<i class="fas fa-chevron-right"></i>',
      '<i class="fas fa-chevron-left"></i>',
    ],
    autoplay: true, // تشغيل الفيديو تلقائيًا
    autoplayTimeout: 5000, // وقت الانتقال بين الفيديوهات (5 ثواني)
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
