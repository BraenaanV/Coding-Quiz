var userInput = document.querySelector("#username");
var yourScore = document.querySelector("#you-scored");
var result = localStorage.getItem("mostRecentScore");
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

console.log(highscores);

window.onload = displayScore;

function displayScore(){
    yourScore.textContent = "You scored : " + result;
}

function saveHighScore (event) {
    event.preventDefault();
    userInput = userInput.value;

    var score = {
        score: result,
        name: userInput
    };
    highscores.push(score);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "./highscores.html"
}