//create a timer starting at 60 seconds
function myTimer(){
    var timeleft = 60;
    var myTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(myTimer);
    endGame();
  };
  timeleft -= 1;
}, 1000);
}

next();

//setting scored and timers
var score =0;
var currentQuestion = -1;
var timeLeft = 0;
var myTimer;

//store the scored in hish scores
function setScore(){
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById("name").value);

}
function getScore() {
    var quiz
}