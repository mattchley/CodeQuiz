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

// Event listener for start button

// Event listener for any question to start the next question

// input space for user name that local stores the name and score