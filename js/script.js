var answers = [24, 11, "sargent", 10, 11, 5, "black", 10, "elkay", 2, 1936, 26, 5, 24, "red", 4848, 3, "sure-lites", 33, "picture"];

//get the page title informaiton
var $page = parseInt($(document).find("title").text());
console.log($page);

$(document).ready(function() {


   //set the background image
   if ($page !== 21) {
   $("html").css("background", "url(img/"+$page+".svg) no-repeat center center fixed");
   }
   else {
   $("html").css("background", "url(img/"+$page+".jpg) no-repeat center center fixed").css("background-size","contain");
   }
   //animate the path image
   $(".dot").css("margin-bottom", "-100px");
   $(".path-image").css("margin-bottom", "-100px");
   /*$( ".dot" ).animate({
    bottom: "0"}, {duration: 5000, queue: false})
   $(".path-image").animate({
      bottom: "0"}, {duration: 5000, queue: false});*/

   $(".hamburger").click(function(){
      $(".ham-rect").toggleClass('green');
      $("nav").slideToggle();
   });

});

$("input").keypress(function(e) {
    if(e.which == 13) {
       //get answer
       var $answer = $("input").val();

       if (checkAnswer($answer)) {
         window.open("http://students.risd.edu/students/odoshi/bigger/"+($page+1)+".html");
         //window.location.replace("http://stackoverflow.com");
         return false;
       } else {
          e.preventDefault();
          $(".error").hide();
          $(".text").append("<p class='error'>Nope, not "+$answer+", try again!</p>");
       }
    }
});

function checkAnswer(answer) {
   var myAnswer = answer
   //if string, convert to lowercase
   if (jQuery.type(answer) == "string") {
      myAnswer = answer.toLowerCase();
   }

   //using page title as index to answer array, check if answers match
   if (myAnswer == answers[$page-1]) {
      return true;
   }
   else {
      return false;
   }

}
