

var containerDiv = document.querySelector(".container");
var startQuizBtn = document.createElement("button");
var timerDisplay = document.createElement("h2");
var questionText = document.createElement("p");
var resultText = document.createElement("h3");

function openPage() {
    startQuizBtn.textContent = "Start Quiz";
    containerDiv.appendChild(startQuizBtn);

}

var timerNumber = 10;
var index = 0;

function nextQuestion(){

    containerDiv.innerHTML = "";
    containerDiv.appendChild(timerDisplay);
    
    questionText.textContent = questions[index].title;
    containerDiv.appendChild(questionText);
    
    var buttonDiv = document.createElement("div");


    for (let i = 0; i < questions[index].choice.length; i++) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choiceBtnClass")
        choiceBtn.textContent = questions[index].choices[i];
        choiceBtn.value = questions[index].choices[i];
        buttonDiv.appendChild(choiceBtn);
        containerDiv.appendChild(buttonDiv);
    }

}

document.addEventListener("click", function(event){
    if ( event.target.matches(".choiceBtnClass")) {
        index++
        nextQuestion()
    }
})

function timeDisplay(){
    timerDisplay.textContent = "Time Left: " + timerNumber
    var quizTimer = setInterval(function(){
        timerNumber
        timerDisplay.textContent = "Time Left: " + timerNumber
    if (timerNumber < 0) {
        clearInterval(quizTimer);
        }
}, 1000)
}


openPage()

startQuizBtn.addEventListener("click", function(){

})