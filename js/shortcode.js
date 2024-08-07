jQuery(document).ready(function () {
  "use strict";
  jQuery(".widget-client").owlCarousel({
    loop: !0,
    autoplay: !0,
    items: 1,
    nav: !1,
    dots: !0,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  }),
    jQuery(".client-logo-carousel-3").owlCarousel({
      loop: !0,
      margin: 30,
      nav: !1,
      dots: !0,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        767: { items: 3 },
        1000: { items: 3 },
      },
    }),
    jQuery(".client-logo-carousel-2").owlCarousel({
      loop: !0,
      margin: 30,
      nav: !0,
      dots: !1,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        767: { items: 2 },
        1000: { items: 2 },
      },
    }),
    jQuery(".client-logo-carousel-1").owlCarousel({
      loop: !0,
      margin: 30,
      nav: !0,
      dots: !1,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        767: { items: 1 },
        1000: { items: 1 },
      },
    }),
    jQuery(".owl-fade-slider-one").owlCarousel({
      loop: !0,
      autoplay: !0,
      autoplayTimeout: 1e3,
      margin: 30,
      nav: !0,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      items: 1,
      dots: !1,
      animateOut: "fadeOut",
    }),
    jQuery(".owl-slide-slider-one").owlCarousel({
      loop: !0,
      autoplay: !0,
      autoplayTimeout: 2e3,
      margin: 30,
      nav: !0,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      items: 1,
      dots: !0,
    }),
    jQuery(".counter").counterUp({ delay: 10, time: 5e3 });
});
