
$(function() {
  $('.nav-btn, .btn-glitch-fill').click(function() {
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
      
      $(".buttons").find(".nav-btn, .btn-glitch-fill").removeClass('selected');
      $(this).addClass('selected');
  });

  $('.closeall').click(function() {
      $('.slideup').toggleClass('open');
  });
});



// document.addEventListener("DOMContentLoaded", function() {
//   const nav = document.querySelector('#nav-bar');
//   const glitchButtons = document.querySelectorAll('.btn-glitch-fill');
//   const closeButtons = document.querySelectorAll('.closeall');

//   glitchButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       nav.classList.toggle('black-background'); 
//     });
//   });

//   closeButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       nav.classList.remove('black-background');
//     });
//   });
// });


document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector('#nav-bar');
  const glitchButtons = document.querySelectorAll('.btn-glitch-fill, .nav-btn');
  const closeButtons = document.querySelectorAll('.closeall');

  glitchButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      nav.classList.toggle('black-background'); 
    });
  });

  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      nav.classList.remove('black-background');
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const aboutEnterBtn = document.getElementById("about-enter");
  const aboutBackBtn = document.getElementById("about-back");
  const body = document.body;

  aboutEnterBtn.addEventListener("click", function() {
      body.style.overflow = "scroll";
  });

  aboutBackBtn.addEventListener("click", function() {
      body.style.overflow = "hidden";
  });
});



document.getElementById("about-enter1").addEventListener("click", function() {
  document.body.style.overflow = "scroll";
});

document.getElementById("about-back").addEventListener("click", function() {
  document.body.style.overflow = "hidden";
});