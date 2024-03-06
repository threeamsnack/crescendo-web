var opened = 0;

$(function() {
    $('.btn-glitch-fill').click(function() {
        
      var cont = "." + $(this).attr("data-content");
      
      if ($(cont).css('display') == "block") {
        if (!$('.slideup').hasClass("open")) {
          $('.slideup').addClass('open');
        } else {
          $('.slideup').removeClass('open');
        }
      } else {
        if (!$('.slideup').hasClass("open")) {
          $('.slideup').addClass('open');
         
        }
      }
      
      $(".content").find("div").css("display", "revert-layer");
      $(cont).css("display", "block");
      
          $(".buttons").find(".btn-glitch-fill").removeClass('selected'); 
        $(this).addClass('selected');
    
      
    });
    $('.closeall').click(function() {
      $('.slideup').toggleClass('open');
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector('#nav-bar');
  const glitchButtons = document.querySelectorAll('.btn-glitch-fill');
  const closeButtons = document.querySelectorAll('.closeall');

  glitchButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      nav.classList.toggle('black-background'); // Toggle black background class for nav
    });
  });

  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      nav.classList.remove('black-background'); // Remove black background class from nav
    });
  });
});