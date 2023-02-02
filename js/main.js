jQuery(function ($) {

    "use strict";

    //menu
    $('.mobile-button').on('click', function(){
        $(this).closest('.dashboard').toggleClass('active')
        $(this).closest('.section').find('.layer-close').toggleClass('active')
        $(this).toggleClass('active');
        $('html').toggleClass('overflow-menu');
    });
    
        $('.layer-close').on('click', function(){
        $(this).closest('.dashboard').removeClass('active')
        $(this).closest('.section').find('.layer-close').removeClass('active')
        $(this).removeClass('active');
        $('html').removeClass('overflow-menu');
    });
});
