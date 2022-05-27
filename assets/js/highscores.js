/* jshint esversion: 11 */

// Declare variables
const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Adds another highscore within the list of highscores
highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");