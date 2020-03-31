// variables
var score = 0;
var questionIndex = 0;

//start quiz 
// var currentTime = document.querySelector("#currentTime")
// var timer = document.querySelector("#startTime");
// var questionsDiv = document.querySelector("#questionsDiv");



//     //starts at 60 seconds
//     if (holdInterval === 60) {
//         holdInterval = setInterval(function () {
//             secondsLeft--;
//             currentTime.textContent = "time: " + secondsLeft;

//             if (secondsLeft <= 60) {
//                 clearInterval(holdInterval)
//                 allDone();
//                 currentTime.textContent = "Timer Over!";
//             }

//         }, 1000);

//     }

// });



//starts timer on start button
timer.addEventListener("click", function () {
    console.log("click");
    //create a timer starting at 60 seconds
    function myTimer() {
        var timeleft = 60;
        console.log(myTimer);

        var myTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(myTimer);
                endGame();
            };
            timeleft -= 1;
        }, 1000);
    }
})
