
var scoreEl = document.querySelector("#score");
var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector("#title");
var contentEl = document.querySelector("#content");
var startEl = document.querySelector('#startbtn');
var answersEl = document.querySelector('#answers');
var answer1El = document.querySelector('#answer1');
var answer2El = document.querySelector('#answer2');
var answer3El = document.querySelector('#answer3');
var answer4El = document.querySelector('#answer4');
var feedbackEl = document.querySelector("#feedback");
var backEl = document.querySelector("#back");
var clearEl = document.querySelector("#clear");
var infoEl = document.querySelector("#info");
var usernameEl = document.querySelector('#username');
var round = 1;
var timeLeft = 75;
var score = timeLeft;
var usernames = [];
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
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
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
    }
    
];
var renderQsAs = function generateQuestion() {
    var questionObj = qs[round -1];
    // propogates questions
    var question = questionObj.title;
    contentEl.innerHTML = "<p>" + question + "</p>"

    // for loop answers
    var choices = questionObj.choices;
    for (i = 0; i < choices.length; i++) {
        answer1El.innerHTML = '<button>' + choices[0] + '</button>';
        answer2El.innerHTML = '<button>' + choices[1] + '</button>';
        answer3El.innerHTML = '<button>' + choices[2] + '</button>';
        answer4El.innerHTML = '<button>' + choices[3] + '</button>';
    };

    // removes start button and h1 title
    startEl.innerHTML = " ";
    titleEl.innerHTML = " ";
    infoEl.innerHTML = ' ';
};

var renderFeedback = function generateFeedback() {
    var questionObj = qs[round -1];

    var correctAnswer = questionObj.answer;
    // propagates correct answer
    feedbackEl.innerHTML = '<p>' + correctAnswer + " is the correct answer." + '</p>';

    round++;
    renderQsAs()
    var wrong = function deductTime(){
            timeLeft - 15;

        };
        
        if (round === 0) {
            answers3El = true;
        } else if (round === 0) {
            answer1El = wrong;
            answers2El = wrong;
            answers4El = wrong;
        };

        if (round === 1) {
            answers3El = true;
        } else if (round === 1) {
            answer1El = wrong;
            answers2El = wrong;
            answers4El = wrong;
        };

        if (round === 2) {
            answers4El = true;
        } else if (round === 2) {
            answer1El = wrong;
            answers2El = wrong;
            answer3El = wrong;
        };

        if (round === 3) {
            answers2El = true;
        } else if (round === 3) {
            answer1El = wrong;
            answer3El = wrong;
            answer4El = wrong;
        };

        if (round === 4) {
            answers4El = true;
        } else if (round === 4) {
            answer1El = wrong;
            answers2El = wrong;
            answer3El = wrong;
        };
        
};

startEl.innerHTML = "<button>" + "Start quiz" + "</button>";
titleEl.innerHTML = "<h1>" + "Coding Quiz Challenge" + "<h>";
infoEl.innerHTML = "<p>" + "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 15 seconds." + "</p>";

// for loop to propagate questions/answers skipping 3again 
startEl.addEventListener("click", renderQsAs);

answersEl.addEventListener('click',renderFeedback); 


// timer functionality (needs connection with score)
startEl.addEventListener("click", function prepareCountdown() {
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;
        // when time = send to username page
        if (timeLeft === 0) {
            timerEl.textContent = "";
            // v will be the funciton that sends them to the end page el
            // go to saveUsername();
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
    titleEl.innerHTML = '<h1>' + 'All Done!' + '</h1>';
    var finalScore = document.createElement("p");
    finalScore.textContent = prepareCountdown();
    contentEl.innerHTML = '<p>' + + '</p>'

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