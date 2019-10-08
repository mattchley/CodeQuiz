// Universal Elements
var startPageEl = document.getElementById('startpage')
var startBtnEl = document.getElementById('startbtn')
var scoreDisplayEl = document.getElementById('score')
var timerDisplayEl = document.getElementById('timer')
var quizContentEl = document.getElementById('quizcontent')
var answerA = document.getElementById('a')
var answerB = document.getElementById('b')
var answerC = document.getElementById('c')
var answerD = document.getElementById('d')
var userNamerInputEl = document.getElementById('username')
var questionAr = 
// the start page must render something like this
<div id="container">
        <h1>Coding Quiz Challenge</h1>
        <p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers
            will penalize your score time by 10 seconds.</p>
        <button id="startBtn">Start Quiz</button>
    </div>


// Timer script
// taken from activity 9 for a 5 second count down. [Needs to be a 75 second count down: can be set by putting the timeLeft = 75?, must execute end function when timer is zero]
function prepareRead() {
    var timeLeft = 5;
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        speedRead();
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }

// Score calculator [based on time left at the end, subtracts 15seconds (thus 15 points) from a wrong answer]

// Question generator

// Answer Check

// Event listener for start button
startBtn.addEventListener('click', function(begin)){
var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;
var q = question[runningQuestionIndex];
function (begin){
question.innerHTML = "<p>" + q.question + "</p>";
answerA.innerHTML = q.answerA;
answerB.innerHTML = q.answerB;
answerC.innerHTML = q.answerC;
answerD.innerHTML = q.answerD;
}
}
// Event listener for any question to start the next question
nextQuestionBtn.addEventListener('click', function(next)){

}
// input space for user name that local stores the name and score
userNamerInputEl.addEventListener('click', function(save)){

}