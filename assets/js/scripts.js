(function($) {
    'use strict';
    jQuery(document).ready(function() {
        var prealoaderOption = $(window);
        prealoaderOption.on("load", function() {
            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });
        var headertopoption = $(window);
        var headTop = $('.header-top-area');
        headertopoption.on('scroll', function() {
            if (headertopoption.scrollTop() > 200) {
                headTop.addClass('menu-bg');
            } else {
                headTop.removeClass('menu-bg');
            }
        });
        $(".toggle-btn").on("click", function() {
            $(this).toggleClass("active");
            $(".site-header").toggleClass("active");
        });
        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
        var parallaxeffect = $(window);
        parallaxeffect.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
        $('.counter-num').counterUp();
        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
        new WOW().init();
    });
})(jQuery);