      $(document).ready(function () {

        if (screen.width < 1024) {
        $("#mainbubble").hide();
        $(".pieChart").hide();
        $("#desing-process").hide();
        $("#video-title").hide();
        $("iframe").hide();
        $(".video").hide();
        $(".curly_brackets").hide();
        }
    else {

        $(".yourClass").show();
        $("#mainbubble").show();
        $(".pieChart").show();
        $("#desing-process").show();
        $("#video-title").show();
        $("iframe").show();
        $(".video").show();
        $(".curly_brackets").show();
    }

});


      //jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
