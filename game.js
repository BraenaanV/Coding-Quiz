var quizTimerEl = document.getElementById("time");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");


let questions = [{
    question: "1 of 8. What tools have we learned up until now?",
    choiceA : "HTML",
    choiceB : "Javascript",
    choiceC : "CSS",
    choiceD : "All of the above",
    correctAnswer: "D"
}, {
    question: "2 of 8. Which Javascript statement is used for true or false?",
    choiceA : "String",
    choiceB : "Boolean",
    choiceC : "Object",
    choiceD : "Array",
    correctAnswer: "B"
}, {
    question: "3 of 8. Which of these is the primary editor for page styling?",
    choiceA : "JQuery",
    choiceB : "Microsoft Paint",
    choiceC : "CSS",
    choiceD : "HTML",
    correctAnswer: "C"
}, {
    question: "4 of 8. Arrays are enclosed in _____ ",
    choiceA : "{}",
    choiceB : "[]",
    choiceC : "**",
    choiceD :  ";;",
    correctAnswer: "B"
}, {
    question: "5 of 8. How do you identify a class in CSS or Javascript?",
    choiceA : "className",
    choiceB : ".className",
    choiceC : "#className", 
    choiceD : "All of the above",
    correctAnswer: "B"
}, {
    question: "6 of 8. What is a responsive page?",
    choiceA : "A page that formats itself relative to the user's device",
    choiceB : "A fast loading webpage",
    choiceC : "An interactive webpage", 
    choiceD : "None of these",
    correctAnswer: "A"
}, {
    question: "7 of 8. How do you add a line comment to Javascript?",
    choiceA : ":/",
    choiceB : "#comment",
    choiceC : "Comment",
    choiceD :  "//",
    correctAnswer : "D"
}, {
    question: "8 of 8. In webpage design, DOM stands for",
    choiceA : "Distributed Order Management",
    choiceB : "Document Object Model",
    choiceC : "Disk On Module",
    choiceD : "Discrete Ordinate Method",
    correctAnswer: "B"
},];

var quizRunning = true;
var secondsLeft = 75;
currentQuestion = 0;
var finalQuestion = questions.length - 1;

window.onload = (initialize);

function initialize(){
    setTime();
    questionGen();
}

function setTime() {
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
   
    }, 1000)};

    function questionGen() {
        let q = questions[currentQuestion];
    
        question.innerHTML = "<p>" + q.question; + "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    }

    function checkAnswer(answer){
        if(answer == questions[currentQuestion].correctAnswer){
            answerIsCorrect();
        }
        else{
            answerIsWrong();
        }
        count = 0;
        if(currentQuestion < finalQuestion){
            currentQuestion++;
            questionGen();
        }
        else{
            displayScore();
        }
    }
    
    function answerIsCorrect(){
        document.getElementById("last-question-result").innerHTML = "Correct!";
    }
    
    function answerIsWrong(){
        document.getElementById("last-question-result").innerHTML= "Incorrect!";
        secondsLeft -= 10;
        
    }

    function displayScore(){
        localStorage.setItem("mostRecentScore", secondsLeft);
        quizRunning = false;
        window.location.href = "./quizresult.html"
    }