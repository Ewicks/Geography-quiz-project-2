/* jshint esversion: 11 */

// Declare Variables
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const countdownEl = document.getElementById('countdown');

let startingMinutes = 1;
let time = startingMinutes * 60;
let seconds, minutes, countdownInterval, incorrectSound, correctSound, getAllQuestions, randomQuestions;
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let muteBtn = document.getElementById('muted');
let isPlaying = false;
let refreshPage = document.getElementById('reload-icon');

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;
let questionsData = JSON.parse(localStorage.getItem('questions'));

// First function to be executed
// The start game function will grab the game questions and shuffle them, then it will call the get question function
startGame = () => {
    questionCounter = 0;
    score = 0;
    getAllQuestions = [...questionsData];
    randomQuestions = getAllQuestions.sort(() => 0.5 - Math.random());
    availableQuestions = randomQuestions.slice(0, MAX_QUESTIONS);
    getNewQuestion();
};

// When the sound button is clicked, it will replace the image with the appropriate mute or muted image.
muteBtn.addEventListener('click', function(){
    if (isPlaying) {
        // Pause the audio track
        muteBtn.src = "assets/images/muted.jpeg";
        isPlaying = false;
    } else {
        // Play the track
        muteBtn.src = "assets/images/speaker.png";
        isPlaying = true;
    }
});

// When this refresh image is clicked it will reload the page
refreshPage.addEventListener('click', function(){
    window.location.reload();
});

// Get next question
getNewQuestion = () => {
    if (availableQuestions.length === 0) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    }
    countdownInterval = setInterval(updateCountdown, 1000);


    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex]; //Keep track of what question we on
    question.innerText = currentQuestion.question; // Gets the question from the array to display it for the user

    choices.forEach(choice => {
        const number = choice.dataset.number; // Save the dataset number to number so we know what choice user is clicking on
        choice.innerText = currentQuestion['choice' + number]; // Displays question to each choice button
    });

    availableQuestions.splice(questionsIndex, 1); // Gets rid of question from list of available questions

    acceptingAnswers = true;
};

// Functions that plays sound
function correctSoundEffect() {
    if (isPlaying) {
        correctSound = new Audio("assets/sound/correct.mp3"); 
        correctSound.play();
    }

}

function incorrectSoundEffect() {
    if (isPlaying) {
        incorrectSound = new Audio("assets/sound/incorrect.mp3"); 
        incorrectSound.play();
    }

}

// Time function
function updateCountdown() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    if (time <= 0) {
        clearInterval(countdownInterval);
        time = startingMinutes * 60;

        getNewQuestion();
    } else {
        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
    }
}

// 
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target; // This pin points which exact button was pressed 
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        // If button pressed is correct, toggle correct css with the green, if not toggle the incorrect css red color

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
            correctSoundEffect();
        } else {
            incorrectSoundEffect();
        }

        selectedChoice.parentElement.classList.add(classToApply); // Changes background color of button to red or blue

        clearInterval(countdownInterval);
        time = startingMinutes * 60;
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply); // Get's rid of colored background
            getNewQuestion();

        }, 1000); 

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();