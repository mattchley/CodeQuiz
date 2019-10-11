
var scoreEl = document.querySelector("#score");
var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector("#title");
var contentEl = document.querySelector("#content");
var startEl = document.querySelector('#startbtn');
var answersEl = document.querySelector('#answers');
var feedbackEl = document.querySelector("#feedback");
var backEl = document.querySelector("#back");
var clearEl = document.querySelector("#clear");
var infoEl = document.querySelector("#info");
var usernameEl = document.querySelector('#username');
var round = 1;
var score = 0;
var usernames = [];

// prepareCountdown();
// init();
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

usernameEl
startEl.innerHTML = "<button>" + "Start quiz" + "</button>";
titleEl.innerHTML = "<h1>" + "Coding Quiz Challenge" + "<h>";
infoEl.innerHTML = "<p>" + "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 15 seconds." + "</p>";

// for loop to propagate questions/answers [doesnt do one answer at a time]
startEl.addEventListener("click", function renderQuestion() {
    var questionObj = qs[round - 1];
    // propogates questions
    var question = questionObj.title;
    var grabTitles = document.createElement('p')
    grabTitles.textContent = question;
    contentEl.appendChild(grabTitles);

    // for loop answers
    var choices = questionObj.choices;
    for (i = 0; i < 4; i++) {
        var grabAnswers = document.createElement('button')
        grabAnswers.textContent = choices[i];
        answersEl.appendChild(grabAnswers);
    };

    // removes start button and h1 title
    startEl.innerHTML = " ";
    titleEl.innerHTML = " ";
    infoEl.innerHTML = ' ';

    answersEl.addEventListener('click', function generateFeedback() {
        var questionObj = qs[round - 1];
        var correctAnswer = questionObj.answer;
        // propagates correct answer
        var showFeedback = document.createElement('p')
        showFeedback.textContent = correctAnswer;
        feedbackEl.appendChild(showFeedback);
    })

});

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

// View Highscore 
scoreEl.addEventListener('click', function generateScoreList() {

    // lists scores needs:storage, todo list foramting
    var grabScores = document.createElement('li')
    grabScores.textContent = "scores";
    contentEl.appendChild(grabScores);

    // back button that goes back to main page
    var backBtn = document.createElement('button')
    backBtn.textContent = "Go back"
    backEl.appendChild(backBtn);
    backEl.addEventListener('click', function homePage() {
        window.location.reload();
    });

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

    // local storage here
    usernameEl.addEventListener("submit", function (event) {





    });
});


// event.preventDefault();

// var usernameText = todoInput.value.trim();

// // Return from function early if submitted todoText is blank
// if (usernameText === "") {
//   return;
// }

// // Add new todoText to todos array, clear the input
// usernames.push(usernameText);
// todoInput.value = "";

// // Store updated todos in localStorage, re-render the list
// storeTodos();
// renderTodos();
// });
// function init() {
//     // Get stored todos from localStorage
//     // Parsing the JSON string to an object
//     var storedUsernames = JSON.parse(localStorage.getItem("todos"));

//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedUsernames !== null) {
//       todos = storedUsernames;
//     }

//     // Render todos to the DOM
//     renderTodos();

// function storeTodos() {
//     // Stringify and set "todos" key in localStorage to todos array
//     localStorage.setItem("todos", JSON.stringify(usernames));
//   }

//   // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//     event.preventDefault();

//     var todoText = todoInput.value.trim();

//     // Return from function early if submitted todoText is blank
//     if (todoText === "") {
//       return;
//     }

//     // Add new todoText to todos array, clear the input
//     todos.push(todoText);
//     todoInput.value = "";

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   });