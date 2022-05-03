const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'what is the smallest country in the world?',
        choice1: 'Seychelles',
        choice2: 'Vatican City',
        choice3: 'Monaco',
        choice4: 'Maldives',
        answer: 2,
    },
    {
        question: 'The tallest building in the world is located in which city?',
        choice1: 'London',
        choice2: 'Dubai',
        choice3: 'Shanghai',
        choice4: 'None of the above',
        answer: 2,
    },
    {
        question: "To the nearest billion, how large is the world's population?",
        choice1: '20 billion',
        choice2: '6 billion',
        choice3: '13 billion',
        choice4: '8 billion',
        answer: 4, 
    },
    {
        question: 'What is the capital city of jamaica',
        choice1: 'Dublin',
        choice2: 'Lisbon',
        choice3: 'Kingston',
        choice4: 'None of the above',
        answer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex] //keep track of what question we on
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number'] // save the dataset number to number so we know what choice we clicking on
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1) // gets rid of question. from start to finish

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target // this pin points which exact button was pressed 
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' 
        // if button pressed is correct toggle correct css with the green, if not toggle the incorrect css red color

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply) // changes background color of button to red or blue

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply) // get's rid of colored background
            getNewQuestion()

        }, 1000) // The time the button stays green or red

    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()