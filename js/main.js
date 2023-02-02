jQuery(function ($) {

    "use strict";

    //menu
    $('.mobile-button').on('click', function(){
        $(this).closest('.dashboard').toggleClass('active')
        $(this).closest('.section').find('.layer-close').toggleClass('active')
        $(this).toggleClass('active');
        $('html').toggleClass('overflow-menu');
        $(this).parents('header').toggleClass('open-menu');
    });
});
