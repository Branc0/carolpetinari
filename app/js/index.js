$(".slick-header").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots:false,
    infinite: true
})

$(".slick-projects").slick({
    infinite: true,
    arrows:false,
   // fade:true,
   // speed:1000
})

$(".slick-construction").slick({
    infinite: true,
    arrows:true,
    dots:true
});

$(".slick-myhouse").slick({
    infinite: true,
    arrows:true,
    dots:true
});

$('.slick-portfolio').slick({
    infinite: true,
    arrows:true,
    dots:true,
    fade: true,
})

$('.a-collapse').click(function() {
    if($(this).find("span").hasClass("rotate")){
        $(this).find("span").removeClass("rotate");
    }else{
        $(this).find("span").addClass("rotate");
    }
});

// smooth scroll
$('a[href*="#"]').not('[href="#0"]').click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(document).ready(function(){

 AOS.init({
     disable: 'mobile',
 });

$(".menu-projects a").click(function(e){
    e.preventDefault();
    $(".active-project").removeClass("active-project")
    $(this).addClass("active-project")
    let slideIndex = $(this).attr('id');
    $( '.slick-projects' ).slick('slickGoTo',parseInt(slideIndex) ); 
});

$(".nav-link").click(function(){
    $(".navbar-toggler").click();
});

})
