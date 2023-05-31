const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
        button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "What is the closest star to our Sun?",
        answers: [
        { text: 'Alpha Centauri', correct: false },
        { text: 'Sirius', correct: false },
        { text: 'Proxima Centauri', correct: true },
        { text: 'Betelgeuse', correct: false },
        ]
    },
    {
        question: "What is the name of the first satellite launched into space?",
        answers: [
            { text: 'Apollo 11', correct: false },
            { text: 'Voyager 1', correct: false },
            { text: 'Hubble Space Telescope', correct: false },
            { text: 'Sputnik 1', correct: true },
        ]
    },
    {
        question: "What is the largest moon in our solar system?",
        answers: [
            { text: 'Titan', correct: false },
            { text: 'Ganymede', correct: true },
            { text: 'Europa', correct: false },
            { text: 'Phobos', correct: false },
        ]
    },
    {
        question: "What is the approximate age of the universe, according to current scientific estimates?",
        answers: [
            { text: '4.7 billion years', correct: false },
            { text: '10.6 billion years', correct: false },
            { text: '13.8 billion years', correct: true },
            { text: '20 billion years', correct: false },
        ]
    },
    {
        question: "Which planet has the Great Red Spot, a massive storm system?",
        answers: [
            { text: 'Jupiter', correct: true },
            { text: 'Saturn', correct: false },
            { text: 'Neptune', correct: false },
            { text: 'Mars', correct: false },
        ]
    },
    {
        question: "What is the process by which a star converts hydrogen into helium, releasing energy?",
        answers: [
            { text: 'Fusion', correct: true },
            { text: 'Fission', correct: false },
            { text: 'Submilation', correct: false },
            { text: 'Gravitation', correct: false },
        ]
    },
    {
        question: "What is the name of the most famous telescope launched into space in 1990?",
        answers: [
            { text: 'Kepler Space Telescope', correct: false },
            { text: 'James Webb Space Telescope', correct: false },
            { text: 'Hubble Space Telescope', correct: true },
            { text: 'Chandra X-ray Observatory', correct: false },
        ]
    },
    {
        question: "What is the name of the phenomenon that occurs when a star collapses under its own gravity, becoming extremely dense?",
        answers: [
            { text: 'Nebula', correct: false },
            { text: 'Supernova', correct: false },
            { text: 'Black Hole', correct: true },
            { text: 'Pulsar', correct: false },
        ]
    },
    {
        question: "What is the proposed explanation for the observed accelerating expansion of the universe?",
        answers: [
            { text: 'Dark Energy', correct: true },
            { text: 'Dark Matter', correct: false },
            { text: 'Vaccum fluctuation', correct: false },
            { text: 'Inflation', correct: false },
        ]
    },
    {
        question: "What is the estimated age of the universe in Planck time units?",
        answers: [
            { text: '10^20 Planck time units', correct: false },
            { text: '10^40 Planck time units', correct: false },
            { text: '10^10 Planck time units', correct: false },
            { text: '10^60 Planck time units', correct: true },
        ]
    }, 
    {
        question: "What is the estimated size of the visible universe (observable universe)?",
        answers: [
            { text: '13.8 billion light-years', correct: false },
            { text: '46 billion light-years', correct: false },
            { text: '93 billion light-years', correct: true },
            { text: 'Infinite', correct: false },
        ]
    },
    {
        question: "Which theory attempts to reconcile quantum mechanics and general relativity and explain the behavior of matter at extremely high densities and temperatures?",
        answers: [
            { text: 'String Theory', correct: false },
            { text: 'Loop quantum gravity', correct: false },
            { text: 'M-theory', correct: false },
            { text: 'Quantum Gravity', correct: true },
        ]
    }
    
]