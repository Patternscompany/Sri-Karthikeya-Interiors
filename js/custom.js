!(function (e) {
  "use strict";

  function t() {
    jQuery(".site-footer").css("display", "block"),
      jQuery(".site-footer").css("height", "auto");
    var e = jQuery(".site-footer").outerHeight();
    jQuery(".footer-fixed > .page-wraper").css("padding-bottom", e),
      jQuery(".site-footer").css("height", e);
  }

  function a(e) {
    var t,
      a = 0,
      i = 0,
      o = new Array(),
      r = 0;
    jQuery(e).each(function () {
      (t = jQuery(this)), jQuery(t).height("auto");
      var e = t.position().top;
      if (i != e) {
        for (r = 0; r < o.length; r++) o[r].height(a);
        (o.length = 0), (i = e), (a = t.height()), o.push(t);
      } else o.push(t), (a = a < t.height() ? t.height() : a);
      for (r = 0; r < o.length; r++) o[r].height(a);
    });
  }

  function i() {
    jQuery(window).on("scroll", function () {
      jQuery(".progress-bar").each(function () {
        (i = jQuery(this).attr("aria-valuenow")), jQuery(this).width(i + "%");
      });
    });
  }
  jQuery(document).ready(function () {
    jQuery('a[href="#search"]').on("click", function (e) {
      jQuery("#search").addClass("open"),
        jQuery('#search > form > input[type="search"]').focus();
    }),
      jQuery("#search, #search button.close").on("click keyup", function (e) {
        (e.target !== this && "close" !== e.target.className) ||
          jQuery(this).removeClass("open");
      }),
      jQuery(".contact-slide-show").on("click", function () {
        jQuery(".contact-slide-hide").animate({
          right: "0px",
        });
      }),
      jQuery(".contact_close").on("click", function () {
        jQuery(".contact-slide-hide").animate({
          right: "-500px",
        });
      }),
      jQuery(function () {
        jQuery(".bg-moving").bgscroll({
          scrollSpeed: 20,
          direction: "h",
        });
      }),
      jQuery('iframe[src*="youtube.com"]').wrap(
        '<div class="embed-responsive embed-responsive-16by9"></div>'
      ),
      jQuery('iframe[src*="vimeo.com"]').wrap(
        '<div class="embed-responsive embed-responsive-16by9"></div>'
      ),
      jQuery(".mfp-gallery").magnificPopup({
        delegate: ".mfp-link",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
          enabled: !0,
          navigateByImgClick: !0,
          preload: [0, 1],
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
      }),
      jQuery(".mfp-video").magnificPopup({
        type: "iframe",
      }),
      jQuery(function () {
        function e() {
          var e = jQuery(this),
            t = e.find(".modal-dialog");
          e.css("display", "block"),
            t.css(
              "margin-top",
              Math.max(0, (jQuery(window).height() - t.height()) / 2)
            );
        }
        jQuery(".modal").on("show.bs.modal", e),
          jQuery(window).on("resize", function () {
            jQuery(".modal:visible").each(e);
          });
      }),
      jQuery(".sticky-header").length &&
        new Waypoint.Sticky({
          element: jQuery(".sticky-header"),
        }),
      jQuery("button.scroltop").on("click", function () {
        return (
          jQuery("html, body").animate(
            {
              scrollTop: 0,
            },
            1e3
          ),
          !1
        );
      }),
      jQuery(window).on("scroll", function () {
        jQuery(window).scrollTop() > 900
          ? jQuery("button.scroltop").fadeIn(1e3)
          : jQuery("button.scroltop").fadeOut(1e3);
      }),
      jQuery(document).on("change", ".btn-file :file", function () {
        var e = jQuery(this),
          t = e.get(0).files ? e.get(0).files.length : 1,
          a = e.val().replace(/\\/g, "/").replace(/.*\//, "");
        e.trigger("fileselect", [t, a]);
      }),
      jQuery(".btn-file :file").on("fileselect", function (e, t, a) {
        var i = jQuery(this).parents(".input-group").find(":text"),
          o = t > 10 ? t + " files selected" : a;
        i.length ? i.val(o) : o && alert(o);
      }),
      (jQuery.support.placeholder =
        "placeholder" in document.createElement("input")),
      jQuery.support.placeholder ||
        (jQuery("[placeholder]")
          .on("focus", function () {
            jQuery(this).val() === jQuery(this).attr("placeholder") &&
              jQuery(this).val("");
          })
          .blur(function () {
            "" === jQuery(this).val() &&
              jQuery(this).val(jQuery(this).attr("placeholder"));
          })
          .blur(),
        jQuery("[placeholder]")
          .parents("form")
          .on("submit", function () {
            jQuery(this)
              .find("[placeholder]")
              .each(function () {
                jQuery(this).val() === jQuery(this).attr("placeholder") &&
                  jQuery(this).val("");
              });
          })),
      t(),
      e(".acod-head a").on("click", function () {
        e(".acod-head").removeClass("acc-actives"),
          e(this).parents(".acod-head").addClass("acc-actives"),
          e(".acod-title").removeClass("acc-actives"),
          e(this).parent().addClass("acc-actives"),
          e(this).parents(".acod-head").attr("class");
      }),
      // jQuery(".sub-menu").parent("li").addClass("has-child"),
      // jQuery(".mega-menu").parent("li").addClass("has-child"),
      // jQuery(
      //   "<div class='fa fa-close submenu-toogle'>--</div>"
      // ).insertAfter(".has-child > a"),
      // jQuery(".has-child a+.submenu-toogle").on("click", function (e) {
      //   jQuery(this)
      //     .next(jQuery(".sub-menu"))
      //     .slideToggle("fast", function () {
      //       jQuery(this).parent().toggleClass("nav-active");
      //     }),
      //     e.stopPropagation();
      // }),
      jQuery(".testimonial-home").owlCarousel({
        loop: !0,
        autoplay: !0,
        margin: 30,
        nav: !1,
        dots: !0,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          991: {
            items: 3,
          },
        },
      }),
      jQuery(".testimonial-home-2").owlCarousel({
        loop: !0,
        autoplay: !0,
        margin: 30,
        nav: !1,
        dots: !0,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          991: {
            items: 1,
          },
        },
      }),
      jQuery(".inner-testimonial").owlCarousel({
        loop: !0,
        autoplay: !0,
        margin: 30,
        nav: !1,
        dots: !0,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          991: {
            items: 1,
          },
        },
      }),
      jQuery(".about-home").owlCarousel({
        loop: !0,
        autoplay: !0,
        margin: 30,
        nav: !1,
        dots: !0,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          991: {
            items: 1,
          },
        },
      }),
      jQuery(".home-client-carousel").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !0,
        dots: !1,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          480: {
            items: 3,
          },
          767: {
            items: 4,
          },
          1000: {
            items: 5,
          },
        },
      }),
      jQuery(".home-client-carousel-2").owlCarousel({
        loop: !0,
        margin: 0,
        autoplay: !0,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        nav: !1,
        dots: !0,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          480: {
            items: 3,
          },
          767: {
            items: 4,
          },
          1000: {
            items: 5,
          },
        },
      }),
      jQuery(".about-us-carousel").owlCarousel({
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        margin: 30,
        nav: !1,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        items: 1,
        dots: !0,
      }),
      e(".input input , .input textarea")
        .focus(function () {
          e(this)
            .parent(".input")
            .each(function () {
              e("label", this).css({
                "line-height": "18px",
                "font-size": "12px",
                "font-weight": "500",
                top: "0px",
              }),
                e(".spin", this).css({
                  width: "100%",
                });
            });
        })
        .blur(function () {
          e(".spin").css({
            width: "0px",
          }),
            "" == e(this).val() &&
              e(this)
                .parent(".input")
                .each(function () {
                  e("label", this).css({
                    "line-height": "40px",
                    "font-size": "12px",
                    "font-weight": "500",
                    top: "10px",
                  });
                });
        });
  }),
    jQuery(window).on("load", function () {
      a(".equal-wraper .equal-col"),
        (function () {
          if (jQuery().isotope) {
            var e = jQuery(".portfolio-wrap");
            e.isotope({
              itemSelector: ".masonry-item",
              transitionDuration: "1s",
              originLeft: !0,
              stamp: ".stamp",
            }),
              jQuery(".masonry-filter li").on("click", function () {
                var t = jQuery(this).find("a").attr("data-filter");
                return (
                  jQuery(".masonry-filter li").removeClass("active"),
                  jQuery(this).addClass("active"),
                  e.isotope({
                    filter: t,
                  }),
                  !1
                );
              });
          }
        })(),
        jQuery(function () {
          jQuery.stellar({
            horizontalScrolling: !1,
            verticalOffset: 100,
          });
        }),
        e(".loading-area").fadeOut(1e3),
        jQuery(".work-carousel").owlCarousel({
          loop: !0,
          autoplay: !1,
          center: !1,
          items: 3,
          margin: 40,
          nav: !0,
          dots: !1,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
          ],
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            991: {
              items: 3,
            },
            1200: {
              items: 4,
            },
          },
        }),
        jQuery(".similar-projects").owlCarousel({
          loop: !0,
          autoplay: !0,
          center: !1,
          items: 3,
          margin: 40,
          nav: !0,
          dots: !1,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
          ],
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            991: {
              items: 3,
            },
            1200: {
              items: 4,
            },
          },
        }),
        jQuery(function () {
          jQuery('[data-toggle="tooltips"]')
            .tooltip({
              trigger: "manual",
            })
            .tooltip("show");
        }),
        i();
    }),
    jQuery(window).on("scroll", function () {
      e(window).scrollTop() >= 100
        ? e(".is-fixed").addClass("color-fill")
        : e(".is-fixed").removeClass("color-fill");
    }),
    jQuery(window).on("resize", function () {
      t(), a(".equal-wraper .equal-col");
    }),
    jQuery(document).on("submit", "form.cons-contact-form", function (e) {
      e.preventDefault();
      var t = jQuery(this);
      return (
        jQuery.ajax({
          url: "http://7xtheme.com/shapen/form-handler.php",
          data: t.serialize() + "&action=contactform",
          type: "POST",
          dataType: "JSON",
          beforeSend: function () {
            jQuery(".loading-area").show();
          },
          success: function (e) {
            jQuery(".loading-area").hide(),
              e.success
                ? jQuery(
                    "<div class='alert alert-success'>" + e.message + "</div>"
                  ).insertBefore("form.cons-contact-form")
                : jQuery(
                    "<div class='alert alert-danger'>" + e.message + "</div>"
                  ).insertBefore("form.cons-contact-form");
          },
        }),
        jQuery(".cons-contact-form").trigger("reset"),
        !1
      );
    }),
    jQuery(document).on("submit", "form.cons-contact-form2", function (e) {
      e.preventDefault();
      var t = jQuery(this);
      return (
        jQuery.ajax({
          url: "http://7xtheme.com/shapen/form-handler2.php",
          data: t.serialize() + "&action=contactform",
          type: "POST",
          dataType: "JSON",
          beforeSend: function () {
            jQuery(".loading-area").show();
          },
          success: function (e) {
            jQuery(".loading-area").hide(),
              e.success
                ? jQuery(
                    "<div class='alert alert-success'>" + e.message + "</div>"
                  ).insertBefore("form.cons-contact-form2")
                : jQuery(
                    "<div class='alert alert-danger'>" + e.message + "</div>"
                  ).insertBefore("form.cons-contact-form2");
          },
        }),
        jQuery(".cons-contact-form2").trigger("reset"),
        !1
      );
    });
    const $btn = $(".fa-angle-down");
const $submenu = $(".header-nav .nav > li .sub-menu");

$btn.on("click", function() {
  $submenu.toggleClass("active");
  $btn.toggleClass("fa-angle-up fa-angle-down");
});
})(window.jQuery);
