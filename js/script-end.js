$(document).ready(function() {


   //set the background image
   $("html").css("background", "url(img/map.jpg) no-repeat center center fixed").css("background-size","contain");



   /*
   //animate the path image
   $(".dot").css("margin-bottom", "-100px");
   $(".path-image").css("margin-bottom", "-100px");
   /*$( ".dot" ).animate({
    bottom: "0"}, {duration: 5000, queue: false})
   $(".path-image").animate({
      bottom: "0"}, {duration: 5000, queue: false});*/

   //define interactive UI toggles
   $(".hamburger").click(function(){
      $(".ham-rect").toggleClass('green');
      $("nav").slideToggle();
   });

   $(".arrow").click(function(){
     $(this).toggleClass('direction');
     $('.question, .highlight, form').slideToggle("slow", 'linear');
     //$('.text').toggleClass('close');
   });

   $('.top-bar').click(function() {
      $('.map-trace').toggleClass('adjust-height');
      $('#compass-pointer').toggle("slow");
      $('#expand').toggle("slow");
   });

});
