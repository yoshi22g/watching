var answers = [24, 11, "sargent", 10, 11, 5, "black", 10, "elkay", 2, 1936, 26, 5, 24, "red", 4848, 3, "sure-lites", 33, "picture"];


//get the questions from txt file
var questionArray;
$.get( "../data/questions.txt"), function(data) {
  questionArray = data.split('\n');
};

//split the questions into an array
console.log(questionArray);


/*var questionArray = ['You see the stairs over there? Before you could spot him, your observer dashed up the stairwell. <span class="highlight">How many steps</span> did he climb to avoid you? </br>Hint: consult some braille.','You just missed him near the AED around the corner. He was going to shock you, but failed. <span class="highlight">How many times did he try?</span> <br>Hint: find an hourglass, it will tell you a two digit number.','Turn around. He tried to watch you from Teaching and Learning department. but the door was locked. <span class="highlight">What company manufactured the lock?</span> <br>Hint: Similar spelling to a military officer.']*/


//get the clue number
var $clue = $(".selected").index();
//var $clue = parseInt($(document).find("title").text());
console.log($clue);



$(document).ready(function() {

   //set the background image
   if ($clue !== 20) {
   $("html").css("background", "url(img/"+($clue + 1)+".svg) no-repeat center center fixed");
   }
   else {
   $("html").css("background", "url(img/"+($clue + 1)+".jpg) no-repeat center center fixed").css("background-size","contain");
   }

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

//when user submits answer
$("input").keypress(function(e) {
    if(e.which == 13) {
      e.preventDefault();
       //get answer
       var $answer = $("input").val();

       //set input field back to default and no focus
       $("input").val('').blur();

       //if answer is correct
       if (checkAnswer($answer)) {
         console.log('user answer was '+$answer+'. That is correct.');
          //advance to the next clue number
          $clue++;

          //change to new background image
          if ($clue !== 20) {
             $("html").css("background", "url(img/"+($clue+1)+".svg) no-repeat center center fixed");
          } else {
             $("html").css("background", "url(img/"+($clue+1)+".jpg) no-repeat center center fixed").css("background-size","contain");
          }

          //change to new question
          var questionText = questionArray[$clue];
          console.log(questionText);
          $(".question").html(questionText);

          //advance the progress bar
          $("#progress-bar li").removeClass("selected");
          $("#progress-bar li").eq($clue).addClass("selected");

          //Replace the Clue Number in the Page Header
          $(".clue-number").text($clue+1);

          //Hide Error Message if it exists
          $(".error").hide();



        /*
         window.open("http://students.risd.edu/students/odoshi/bigger/"+($page+1)+".html");
         //window.location.replace("http://stackoverflow.com");*/
         return false;

       //if answer is incorrect
       } else {
          e.preventDefault();
          $(".error").hide();
          $("form").after("<p class='error'>Nope, not "+$answer+", try again!</p>");
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
   if (myAnswer == answers[$clue]) {
      return true;
   }
   else {
      return false;
   }

}
/*
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings;
}*/
