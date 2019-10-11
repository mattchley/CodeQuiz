
var scoreEl = document.querySelector("#score")
var timerEl = document.querySelector("#timer")
var titleEl = document.querySelector("#title")
var contentEl = document.querySelector("#content")
var startEl = document.querySelector('#startbtn')
var answersEl = document.querySelector('#answers')
var feedbackEl = document.querySelector("#feedback")
var backEl = document.querySelector("#back")
var clearEl = document.querySelector("#clear")
var infoEl = document.querySelector("#info")
var usernameEl =document.querySelector('#username')
var usernames = [];
prepareCountdown();
init();
var qs = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above",],
        answer: "all of the above"
    },
    {
        title: "String vlaues must be enclosed within ____ when being assigned to variables.",
        choices: ["comams", "curly brackets", "quotes", "parentheses"],
        answer: "curly brackets"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is ____.",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log",],
        answer: "console.log"
    },
];

startEl.innerHTML = "<button>" + "Start quiz" + "</button>"
titleEl.innerHTML = "<h1>" + "Coding Quiz Challenge" + "<h>"
infoEl.innerHTML = "<p>" + "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 15 seconds." + "</p>"

// for loop to propagate questions/answers (does not call from the array) might be fixed with activity 27 todo list complet
startEl.addEventListener("click", function generateQuestion() {
    // propagates questions 
    for (i = 0; i < qs.length; i++) {
        var grabTitles = document.createElement('p')
        grabTitles.textContent = qs[i];
        contentEl.appendChild(grabTitles);
    }
    // propagates answer buttons
    for (i = 0; i < qs.length; i++) {
        var grabAnswers = document.createElement('button')
        grabAnswers.textContent = qs[i];
        answersEl.appendChild(grabAnswers);
    }
    // removes start button and h1 title
    startEl.innerHTML = " ";
    titleEl.innerHTML = " ";
    infoEl.innerHTML = ' ';
});

// make answerEl event listener that shows the answer (does not call from array)
answersEl.addEventListener('click', function generateFeedback() {
    // propagates correct answer
    for (i = 0; i < qs.length; i++) {
        var showFeedback = document.createElement('p')
        showFeedback.textContent = qs[i];
        feedbackEl.appendChild(showFeedback);
    }

})

// timer functionality (needs connection with score)
startEl.addEventListener("click", function prepareCountdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;
        // when time = send to username page
        if (timeLeft === 0) {
            timerEl.textContent = "";
            // v will be the funciton that sends them to the end page el
            allDone();
            clearInterval(timeInterval);
        }

    }, 1000);
});

// score tracker 
scoreEl.addEventListener('click', function generateScoreList() {

    // lists scores needs:storage, todo list foramting
    var grabScores = document.createElement('li')
    grabScores.textContent = "scores";
    contentEl.appendChild(grabScores);

    // back button that goes back to main page
    var backBtn = document.createElement('button')
    backBtn.textContent = "Go back"
    backEl.appendChild(backBtn);
    backEl.addEventListener('click', function homePage(){
        window.location.reload();
    } );

    // Clear Highscore that erases storage
    var clearScores = document.createElement('button');
    clearScores.textContent = "Clear Highscores";
    clearEl.appendChild(clearScores);
    clearEl.addEventListener('click', function wipeScoreList() {
        // local storage stuff here
    });

    // removes start button and content
    startEl.innerHTML = " ";
    infoEl.innerHTML = " ";
    timerEl.innerHTML = ' ';

});

//username input field
usernameEl.addEventListener('submit', function saveUsername() {
    var done = document.createElement('h1');
    done.textContent = "All Done";
    titleEl.appendChild(done);

    var finalScore = document.createElement("p");
    finalScore.textContent = prepareCountdown();
    contentEl.appendChild(finalScore);

});