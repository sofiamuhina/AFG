$(document).ready(function() {
    $(".deals__item").hover(function() {
        $(this).animate({ top: -15 }, 100);
    }, function() {
        $(this).animate({ top: 0 }, 100);
    }),

    $(".advantages__item").hover(function() {
        $(this).children(".advantages__wrapper-img").animate({ 
            width: 140, 
            height: 140,
            top: 44,
            marginLeft: -70 }, 300),
        $(this).find("img").animate({
            width: 83,
            height: 55,
            top: 44,
            marginLeft: -42
        }, 300);
    }, function() {
        $(this).children(".advantages__wrapper-img").animate({ 
            width: 120, 
            height: 120,
            top: 57,
            marginLeft: -60 }, 300),
        $(this).find("img").animate({
            width: 73,
            height: 47,
            marginLeft: -37,
            top: 38
        }, 300);
    });
});