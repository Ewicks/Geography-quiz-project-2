/* jshint esversion: 11 */

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const countdownEl = document.getElementById('countdown');

let startingMinutes = 1;
let time = startingMinutes * 60;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let countdownInterval;


const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    }
    countdownInterval = setInterval(updateCountdown, 1000);


    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex]; //keep track of what question we on
    question.innerText = currentQuestion.question; // gets the question from the array to display it for the user

    choices.forEach(choice => {
        const number = choice.dataset.number; // save the dataset number to number so we know what choice user is clicking on
        choice.innerText = currentQuestion['choice' + number]; // displays question to each choice button
    });

    availableQuestions.splice(questionsIndex, 1); // gets rid of question from list of available questions

    acceptingAnswers = true;
};

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target; // this pin points which exact button was pressed 
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        // if button pressed is correct toggle correct css with the green, if not toggle the incorrect css red color

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply); // changes background color of button to red or blue

        clearInterval(countdownInterval);
        startingMinutes = 1;
        time = startingMinutes * 60;

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply); // get's rid of colored background
            getNewQuestion();

        }, 1000); // The time the button stays green or red

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();