$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start The Game Already...</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  // added line to test issue on GitHub Viewer
	// dumbSound.play();
	generateHTML();

	timerWrapper();

}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	// dumbSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	// dumbSound.play();
	resetGame();
}); // Closes reset-button click

});  //  Closes jQuery wrapper

function lossTimeOut() {
	unanswered++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='./assets/images/dicknuts.jpg'>";
	$(".mainArea").html(gameHTML);
	dumbSound.play();
	setTimeout(warte, 4000);  //  change to 4000 or other amount
}

function generateWin() {
	correct++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	winSound.play();
	setTimeout(warte, 4000);  //  change to 4000 or other amount
}

function generateLoss() {
	incorrect++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='./assets/images/dicknuts.jpg'>";
	$(".mainArea").html(gameHTML);
	lossSound.play();
	setTimeout(warte, 4000); //  change to 4000 or other amount
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function warte() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			lossTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>We're finished, here's your results:" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + incorrect + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is Sterling Archer's codename?", "What is Archer's middle name?", "Who is Krieger supposedly a clone of?", "What is the name of Mallory Archer's secretary?", "Who in the show is worth more than $500 million?", "What is the name of the spy agency that Archer works for?", "What is Pam's position within the spy agency?", "Which character was a former bronze medalist in the winter olympics?"];
var answerArray = [["Gurpgork", "Woodhouse", "Duchess", "Shiro Kabocha"], ["Duchess","Malory","Krieger","Jackoff"], ["Hitler", "Archer", "Woodhouse", "Lana"], ["Carol","Cheryl","Pam","Whordiot"], ["Woodhouse", "Cheryl", "Archer", "Mallory"], ["CIA","NSA","ISIS","Al-Qaeda"], ["Secretary", "Field Agent", "Comptroller", "Director of HR"], ["Ray","Archer","Lana","Krieger"]];
var imageArray = ["<img class='center-block img-right' src='./assets/images/duchess.jpg'>", "<img class='center-block img-right' src='./assets/images/archer-malory.jpg'>", "<img class='center-block img-right' src='./assets/images/krieger.png'>", "<img class='center-block img-right' src='./assets/images/cheryl.jpg'>", "<img class='center-block img-right' src='./assets/images/cheryl.jpg'>", "<img class='center-block img-right' src='./assets/images/isis.jpg'>", "<img class='center-block img-right' src='./assets/images/pam.jpg'>", "<img class='center-block img-right' src='./assets/images/ray.jpg'>"];
var correctAnswers = ["C. Duchess", "B. Malory", "A. Hitler", "B. Cheryl", "B. Cheryl", "C. ISIS", "D. Director of HR", "A. Ray"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var lossSound = new Audio("assets/audio/dick-nuts.mp3");
var winSound = new Audio("assets/audio/rampage.wav");
var dumbSound = new Audio ("assets/audio/dumb-stupid.mp3")




