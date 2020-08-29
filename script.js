//Selecting elements

var highscoreEL = document.querySelector("#view-highscores");
var quizTimerEl = document.querySelector("#time");
var startButtonEl = document.querySelector(".btn-primary");

const question = document.querySelector("#question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

var goBack = document.querySelector("#go-back");



//Countdown Timer



var highUsers = [];
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

var mostRecentScore = localStorage.getItem("mostRecentScore");


startButtonEl.addEventListener("click", function setTime() {
    quizRunning = true;
    secondsLeft = 75;
    var timerInterval = setInterval(function() {
      secondsLeft--;
      quizTimerEl.textContent = "Time Left : " + secondsLeft;

      if(quizRunning === false) {
        clearInterval(timerInterval);
    }
  
      else if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        alert("Out of time!");
      }
   
    }, 1000);
    document.querySelector("#view-highscores").style.display = "none";
    document.querySelector(".container.main").style.display = "none";
    document.querySelector(".container.quiz-questions").style.display = "block";
    document.querySelector("#time").style.display = "block";
    questionGen();
  });

// question & answer function




// Event listeners



goBack.addEventListener("click", function (){
    document.querySelector(".container.quiz-score").style.display = "none";
    document.querySelector("#last-question-result").style.display = "none";
    document.querySelector(".container.highscores").style.display = "none";
    document.querySelector(".container.main").style.display = "block";
    document.querySelector("#view-highscores").style.display = "block";
})

highscoreEL.addEventListener("click", function() {
    document.querySelector(".container.main").style.display = "none";
    document.querySelector("#last-question-result").style.display = "none";
    document.querySelector(".container.highscores").style.display = "block";
});