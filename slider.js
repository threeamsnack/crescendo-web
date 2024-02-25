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
      
      $(".content").find("div").css("display", "none");
      $(cont).css("display", "block");
      
          $(".buttons").find(".btn-glitch-fill").removeClass('selected'); 
        $(this).addClass('selected');
    
      
    });
    $('.closeall').click(function() {
      $('.slideup').toggleClass('open');
    });
});