// Universal Elements
var headerEl = document.getElementById('title')
var startBtnEl = document.getElementById('startBtn')
var scoreDisplayEl = document.getElementById('score')
var timerDisplayEl = document.getElementById('timer')
var choicesEl = document.getElementById('choices')
var answerA = document.getElementById('a')
var answerB = document.getElementById('b')
var answerC = document.getElementById('c')
var answerD = document.getElementById('d')
var clickedEl = document.querySelector('option')
var userNamerInputEl = document.getElementById('username')
var contentEl = document.getElementById('titleQ')
var introEl = document.getElementById('intro')
var indicatorFeedbackEl = document.getElementById('feedback')


// questions exsist in an Array of [0-4]
// https://www.youtube.com/watch?v=49pYIMygIcU says to break apart answers
var questions = [
    // Data question
    {
        title: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        answer: "alerts"
    },
    // If/else question
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parenteses",
        choiceD: "square brackets",
        answer: "parentheses"
    },
    // Arrays in Javascript question
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        answer: "all of the above"
    },
    // String values question
    {
        title: "String vlaues must be enclosed within ____ when being assigned to variables.",
        choiceA: "comams",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parentheses",
        answer: "curly brackets"
    },
    // Debugging question
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is ____.",
        choiceA: "JavaScript",
        choiceB: "terminal/bash",
        choiceC: "for loops",
        choiceD: "console.log",
        answer: "console.log"
    },
    ///etc.
];
// Event listener for start button 
// generates the first question(x)
// needs to be a modal?
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

startBtnEl.addEventListener("click", function generateQuestion() {

    let q = questions[runningQuestion];

    contentEl.innerHTML = "<p>" + q.title + "</p>";
    answerA.innerHTML = q.choiceA;
    answerB.innerHTML = q.choiceB;
    answerC.innerHTML = q.choiceC;
    answerD.innerHTML = q.choiceD;
    startBtnEl.style.display = 'none';
    choicesEl.style.display = 'block';
    contentEl.style.display = 'block';
    headerEl.style.display = 'none';
    introEl.style.display = 'none';

});

// Event listener for answers
answerA.addEventListener("click", function showAnswer() {
    
    let q = questions[runningQuestion];

    indicatorFeedbackEl.innerHTML = "<p>" + q.answer + "</p>";
    indicatorFeedbackEl.style.display = 'block';

});

answerB.addEventListener("click", function showAnswer() {
    
    let q = questions[runningQuestion];

    indicatorFeedbackEl.innerHTML = "<p>" + q.answer + "</p>";
    indicatorFeedbackEl.style.display = 'block';

});

answerC.addEventListener("click", function showAnswer() {
    
    let q = questions[runningQuestion];

    indicatorFeedbackEl.innerHTML = "<p>" + q.answer + "</p>";
    indicatorFeedbackEl.style.display = 'block';

});

answerD.addEventListener("click", function showAnswer() {
    
    let q = questions[runningQuestion];

    indicatorFeedbackEl.innerHTML = "<p>" + q.answer + "</p>";
    indicatorFeedbackEl.style.display = 'block';

});