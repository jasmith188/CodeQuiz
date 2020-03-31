// variables
var score = 0;
var questionIndex = 0;




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

//Quiz questions variables
var questions = document.getElementById("questionText")

function quizQuestions() {
    question = questions[nextQuestion].question;
    answer = questions[nextQuestion].answer;
    for (var i = 0; i < questions[nextQuestion].choices.length; i++) {
        options[i] = questions[nextQuestion].choices[i];
    }
}

//append questions and answers

//check answer function and alert
function checkAnswer() {
    if (question.choices === questions.answer) {
        alert("Correct!");
        nextQuestion();
    } else {
        alert("Incorrect!");
        wrongAnswer
    }
}
    //next question
    function nextQuestion() {
        if (answer === "click") {
            alert("Correct!");
            nextQuestion();
        } else {
            alert("Incorrect!");
            wrongAnswer
        }
    }