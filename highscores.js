var highScoresList = document.getElementById(highScoresList);
var highScores = JSON.parse(localStorage.getItem("highscores"));
var clearBtn = document.querySelector("#clearbtn");
var myList = document.querySelector("#highScoresList");



clearBtn.addEventListener("click",clearHighscores);

function clearHighscores(){
    window.localStorage.clear();
    console.log("clear test");
}