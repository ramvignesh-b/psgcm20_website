! function (e) {
    "use strict";
    jQuery(document).on("ready", function () {
        function s() {
            e(".newsletter-form").addClass("animated shake"), setTimeout(function () {
                e(".newsletter-form").removeClass("animated shake")
            }, 1e3)
        }

        function o(s, o) {
            if (s) var t = "validation-success";
            else t = "validation-danger";
            e("#validator-newsletter").removeClass().addClass(t).text(o)
        }
        jQuery(".mean-menu").meanmenu({
                meanScreenWidth: "991"
            }), e(window).on("scroll", function () {
                e(this).scrollTop() > 120 ? e(".elkevent-nav").addClass("is-sticky") : e(".elkevent-nav").removeClass("is-sticky")
            }), e(".home-slides").owlCarousel({
                loop: !0,
                nav: !0,
                dots: !1,
                autoplayHoverPause: !0,
                autoplay: !0,
                items: 1,
                navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"]
            }), e(".home-slides").on("translate.owl.carousel", function () {
                e(".home-slides p").removeClass("animated fadeInDown").css("opacity", "0"), e(".home-slides h1").removeClass("animated fadeInUp").css("opacity", "0"), e(".home-slides ul").removeClass("animated zoomIn").css("opacity", "0"), e(".home-slides .btn, .home-slides .video-btn").removeClass("animated fadeInDown").css("opacity", "0"), e(".home-slides .banner-image img").removeClass("animated fadeInUp").css("opacity", "0")
            }), e(".home-slides").on("translated.owl.carousel", function () {
                e(".home-slides p").addClass("animated fadeInDown").css("opacity", "1"), e(".home-slides h1").addClass("animated fadeInUp").css("opacity", "1"), e(".home-slides ul").addClass("animated zoomIn").css("opacity", "1"), e(".home-slides .btn, .home-slides .video-btn").addClass("animated fadeInDown").css("opacity", "1"), e(".home-slides .banner-image img").addClass("animated fadeInUp").css("opacity", "1")
            }), e(".popup-youtube").magnificPopup({
                disableOn: 320,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), setInterval(function () {
                var s, o, t, a, n, i, l;
                s = new Date("February 04, 2020 10:00:00 PDT"), s = Date.parse(s) / 1e3, o = new Date, t = s - (o = Date.parse(o) / 1e3), a = Math.floor(t / 86400), n = Math.floor((t - 86400 * a) / 3600), i = Math.floor((t - 86400 * a - 3600 * n) / 60), l = Math.floor(t - 86400 * a - 3600 * n - 60 * i), n < "10" && (n = "0" + n), i < "10" && (i = "0" + i), l < "10" && (l = "0" + l), e("#days").html(a + "<span>Days</span>"), e("#hours").html(n + "<span>Hours</span>"), e("#minutes").html(i + "<span>Minutes</span>"), e("#seconds").html(l + "<span>Seconds</span>")
            }, 1e3),
            function (e) {
                e(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"), e(".tab ul.tabs li a").on("click", function (s) {
                    var o = e(this).closest(".tab"),
                        t = e(this).closest("li").index();
                    o.find("ul.tabs > li").removeClass("current"), e(this).closest("li").addClass("current"), o.find(".tab_content").find("div.tabs_item").not("div.tabs_item:eq(" + t + ")").slideUp(), o.find(".tab_content").find("div.tabs_item:eq(" + t + ")").slideDown(), s.preventDefault()
                })
            }(jQuery), e(function () {
                e(".accordion").find(".accordion-title").on("click", function () {
                    e(this).toggleClass("active"), e(this).next().slideToggle("fast"), e(".accordion-content").not(e(this).next()).slideUp("fast"), e(".accordion-title").not(e(this)).removeClass("active")
                })
            }), e(function () {
                e('[data-toggle="tooltip"]').tooltip()
            }), e(".platinum-partner-slides").owlCarousel({
                loop: !0,
                nav: !1,
                dots: !1,
                autoplayHoverPause: !0,
                autoplay: !0,
                navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
                responsive: {
                    0: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1200: {
                        items: 5
                    }
                }
            }), e(".gold-partner-slides").owlCarousel({
                loop: !0,
                nav: !1,
                dots: !1,
                autoplayHoverPause: !0,
                autoplay: !0,
                navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
                responsive: {
                    0: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1200: {
                        items: 5
                    }
                }
            }), e(".blog-slides").owlCarousel({
                loop: !0,
                nav: !1,
                dots: !0,
                autoplayHoverPause: !0,
                autoplay: !0,
                navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            }), e(".schedule-slides").owlCarousel({
                loop: !0,
                nav: !0,
                dots: !1,
                autoplayHoverPause: !0,
                autoplay: !0,
                items: 1,
                navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"]
            }), jQuery(window).on("scroll", function () {
                e(this).scrollTop() > 800 ? e(".back-to-top").addClass("show-back-to-top") : e(".back-to-top").removeClass("show-back-to-top")
            }), e(".back-to-top").on("click", function () {
                e("html, body").animate({
                    scrollTop: "0"
                }, 500)
            }), e(".newsletter-form").validator().on("submit", function (e) {
                e.isDefaultPrevented() ? (s(), o(!1, "Please enter your email correctly.")) : e.preventDefault()
            }), e(".newsletter-form").ajaxChimp({
                url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
                callback: function (t) {
                    "success" === t.result ? (e(".newsletter-form")[0].reset(), o(!0, "Thank you for subscribing!"), setTimeout(function () {
                        e("#validator-newsletter").addClass("hide")
                    }, 4e3)) : s()
                }
            })
    }), window.onload = function () {
        lax.setup();
        const e = () => {
            lax.update(window.scrollY), window.requestAnimationFrame(e)
        };
        window.requestAnimationFrame(e)
    }, e(".odometer").appear(function (s) {
        e(".odometer").each(function () {
            var s = e(this).attr("data-count");
            e(this).html(s)
        })
    }), e(window).on("load", function () {
        e(".wow").length && new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 20,
            mobile: !0,
            live: !0
        }).init()
    }), jQuery(window).on("load", function () {
        e(".preloader").fadeOut()
    })
}(jQuery);
