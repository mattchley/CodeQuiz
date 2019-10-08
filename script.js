// Universal Elements
var headerEl = document.getElementById('title')
var startBtnEl = document.getElementById('startBtn')
var scoreDisplayEl = document.getElementById('score')
var timerDisplayEl = document.getElementById('timer')
var quizContentEl = document.getElementById('content')
var choicesEl = document.getElementById('choices')
var answerA = document.getElementById('a')
var answerB = document.getElementById('b')
var answerC = document.getElementById('c')
var answerD = document.getElementById('d')
var userNamerInputEl = document.getElementById('username')
var contentEl = document.getElementById('content')

// questions exsist in an Array of [0-4]
// https://www.youtube.com/watch?v=49pYIMygIcU says to break apart answers
var questions = [
    // Data question
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        choiceA:"strings",
        choiceB:"booleans",
        choiceC:"alerts",
        choiceD:"numbers",
        answer: "alerts"
    },
    // If/else question
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choiceA:"quotes",
        choiceB:"curly brackets",
        choiceC:"parenteses",
        choiceD:"square brackets",
        answer: "parentheses"
    },
    // Arrays in Javascript question
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choiceA:"numbers and strings",
        choiceB:"other arrays",
        choiceC:"booleans",
        choiceD:"all of the above",
        answer: "all of the above"
    },
    // String values question
    {
        title: "String vlaues must be enclosed within ____ when being assigned to variables.",
        choiceA:"comams",
        choiceB:"curly brackets",
        choiceC:"quotes",
        choiceD:"parentheses",
        answer: "curly brackets"
    },
    // Debugging question
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is ____.",
        choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
        choiceA:"JavaScript",
        choiceB:"terminal/bash",
        choiceC:"for loops",
        choiceD:"console.log",
        answer: "console.log"
    },
    ///etc.
];
// Event listener for start button to generate first question
const lastQuestion = questions.length - 1;
let runningQuestion = 0; 

startBtnEl.addEventListener( "click" , function generateQuestion() {

let q = questions[runningQuestion];
contentEl.innerhtml = "<p>" + q.title + "</p>";
answerA.innerHTML = q.choiceA;
answerB.innerHTML = q.choiceB;
answerC.innerHTML = q.choiceC;
answerD.innerHTML = q.choiceD;
startBtnEl.style.display = 'none';
choicesEl.style.display = 'block';
});




