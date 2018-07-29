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
})

$(document).ready(function(){

$(".menu-projects a").click(function(e){
    e.preventDefault();
    $(".active-project").removeClass("active-project")
    $(this).addClass("active-project")
    let slideIndex = $(this).attr('id');
    $( '.slick-projects' ).slick('slickGoTo',parseInt(slideIndex) ); 
});

})
