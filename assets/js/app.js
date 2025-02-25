(function (window, document, $, undefined) {
        "use strict"; var Init = {
                i: function (e) { Init.s(); Init.methods() }, s: function (e) { (this._window = $(window)), (this._document = $(document)), (this._body = $("body")), (this._html = $("html")) }, methods: function (e) { Init.w(); Init.BackToTop(); Init.preloader(); Init.jsSlider(); Init.searchToggle(); Init.niceSelect(); Init.videoPlay(); Init.VideoPlayer(); Init.quantityHandle(); Init.wishlistButton(); Init.countdownInit(".countdown", "2025/12/01"); Init.initializeSlick(); Init.formValidation(); Init.contactForm() }, w: function (e) { this._window.on("load", Init.l).on("scroll", Init.res) }, BackToTop: function () { var btn = $("#backto-top"); $(window).on("scroll", function () { if ($(window).scrollTop() > 300) { btn.addClass("show") } else { btn.removeClass("show") } }); btn.on("click", function (e) { e.preventDefault(); $("html, body").animate({ scrollTop: 0, }, "300") }) }, preloader: function () { setTimeout(function () { $("#preloader").hide("slow") }, 2000) }, jsSlider: function () { if ($(".js-slider").length) { $(".js-slider").ionRangeSlider({ skin: "big", type: "double", grid: !1, min: 0, max: 100, from: 20, to: 80, hide_min_max: !0, hide_from_to: !0, }) } }, searchToggle: function () {
                        if ($('.search-form').length) {
                                $('.search-btn').on('click', function () {
                                        if ($('.search-form').hasClass('non-active')) { $('.search-form').removeClass('non-active') } else { $('.search-form').addClass('non-active') }
                                        $(this).find("i").toggleClass("fa-search fa-times"); return !1
                                })
                        }
                }, quantityHandle: function () { $(".decrement").on("click", function () { var qtyInput = $(this).closest(".quantity-wrap").children(".number"); var qtyVal = parseInt(qtyInput.val()); if (qtyVal > 0) { qtyInput.val(qtyVal - 1) } }); $(".increment").on("click", function () { var qtyInput = $(this).closest(".quantity-wrap").children(".number"); var qtyVal = parseInt(qtyInput.val()); qtyInput.val(parseInt(qtyVal + 1)) }) }, wishlistButton: function () { if ($(".wishlist-icon").length) { $('.wishlist-icon').on('click', function () { $(this).find('.fal').toggleClass('fas'); return !1 }) } }, niceSelect: function () { if ($(".has-nice-select").length) { $('.has-nice-select, .contact-form select').niceSelect() } }, initializeSlick: function (e) {
                        if ($(".testimonials-slider-1").length) { $(".testimonials-slider-1").slick({ slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 4000, dots: !1, arrows: !0, centerPadding: "0", cssEase: "linear", responsive: [{ breakpoint: 1200, settings: { slidesToShow: 1, }, }, { breakpoint: 767, settings: { slidesToShow: 1, dots: !1, }, }, { breakpoint: 575, settings: { slidesToShow: 1, dots: !1, arrows: !1, }, },], }) }
                        if ($(".testimonials-slider-2").length) { $(".testimonials-slider-2").slick({ slidesToShow: 1, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 4000, dots: !1, arrows: !0, centerPadding: "0", cssEase: "linear", responsive: [{ breakpoint: 1200, settings: { slidesToShow: 1, }, }, { breakpoint: 767, settings: { slidesToShow: 1, dots: !1, }, }, { breakpoint: 575, settings: { slidesToShow: 1, dots: !1, arrows: !1, }, },], }) }
                        if ($(".prev-btn").length) { $(".prev-btn").click(function () { var $this = $(this).attr("data-slide"); $('.' + $this).slick("slickPrev") }) }
                        if ($(".next-btn").length) { $(".next-btn").click(function () { var $this = $(this).attr("data-slide"); $('.' + $this).slick("slickNext") }) }
                },
        }; Init.i()
})(window, document, jQuery); document.addEventListener('DOMContentLoaded', () => {
        fetch('data.json').then(response => response.json()).then(data => {
                const tableBody = document.getElementById('services-table'); data.forEach(item => {
                        const row = document.createElement('tr'); const cell = document.createElement('td'); cell.innerHTML = `<span class="ptb-24 fw-600">${item.service} 
        <p class="text-end" >${item.description}</p></span>`; row.appendChild(cell); tableBody.appendChild(row)
                })
        }).catch(error => console.error('Error fetching data:', error))
})