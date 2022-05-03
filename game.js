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
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '33%',
        answer: 3, 
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

