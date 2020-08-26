//Selector variables

var highscoreEL = document.querySelector("#view-highscores");
var quizTimerEl = document.querySelector("#time");
var startButtonEl = document.querySelector(".btn-primary");

//Questions

var questions = [{
    question: "1. What tools have we learned up until now?",
    choices: ["HTML","Javascript","CSS", "All of the above"],
    correctAnswer: 3
}, {
    question: "2. Which Javascript statement is used for true or false?",
    choices: ["String","Boolean","Object", "Array"],
    correctAnswer: 1
}, {
    question: "3. Which of these is the primary editor for page styling?",
    choices: ["JQuery","Microsoft Paint","CSS", "HTML"],
    correctAnswer: 2
}, {
    question: "4. Arrays are enclosed in _____ ",
    choices: ["{}","[]","**", ";;"],
    correctAnswer: 1
}, {
    question: "5. How do you identify a class in CSS or Javascript?",
    choices: ["className",".className","#className", "All of the above"],
    correctAnswer: 1
}, {
    question: "6. What is a responsive page",
    choices: ["A page that formats itself relative to the user's device","A fast loading webpage","An interactive webpage", "None of these"],
    correctAnswer: 0
}, {
    question: "7. How do you add a line comment to Javascript?",
    choices: [":/","#comment","Comment", "//"],
    correctAnswer: 3
}, {
    question: "8. In webpage design, DOM stands for",
    choices: ["Distributed Order Management","Document Object Model","Disk On Module", "Discrete Ordinate Method"],
    correctAnswer: 1
},

];


//Countdown Timer

var secondsLeft = 75;

startButtonEl.addEventListener("click", function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      quizTimerEl.textContent = "Time Left : " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Out of time!");
      }
  
    }, 1000);
  });











