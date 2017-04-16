  // about me section hover jquery
  $(document).ready(function() {
      $('#aboutme1-img').mouseover(function(event) {
          $('#about_2').show();
          $('#about_1').hide();
      });
      $('#aboutme2-img').mouseout(function(event) {
          $('#about_2').hide();
          $('#about_1').show();
      });

  });
  $(document).ready(function() {

      $('.skill-circle').mouseover(function() {

          var radius = 140;
          var skills = $(this).siblings()
          var container = $('.skill-container')
          var width = container.width()
          var height = container.height()
          var angle = 0
          var step = (2 * Math.PI) / skills.length;

          skills.each(function() {
              var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
              var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
              $(this).css({ "opacity": "1", "left": x + 'px', "top": y + 'px' });
              angle += step;
          });
      });

      $('.skill-circle').mouseleave(function() {
          $('.skill').css({ "opacity": "0", "left": "50%", "top": "50%" });
      });
  });

  //jQuery to collapse the navbar on scroll
  $(document).ready(function() {
      $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
              $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
              $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
      });
  });
  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).ready(function() {

      $(function() {
          $('a.page-scroll').bind('click', function(event) {
              var $anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $($anchor.attr('href')).offset().top
              }, 1500, 'easeInOutExpo');
              event.preventDefault();
          });
      });

  });

  ;
