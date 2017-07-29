$(document).ready(function() {


// var lossSound = new Audio ("https://http://www.thesoundarchive.com/play-wav-files.asp?sound=archer-sounds/dick-nuts.mp3"); 

var counter = 30;
var theClock;


function start_Button() {
    window.location.href = "index2.html";
    timerWrapper();

};
function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$("#time").html(counter);
	}
};
function resetGame() {
	counter = 30;
}
})
// var timer = {

// 	time: 30,

// 	reset: function() {
// 		if (!clockRunning) {
// 		timer.time = 30;
// 		$("#time").html("30");

// 		}
// 	}
// }

// function startTimer(duration, display) {
// 	var timer = duration, seconds;
// 	setInterval(function() {
// 		seconds = parseInt(timer % 60, 10);

// 		seconds = seconds < 10 ? "0" + seconds : seconds;
// 		display.text(" " + seconds);

// 		if (--timer < 0) {
// 			timer = duration
// 		}
// 	}, 1000);

// }


// $(function($) {
// 	var thirtySeconds = 60 / 2,
// 	display = $("#time");
// 	startTimer(thirtySeconds, display);
// if (thirtySeconds === 0) {
// 	alert("Times Up!");
// }
// });

// function countdown(minutes) {
//     var seconds = 30;
//     var mins = minutes
//     function tick() {
//         //This script expects an element with an ID = "counter". You can change that to what ever you want. 
//         var counter = document.getElementById("#time");
//         var current_minutes = mins-1
//         seconds--;
//         counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
//         if( seconds > 0 ) {
//             setTimeout(tick, 1000);
//         } else {
//             if(mins > 1){
//                 countdown(mins-1);           
//             }
//         }
//     }
//     tick();
// }

// $("#time").on("click", function() {

// })
// function counter() {
// 	setTimeout (function() {
// 		for (var i = 0; i < 1000 * 3+1; i++){
// 			console.log(timeLeft);
// 			timeLeft--;
// 		}
// 	}, 1000 * 30);
// }



