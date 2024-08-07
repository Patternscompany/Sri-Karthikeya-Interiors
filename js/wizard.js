function readURL(t) {
    if (t.files && t.files[0]) {
        var e = new FileReader;
        e.onload = function(t) {
            $("#wizardPicturePreview").attr("src", t.target.result).fadeIn("slow")
        }
        ,
        e.readAsDataURL(t.files[0])
    }
}
function refreshAnimation(t, e) {
    total_steps = t.find("li").length,
    move_distance = t.width() / total_steps,
    step_width = move_distance,
    move_distance *= e,
    $current = e + 1,
    1 == $current ? move_distance -= 8 : $current == total_steps && (move_distance += 8),
    t.find(".moving-tab").css("width", step_width),
    $(".moving-tab").css({
        transform: "translate3d(" + move_distance + "px, 0, 0)",
        transition: "all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)"
    })
}

$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 2000,
            easing: 'easeInQuad',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

function debounce(t, e, i) {
    var n;
    return function() {
        var r = this
          , s = arguments;
        clearTimeout(n),
        n = setTimeout(function() {
            n = null,
            i || t.apply(r, s)
        }, e),
        i && !n && t.apply(r, s)
    }
}
!function(t) {
    var e = function(e, i) {
        e = t(e);
        var n = this
          , r = 'li:has([data-toggle="tab"])'
          , s = t.extend({}, t.fn.bootstrapWizard.defaults, i)
          , a = null
          , o = null;
        this.rebindClick = function(t, e) {
            t.unbind("click", e).bind("click", e)
        }
        ,
        this.fixNavigationButtons = function() {
            if (a.length || (o.find("a:first").tab("show"),
            a = o.find(r + ":first")),
            t(s.previousSelector, e).toggleClass("disabled", n.firstIndex() >= n.currentIndex()),
            t(s.nextSelector, e).toggleClass("disabled", n.currentIndex() >= n.navigationLength()),
            n.rebindClick(t(s.nextSelector, e), n.next),
            n.rebindClick(t(s.previousSelector, e), n.previous),
            n.rebindClick(t(s.lastSelector, e), n.last),
            n.rebindClick(t(s.firstSelector, e), n.first),
            s.onTabShow && "function" == typeof s.onTabShow && !1 === s.onTabShow(a, o, n.currentIndex()))
                return !1
        }
        ,
        this.next = function(t) {
            return !e.hasClass("last") && ((!s.onNext || "function" != typeof s.onNext || !1 !== s.onNext(a, o, n.nextIndex())) && ($index = n.nextIndex(),
            void ($index > n.navigationLength() || o.find(r + ":eq(" + $index + ") a").tab("show"))))
        }
        ,
        this.previous = function(t) {
            return !e.hasClass("first") && ((!s.onPrevious || "function" != typeof s.onPrevious || !1 !== s.onPrevious(a, o, n.previousIndex())) && ($index = n.previousIndex(),
            void ($index < 0 || o.find(r + ":eq(" + $index + ") a").tab("show"))))
        }
        ,
        this.first = function(t) {
            return (!s.onFirst || "function" != typeof s.onFirst || !1 !== s.onFirst(a, o, n.firstIndex())) && (!e.hasClass("disabled") && void o.find(r + ":eq(0) a").tab("show"))
        }
        ,
        this.last = function(t) {
            return (!s.onLast || "function" != typeof s.onLast || !1 !== s.onLast(a, o, n.lastIndex())) && (!e.hasClass("disabled") && void o.find(r + ":eq(" + n.navigationLength() + ") a").tab("show"))
        }
        ,
        this.currentIndex = function() {
            return o.find(r).index(a)
        }
        ,
        this.firstIndex = function() {
            return 0
        }
        ,
        this.lastIndex = function() {
            return n.navigationLength()
        }
        ,
        this.getIndex = function(t) {
            return o.find(r).index(t)
        }
        ,
        this.nextIndex = function() {
            return o.find(r).index(a) + 1
        }
        ,
        this.previousIndex = function() {
            return o.find(r).index(a) - 1
        }
        ,
        this.navigationLength = function() {
            return o.find(r).length - 1
        }
        ,
        this.activeTab = function() {
            return a
        }
        ,
        this.nextTab = function() {
            return o.find(r + ":eq(" + (n.currentIndex() + 1) + ")").length ? o.find(r + ":eq(" + (n.currentIndex() + 1) + ")") : null
        }
        ,
        this.previousTab = function() {
            return n.currentIndex() <= 0 ? null : o.find(r + ":eq(" + parseInt(n.currentIndex() - 1) + ")")
        }
        ,
        this.show = function(t) {
            return isNaN(t) ? e.find(r + " a[href=#" + t + "]").tab("show") : e.find(r + ":eq(" + t + ") a").tab("show")
        }
        ,
        this.disable = function(t) {
            o.find(r + ":eq(" + t + ")").addClass("disabled")
        }
        ,
        this.enable = function(t) {
            o.find(r + ":eq(" + t + ")").removeClass("disabled")
        }
        ,
        this.hide = function(t) {
            o.find(r + ":eq(" + t + ")").hide()
        }
        ,
        this.display = function(t) {
            o.find(r + ":eq(" + t + ")").show()
        }
        ,
        this.remove = function(e) {
            var i = e[0]
              , n = void 0 !== e[1] && e[1]
              , s = o.find(r + ":eq(" + i + ")");
            if (n) {
                var a = s.find("a").attr("href");
                t(a).remove()
            }
            s.remove()
        }
        ;
        var l = function(e) {
            var i = o.find(r).index(t(e.currentTarget).parent(r));
            if (s.onTabClick && "function" == typeof s.onTabClick && !1 === s.onTabClick(a, o, n.currentIndex(), i))
                return !1
        }
          , d = function(e) {
            $element = t(e.target).parent();
            var i = o.find(r).index($element);
            return !$element.hasClass("disabled") && ((!s.onTabChange || "function" != typeof s.onTabChange || !1 !== s.onTabChange(a, o, n.currentIndex(), i)) && (a = $element,
            void n.fixNavigationButtons()))
        };
        this.resetWizard = function() {
            t('a[data-toggle="tab"]', o).off("click", l),
            t('a[data-toggle="tab"]', o).off("shown shown.bs.tab", d),
            o = e.find("ul:first", e),
            a = o.find(r + ".active", e),
            t('a[data-toggle="tab"]', o).on("click", l),
            t('a[data-toggle="tab"]', o).on("shown shown.bs.tab", d),
            n.fixNavigationButtons()
        }
        ,
        o = e.find("ul:first", e),
        a = o.find(r + ".active", e),
        o.hasClass(s.tabClass) || o.addClass(s.tabClass),
        s.onInit && "function" == typeof s.onInit && s.onInit(a, o, 0),
        s.onShow && "function" == typeof s.onShow && s.onShow(a, o, n.nextIndex()),
        t('a[data-toggle="tab"]', o).on("click", l),
        t('a[data-toggle="tab"]', o).on("shown shown.bs.tab", d)
    };
    t.fn.bootstrapWizard = function(i) {
        if ("string" == typeof i) {
            var n = Array.prototype.slice.call(arguments, 1);
            return 1 === n.length && n.toString(),
            this.data("bootstrapWizard")[i](n)
        }
        return this.each(function(n) {
            var r = t(this);
            if (!r.data("bootstrapWizard")) {
                var s = new e(r,i);
                r.data("bootstrapWizard", s),
                s.fixNavigationButtons()
            }
        })
    }
    ,
    t.fn.bootstrapWizard.defaults = {
        tabClass: "nav nav-pills",
        nextSelector: ".wizard li.next",
        previousSelector: ".wizard li.previous",
        firstSelector: ".wizard li.first",
        lastSelector: ".wizard li.last",
        onShow: null,
        onInit: null,
        onNext: null,
        onPrevious: null,
        onLast: null,
        onFirst: null,
        onTabChange: null,
        onTabClick: null,
        onTabShow: null
    }
}(jQuery),
function(t) {
    function e(e) {
        var i = t(e);
        i.prop("disabled") || i.closest(".form-group").addClass("is-focused")
    }
    function i(i) {
        i.closest("label").hover(function() {
            var i = t(this).find("input");
            i.prop("disabled") || e(i)
        }, function() {
            n(t(this).find("input"))
        })
    }
    function n(e) {
        t(e).closest(".form-group").removeClass("is-focused")
    }
    t.expr[":"].notmdproc = function(e) {
        return !t(e).data("mdproc")
    }
    ,
    t.material = {
        options: {
            validate: !0,
            input: !0,
            ripples: !0,
            checkbox: !0,
            togglebutton: !0,
            radio: !0,
            arrive: !0,
            autofill: !1,
            withRipples: [".btn:not(.btn-link)", ".card-image", ".navbar a:not(.withoutripple)", ".footer a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple", ".pagination li:not(.active):not(.disabled) a:not(.withoutripple)"].join(","),
            inputElements: "input.form-control, textarea.form-control, select.form-control",
            checkboxElements: ".checkbox > label > input[type=checkbox]",
            togglebuttonElements: ".togglebutton > label > input[type=checkbox]",
            radioElements: ".radio > label > input[type=radio]"
        },
        checkbox: function(e) {
            i(t(e || this.options.checkboxElements).filter(":notmdproc").data("mdproc", !0).after("<span class='checkbox-material'><span class='check'></span></span>"))
        },
        togglebutton: function(e) {
            i(t(e || this.options.togglebuttonElements).filter(":notmdproc").data("mdproc", !0).after("<span class='toggle'></span>"))
        },
        radio: function(e) {
            i(t(e || this.options.radioElements).filter(":notmdproc").data("mdproc", !0).after("<span class='circle'></span><span class='check'></span>"))
        },
        input: function(e) {
            t(e || this.options.inputElements).filter(":notmdproc").data("mdproc", !0).each(function() {
                var e = t(this)
                  , i = e.closest(".form-group");
                0 === i.length && (e.wrap("<div class='form-group'></div>"),
                i = e.closest(".form-group")),
                e.attr("data-hint") && (e.after("<p class='help-block'>" + e.attr("data-hint") + "</p>"),
                e.removeAttr("data-hint"));
                if (t.each({
                    "input-lg": "form-group-lg",
                    "input-sm": "form-group-sm"
                }, function(t, n) {
                    e.hasClass(t) && (e.removeClass(t),
                    i.addClass(n))
                }),
                e.hasClass("floating-label")) {
                    var n = e.attr("placeholder");
                    e.attr("placeholder", null).removeClass("floating-label");
                    var r = e.attr("id")
                      , s = "";
                    r && (s = "for='" + r + "'"),
                    i.addClass("label-floating"),
                    e.after("<label " + s + "class='control-label'>" + n + "</label>")
                }
                (null === e.val() || "undefined" == e.val() || "" === e.val()) && i.addClass("is-empty"),
                i.append("<span class='material-input'></span>"),
                i.find("input[type=file]").length > 0 && i.addClass("is-fileinput")
            })
        },
        attachInputEventHandlers: function() {
            var i = this.options.validate;
            t(document).on("change", ".checkbox input[type=checkbox]", function() {
                t(this).blur()
            }).on("keydown paste", ".form-control", function(e) {
                (function(t) {
                    return void 0 === t.which || "number" == typeof t.which && t.which > 0 && !t.ctrlKey && !t.metaKey && !t.altKey && 8 != t.which && 9 != t.which && 13 != t.which && 16 != t.which && 17 != t.which && 20 != t.which && 27 != t.which
                }
                )(e) && t(this).closest(".form-group").removeClass("is-empty")
            }).on("keyup change", ".form-control", function() {
                var e = t(this)
                  , n = e.closest(".form-group")
                  , r = void 0 === e[0].checkValidity || e[0].checkValidity();
                "" === e.val() ? n.addClass("is-empty") : n.removeClass("is-empty"),
                i && (r ? n.removeClass("has-error") : n.addClass("has-error"))
            }).on("focus", ".form-control, .form-group.is-fileinput", function() {
                e(this)
            }).on("blur", ".form-control, .form-group.is-fileinput", function() {
                n(this)
            }).on("change", ".form-group input", function() {
                var e = t(this);
                if ("file" != e.attr("type")) {
                    var i = e.closest(".form-group");
                    e.val() ? i.removeClass("is-empty") : i.addClass("is-empty")
                }
            }).on("change", ".form-group.is-fileinput input[type='file']", function() {
                var e = t(this).closest(".form-group")
                  , i = "";
                t.each(this.files, function(t, e) {
                    i += e.name + ", "
                }),
                (i = i.substring(0, i.length - 2)) ? e.removeClass("is-empty") : e.addClass("is-empty"),
                e.find("input.form-control[readonly]").val(i)
            })
        },
        ripples: function(e) {
            t(e || this.options.withRipples).ripples()
        },
        autofill: function() {
            var e = setInterval(function() {
                t("input[type!=checkbox]").each(function() {
                    var e = t(this);
                    e.val() && e.val() !== e.attr("value") && e.trigger("change")
                })
            }, 100);
            setTimeout(function() {
                clearInterval(e)
            }, 1e4)
        },
        attachAutofillEventHandlers: function() {
            var e;
            t(document).on("focus", "input", function() {
                var i = t(this).parents("form").find("input").not("[type=file]");
                e = setInterval(function() {
                    i.each(function() {
                        var e = t(this);
                        e.val() !== e.attr("value") && e.trigger("change")
                    })
                }, 100)
            }).on("blur", ".form-group input", function() {
                clearInterval(e)
            })
        },
        init: function(e) {
            this.options = t.extend({}, this.options, e);
            var i = t(document);
            t.fn.ripples && this.options.ripples && this.ripples(),
            this.options.input && (this.input(),
            this.attachInputEventHandlers()),
            this.options.checkbox && this.checkbox(),
            this.options.togglebutton && this.togglebutton(),
            this.options.radio && this.radio(),
            this.options.autofill && (this.autofill(),
            this.attachAutofillEventHandlers()),
            document.arrive && this.options.arrive && (t.fn.ripples && this.options.ripples && i.arrive(this.options.withRipples, function() {
                t.material.ripples(t(this))
            }),
            this.options.input && i.arrive(this.options.inputElements, function() {
                t.material.input(t(this))
            }),
            this.options.checkbox && i.arrive(this.options.checkboxElements, function() {
                t.material.checkbox(t(this))
            }),
            this.options.radio && i.arrive(this.options.radioElements, function() {
                t.material.radio(t(this))
            }),
            this.options.togglebutton && i.arrive(this.options.togglebuttonElements, function() {
                t.material.togglebutton(t(this))
            }))
        }
    }
}(jQuery),
function(t, e, i, n) {
    "use strict";
    function r(e, i) {
        a = this,
        this.element = t(e),
        this.options = t.extend({}, o, i),
        this._defaults = o,
        this._name = s,
        this.init()
    }
    var s = "ripples"
      , a = null
      , o = {};
    r.prototype.init = function() {
        var i = this.element;
        i.on("mousedown touchstart", function(n) {
            if (!a.isTouch() || "mousedown" !== n.type) {
                i.find(".ripple-container").length || i.append('<div class="ripple-container"></div>');
                var r = i.children(".ripple-container")
                  , s = a.getRelY(r, n)
                  , o = a.getRelX(r, n);
                if (s || o) {
                    var l = a.getRipplesColor(i)
                      , d = t("<div></div>");
                    d.addClass("ripple").css({
                        left: o,
                        top: s,
                        "background-color": l
                    }),
                    r.append(d),
                    e.getComputedStyle(d[0]).opacity,
                    a.rippleOn(i, d),
                    setTimeout(function() {
                        a.rippleEnd(d)
                    }, 500),
                    i.on("mouseup mouseleave touchend", function() {
                        d.data("mousedown", "off"),
                        "off" === d.data("animating") && a.rippleOut(d)
                    })
                }
            }
        })
    }
    ,
    r.prototype.getNewSize = function(t, e) {
        return Math.max(t.outerWidth(), t.outerHeight()) / e.outerWidth() * 2.5
    }
    ,
    r.prototype.getRelX = function(t, e) {
        var i = t.offset();
        return a.isTouch() ? 1 === (e = e.originalEvent).touches.length && e.touches[0].pageX - i.left : e.pageX - i.left
    }
    ,
    r.prototype.getRelY = function(t, e) {
        var i = t.offset();
        return a.isTouch() ? 1 === (e = e.originalEvent).touches.length && e.touches[0].pageY - i.top : e.pageY - i.top
    }
    ,
    r.prototype.getRipplesColor = function(t) {
        return t.data("ripple-color") ? t.data("ripple-color") : e.getComputedStyle(t[0]).color
    }
    ,
    r.prototype.hasTransitionSupport = function() {
        var t = (i.body || i.documentElement).style;
        return t.transition !== n || t.WebkitTransition !== n || t.MozTransition !== n || t.MsTransition !== n || t.OTransition !== n
    }
    ,
    r.prototype.isTouch = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
    ,
    r.prototype.rippleEnd = function(t) {
        t.data("animating", "off"),
        "off" === t.data("mousedown") && a.rippleOut(t)
    }
    ,
    r.prototype.rippleOut = function(t) {
        t.off(),
        a.hasTransitionSupport() ? t.addClass("ripple-out") : t.animate({
            opacity: 0
        }, 100, function() {
            t.trigger("transitionend")
        }),
        t.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            t.remove()
        })
    }
    ,
    r.prototype.rippleOn = function(t, e) {
        var i = a.getNewSize(t, e);
        a.hasTransitionSupport() ? e.css({
            "-ms-transform": "scale(" + i + ")",
            "-moz-transform": "scale(" + i + ")",
            "-webkit-transform": "scale(" + i + ")",
            transform: "scale(" + i + ")"
        }).addClass("ripple-on").data("animating", "on").data("mousedown", "on") : e.animate({
            width: 2 * Math.max(t.outerWidth(), t.outerHeight()),
            height: 2 * Math.max(t.outerWidth(), t.outerHeight()),
            "margin-left": -1 * Math.max(t.outerWidth(), t.outerHeight()),
            "margin-top": -1 * Math.max(t.outerWidth(), t.outerHeight()),
            opacity: .2
        }, 500, function() {
            e.trigger("transitionend")
        })
    }
    ,
    t.fn.ripples = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new r(this,e))
        })
    }
}(jQuery, window, document),
searchVisible = 0,
transparent = !0,
$(document).ready(function() {
    $.material.init(),
    $('[rel="tooltip"]').tooltip();
    var t = $(".wizard-card form").validate({
        rules: {
            firstname: {
                required: !0,
                minlength: 3
            },
            lastname: {
                required: !0,
                minlength: 3
            },
            email: {
                required: !0,
                minlength: 3
            }
        },
        errorPlacement: function(t, e) {
            $(e).parent("div").addClass("has-error")
        }
    });
    $(".wizard-card").bootstrapWizard({
        tabClass: "nav nav-pills",
        nextSelector: ".btn-next",
        previousSelector: ".btn-previous",
        onNext: function(e, i, n) {
            if (!$(".wizard-card form").valid())
                return t.focusInvalid(),
                !1
        },
        onInit: function(t, e, i) {
            var n = e.find("li").length;
            $width = 100 / n;
            var r = e.closest(".wizard-card");
            $display_width = $(document).width(),
            $display_width < 600 && n > 3 && ($width = 50),
            e.find("li").css("width", $width + "%"),
            $first_li = e.find("li:first-child a").html(),
            $moving_div = $('<div class="moving-tab">' + $first_li + "</div>"),
            $(".wizard-card .wizard-navigation").append($moving_div),
            refreshAnimation(r, i),
            $(".moving-tab").css("transition", "transform 0s")
        },
        onTabClick: function(t, e, i) {
            return !!$(".wizard-card form").valid()
        },
        onTabShow: function(t, e, i) {
            var n = e.find("li").length
              , r = i + 1
              , s = e.closest(".wizard-card");
            r >= n ? ($(s).find(".btn-next").hide(),
            $(s).find(".btn-finish").show()) : ($(s).find(".btn-next").show(),
            $(s).find(".btn-finish").hide()),
            button_text = e.find("li:nth-child(" + r + ") a").html(),
            setTimeout(function() {
                $(".moving-tab").text(button_text)
            }, 150);
            var a = $(".footer-checkbox");
            0 == !i ? $(a).css({
                opacity: "0",
                visibility: "hidden",
                position: "absolute"
            }) : $(a).css({
                opacity: "1",
                visibility: "visible"
            }),
            refreshAnimation(s, i)
        }
    }),
    $("#wizard-picture").change(function() {
        readURL(this)
    }),
    $('[data-toggle="wizard-radio"]').click(function() {
        wizard = $(this).closest(".wizard-card"),
        wizard.find('[data-toggle="wizard-radio"]').removeClass("active"),
        $(this).addClass("active"),
        $(wizard).find('[type="radio"]').removeAttr("checked"),
        $(this).find('[type="radio"]').attr("checked", "true")
    }),
    $('[data-toggle="wizard-checkbox"]').click(function() {
        $(this).hasClass("active") ? ($(this).removeClass("active"),
        $(this).find('[type="checkbox"]').removeAttr("checked")) : ($(this).addClass("active"),
        $(this).find('[type="checkbox"]').attr("checked", "true"))
    }),
    $(".set-full-height").css("height", "auto")
}),
$(window).resize(function() {
    $(".wizard-card").each(function() {
        $wizard = $(this),
        index = $wizard.bootstrapWizard("currentIndex"),
        refreshAnimation($wizard, index),
        $(".moving-tab").css({
            transition: "transform 0s"
        })
    })
}),
materialDesign = {
    checkScrollForTransparentNavbar: debounce(function() {
        $(document).scrollTop() > 260 ? transparent && (transparent = !1,
        $(".navbar-color-on-scroll").removeClass("navbar-transparent")) : transparent || (transparent = !0,
        $(".navbar-color-on-scroll").addClass("navbar-transparent"))
    }, 17)
},
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (this.length) {
                var i = t.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"),
                i = new t.validator(e,this[0]),
                t.data(this[0], "validator", i),
                i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    i.settings.submitHandler && (i.submitButton = e.target),
                    t(this).hasClass("cancel") && (i.cancelSubmit = !0),
                    void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }),
                this.on("submit.validate", function(e) {
                    function n() {
                        var n, r;
                        return !i.settings.submitHandler || (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),
                        r = i.settings.submitHandler.call(i, i.currentForm, e),
                        i.submitButton && n.remove(),
                        void 0 !== r && r)
                    }
                    return i.settings.debug && e.preventDefault(),
                    i.cancelSubmit ? (i.cancelSubmit = !1,
                    n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                    !1) : n() : (i.focusInvalid(),
                    !1)
                })),
                i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, i, n;
            return t(this[0]).is("form") ? e = this.validate().form() : (n = [],
            e = !0,
            i = t(this[0].form).validate(),
            this.each(function() {
                e = i.element(this) && e,
                n = n.concat(i.errorList)
            }),
            i.errorList = n),
            e
        },
        rules: function(e, i) {
            var n, r, s, a, o, l, d = this[0];
            if (e)
                switch (n = t.data(d.form, "validator").settings,
                r = n.rules,
                s = t.validator.staticRules(d),
                e) {
                case "add":
                    t.extend(s, t.validator.normalizeRule(i)),
                    delete s.messages,
                    r[d.name] = s,
                    i.messages && (n.messages[d.name] = t.extend(n.messages[d.name], i.messages));
                    break;
                case "remove":
                    return i ? (l = {},
                    t.each(i.split(/\s/), function(e, i) {
                        l[i] = s[i],
                        delete s[i],
                        "required" === i && t(d).removeAttr("aria-required")
                    }),
                    l) : (delete r[d.name],
                    s)
                }
            return (a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(d), t.validator.attributeRules(d), t.validator.dataRules(d), t.validator.staticRules(d)), d)).required && (o = a.required,
            delete a.required,
            a = t.extend({
                required: o
            }, a),
            t(d).attr("aria-required", "true")),
            a.remote && (o = a.remote,
            delete a.remote,
            a = t.extend(a, {
                remote: o
            })),
            a
        }
    }),
    t.extend(t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            return !!t.trim("" + t(e).val())
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }),
    t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e),
        this.currentForm = i,
        this.init()
    }
    ,
    t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e),
            t.validator.format.apply(this, i)
        }
        : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)),
        i.constructor !== Array && (i = [i]),
        t.each(i, function(t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}","g"), function() {
                return i
            })
        }),
        e)
    }
    ,
    t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(e, i) {
                9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e === this.lastElement) && this.element(e)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, n) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
            },
            unhighlight: function(e, i, n) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var i = t.data(this.form, "validator")
                      , n = "on" + e.type.replace(/^validate/, "")
                      , r = i.settings;
                    r[n] && !t(this).is(r.ignore) && r[n].call(i, this, e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm),
                this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i, n = this.groups = {};
                t.each(this.settings.groups, function(e, i) {
                    "string" == typeof i && (i = i.split(/\s/)),
                    t.each(i, function(t, i) {
                        n[i] = e
                    })
                }),
                i = this.settings.rules,
                t.each(i, function(e, n) {
                    i[e] = t.validator.normalizeRule(n)
                }),
                t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e),
                this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                t.extend(this.submitted, this.errorMap),
                this.invalid = t.extend({}, this.errorMap),
                this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                var i = this.clean(e)
                  , n = this.validationTargetFor(i)
                  , r = !0;
                return this.lastElement = n,
                void 0 === n ? delete this.invalid[i.name] : (this.prepareElement(n),
                this.currentElements = t(n),
                (r = !1 !== this.check(n)) ? delete this.invalid[n.name] : this.invalid[n.name] = !0),
                t(e).attr("aria-invalid", !r),
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                r
            },
            showErrors: function(e) {
                if (e) {
                    for (var i in t.extend(this.errorMap, e),
                    this.errorList = [],
                    e)
                        this.errorList.push({
                            message: e[i],
                            element: this.findByName(i)[0]
                        });
                    this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors();
                var e, i = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (e = 0; i[e]; e++)
                        this.settings.unhighlight.call(this, i[e], this.settings.errorClass, "");
                else
                    i.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, i = 0;
                for (e in t)
                    i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""),
                this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this
                  , i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this),
                    !(this.name in i || !e.objectLength(t(this).rules())) && (i[this.name] = !0,
                    !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = t([]),
                this.toHide = t([]),
                this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(),
                this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var i, n = t(e), r = e.type;
                return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && void 0 !== e.validity ? !e.validity.badInput && n.val() : "string" == typeof (i = n.val()) ? i.replace(/\r/g, "") : i
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, n, r, s = t(e).rules(), a = t.map(s, function(t, e) {
                    return e
                }).length, o = !1, l = this.elementValue(e);
                for (n in s) {
                    r = {
                        method: n,
                        parameters: s[n]
                    };
                    try {
                        if ("dependency-mismatch" === (i = t.validator.methods[n].call(this, l, e, r.parameters)) && 1 === a) {
                            o = !0;
                            continue
                        }
                        if (o = !1,
                        "pending" === i)
                            return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i)
                            return this.formatAndAdd(e, r),
                            !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", t),
                        t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method."),
                        t
                    }
                }
                if (!o)
                    return this.objectLength(s) && this.successList.push(e),
                    !0
            },
            customDataMessage: function(e, i) {
                return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t])
                        return arguments[t]
            },
            defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, i) {
                var n = this.defaultMessage(e, i.method)
                  , r = /\$?\{(\d+)\}/g;
                "function" == typeof n ? n = n.call(this, i.parameters, e) : r.test(n) && (n = t.validator.format(n.replace(r, "{$1}"), i.parameters)),
                this.errorList.push({
                    message: n,
                    element: e,
                    method: i.method
                }),
                this.errorMap[e.name] = n,
                this.submitted[e.name] = n
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                t
            },
            defaultShowErrors: function() {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++)
                    i = this.errorList[t],
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (t = 0; this.successList[t]; t++)
                        this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0,
                    e = this.validElements(); e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, i) {
                var n, r, s, a = this.errorsFor(e), o = this.idOrName(e), l = t(e).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                a.html(i)) : (n = a = t("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(i || ""),
                this.settings.wrapper && (n = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e),
                a.is("label") ? a.attr("for", o) : 0 === a.parents("label[for='" + o + "']").length && (s = a.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"),
                l ? l.match(new RegExp("\\b" + s + "\\b")) || (l += " " + s) : l = s,
                t(e).attr("aria-describedby", l),
                (r = this.groups[e.name]) && t.each(this.groups, function(e, i) {
                    i === r && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", a.attr("id"))
                }))),
                !i && this.settings.success && (a.text(""),
                "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)),
                this.toShow = this.toShow.add(a)
            },
            errorsFor: function(e) {
                var i = this.idOrName(e)
                  , n = t(e).attr("aria-describedby")
                  , r = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (r = r + ", #" + n.replace(/\s+/g, ", #")),
                this.errors().filter(r)
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)),
                t(e).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return t("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(e, i) {
                    return !!t(e, i.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                this.pending[t.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[e.name],
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(),
                this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            },
            destroy: function() {
                this.resetForm(),
                t(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {}
              , n = t(e).attr("class");
            return n && t.each(n.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }),
            i
        },
        normalizeAttributeRule: function(t, e, i, n) {
            /min|max/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n),
            isNaN(n) && (n = void 0)),
            n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function(e) {
            var i, n, r = {}, s = t(e), a = e.getAttribute("type");
            for (i in t.validator.methods)
                "required" === i ? ("" === (n = e.getAttribute(i)) && (n = !0),
                n = !!n) : n = s.attr(i),
                this.normalizeAttributeRule(r, a, i, n);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength,
            r
        },
        dataRules: function(e) {
            var i, n, r = {}, s = t(e), a = e.getAttribute("type");
            for (i in t.validator.methods)
                n = s.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()),
                this.normalizeAttributeRule(r, a, i, n);
            return r
        },
        staticRules: function(e) {
            var i = {}
              , n = t.data(e.form, "validator");
            return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}),
            i
        },
        normalizeRules: function(e, i) {
            return t.each(e, function(n, r) {
                if (!1 !== r) {
                    if (r.param || r.depends) {
                        var s = !0;
                        switch (typeof r.depends) {
                        case "string":
                            s = !!t(r.depends, i.form).length;
                            break;
                        case "function":
                            s = r.depends.call(i, i)
                        }
                        s ? e[n] = void 0 === r.param || r.param : delete e[n]
                    }
                } else
                    delete e[n]
            }),
            t.each(e, function(n, r) {
                e[n] = t.isFunction(r) ? r(i) : r
            }),
            t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }),
            t.each(["rangelength", "range"], function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                e[this] = [Number(i[0]), Number(i[1])]))
            }),
            t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max],
            delete e.min,
            delete e.max),
            null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength],
            delete e.minlength,
            delete e.maxlength)),
            e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() {
                    i[this] = !0
                }),
                e = i
            }
            return e
        },
        addMethod: function(e, i, n) {
            t.validator.methods[e] = i,
            t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e],
            i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, n) {
                if (!this.depend(n, i))
                    return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t))
                    return !1;
                var i, n, r = 0, s = 0, a = !1;
                if ((t = t.replace(/\D/g, "")).length < 13 || t.length > 19)
                    return !1;
                for (i = t.length - 1; i >= 0; i--)
                    n = t.charAt(i),
                    s = parseInt(n, 10),
                    a && (s *= 2) > 9 && (s -= 9),
                    r += s,
                    a = !a;
                return r % 10 == 0
            },
            minlength: function(e, i, n) {
                var r = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || r >= n
            },
            maxlength: function(e, i, n) {
                var r = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || n >= r
            },
            rangelength: function(e, i, n) {
                var r = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || r >= n[0] && r <= n[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            equalTo: function(e, i, n) {
                var r = t(n);
                return this.settings.onfocusout && r.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    t(i).valid()
                }),
                e === r.val()
            },
            remote: function(e, i, n) {
                if (this.optional(i))
                    return "dependency-mismatch";
                var r, s, a = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                a.originalMessage = this.settings.messages[i.name].remote,
                this.settings.messages[i.name].remote = a.message,
                n = "string" == typeof n && {
                    url: n
                } || n,
                a.old === e ? a.valid : (a.old = e,
                r = this,
                this.startRequest(i),
                (s = {})[i.name] = e,
                t.ajax(t.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: s,
                    context: r.currentForm,
                    success: function(n) {
                        var s, o, l, d = !0 === n || "true" === n;
                        r.settings.messages[i.name].remote = a.originalMessage,
                        d ? (l = r.formSubmitted,
                        r.prepareElement(i),
                        r.formSubmitted = l,
                        r.successList.push(i),
                        delete r.invalid[i.name],
                        r.showErrors()) : (s = {},
                        o = n || r.defaultMessage(i, "remote"),
                        s[i.name] = a.message = t.isFunction(o) ? o(e) : o,
                        r.invalid[i.name] = !0,
                        r.showErrors(s)),
                        a.valid = d,
                        r.stopRequest(i, d)
                    }
                }, n)),
                "pending")
            }
        }
    });
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n) {
        var r = t.port;
        "abort" === t.mode && (i[r] && i[r].abort(),
        i[r] = n)
    }) : (e = t.ajax,
    t.ajax = function(n) {
        var r = ("mode"in n ? n : t.ajaxSettings).mode
          , s = ("port"in n ? n : t.ajaxSettings).port;
        return "abort" === r ? (i[s] && i[s].abort(),
        i[s] = e.apply(this, arguments),
        i[s]) : e.apply(this, arguments)
    }
    )
});
