'use strict'

const gQuests = [
    {fileName: 10, Options: ['Solid Snake', 'This is not solid snake', 'Metal gear'], correctAnswerIndex: 1},
    {fileName: 11, Options: ['deathbat', 'zubat', 'flybat'], correctAnswerIndex: 0},
    {fileName: 12, Options: ['x1=2, x2=1', 'x1=1, x2=3', 'x1=2, x2=3'], correctAnswerIndex: 2},
    {fileName: 13, Options: ['MeTwo', 'Mewtoo', 'Mewthree'], correctAnswerIndex: 1},
    {fileName: 14, Options: ['Brotos', 'Kratos', 'BOY!'], correctAnswerIndex: 1},
    {fileName: 15, Options: ['Link', 'Zelda', 'Legend of Zelda'], correctAnswerIndex: 0},
]
var gCurrQuestion = 0

function onInitGame() {
    // return
    renderQuestion() 
    changeButtonName()
}

function renderQuestion() {
    var elQuiz = document.querySelector('.quiz')
    elQuiz.innerHTML = '<h2 class="prompt">Who is in the picture?</h2>'
    elQuiz.innerHTML += `<img src="questions/1${gCurrQuestion}.png">\n`
    var options = gQuests[gCurrQuestion].Options
    for (var j = 0; j < options.length; j++) { 
        elQuiz.innerHTML += `<button class="answer ${j}"`+ 
        `onclick="onCheckAnswer(this)">`+
        `${options[j]}</button>\n`
    }
}

function changeButtonName(newText) {
    var elButton = document.querySelector('.start')
    elButton.innerText = 'Restart Quiz'
}

function onCheckAnswer(optIndex) {
    var answerNum = optIndex.classList[1]
    // == and not === because the answer is string   
    if (gQuests[gCurrQuestion].correctAnswerIndex == answerNum) {
        console.log('Correct!')
        gCurrQuestion++
        if (gCurrQuestion >= gQuests.length) { 
            gCurrQuestion = 0
            var audioFile = new Audio('sound/win_sound.mp3')
            audioFile.play()
            victoryText()
            return
        }
        renderQuestion()      
    }
    else { 
        console.log('Incorrect, try again')
        addIncorrectText()
    }
}

function addIncorrectText() {
    var elPrompt = document.querySelector('.prompt')
    elPrompt.innerText = 'Wrong! guess again'
}

function victoryText() {
    var elQuiz = document.querySelector('.quiz')
    elQuiz.innerHTML = '<h2>Hurray! You won!</h2>'
}