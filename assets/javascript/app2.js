

//This function will be used anywhere in our app where we want to count down from 30 seconds 'counter();'
function counter() {
  theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
      if (timeLeft === 0) {
        clearInterval(theClock);
        timeoutIncorrect();
      }
      if (timeLeft > 0) {
        timeLeft--;
      }
    }
  } 
//   setTimeout(function() {
//     for (var i = 0; i < 1; i++){
//       console.log(timeLeft);
//       timeLeft--;
//     if (timeLeft === 0) {
//       timeLeft = 30;
//     }
//     $('#time').html(" " + timeLeft);
//     }
//   }, 1000);
// }
//   // Sets the initial amount of time to countdown from //
  var timeLeft = 30;

//   // Sets the interval so that the countdown goes down by 1 second each tick //
//   var theClock = setInterval(counter, 1000);

  

  
  function timeoutIncorrect() {
  if (timeLeft == 0) {
    unanswered++;
    console.log(unanswered)
    $('.questions').html(questions[i]);
  }
  };
  function correct() {
  if (userAnswer == Answers[i]) {;
    correct++;
    resetTimer();
    $('.questions').html(questions[i]);
  }
  };
 

$('.submit').on('click', function() {
  // Generate new html content from the questions array //
  $('.choice1').html(choices.first[0]);
  $('.choice2').html(choices.first[1]);
  $('.choice3').html(choices.first[2]);
  $('.choice4').html(choices.first[3]);
    counter();
    //show next content
});
    //reset timer
  function resetTimer() {
  if (timeLeft == 0) {
    timeLeft = 31;

  }
  };
    function resetGame() {
      timeLeft = 30 * 1000;
      correct = 0;
      incorrect = 0;
      unanswered = 0;
    }


  // Create an array filled with questions from which each will be chose per question //
  var questions = {
    question1: ["What is Sterling Archer's codename in the animated show 'Archer?'"],
    question2:  ["In the 1990s hit show 'Seinfeld', what is the 'bet' about?"],
    question3: ["What is the only thing that Ron Swanson hates more than lying?"],
    question4: ["In the TV show 'Rick & Morty', which fictional item does it show being made via a 'how to' show the cast watches?"]
  };
  var choices = {
    first: ["Gurpgork", "Woodhouse", "Dutchess", "Shiro Kabocha"], 
    second:["Gambling at a casino", "Masturbation", "A sports game", "JFK's golf clubs"],
  };
  var Answers = {
    answer1: "Dutchess",
    answer2: "Masturbation"
  };
  var images = []
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;



