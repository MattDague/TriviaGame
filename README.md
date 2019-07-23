# TriviaGame

https://mattdague.github.io/TriviaGame/

Welcome to my trivia game based on the television show The Office. This is very challenging quiz meant for the truest of fans so don't be discouraged if its too hard.

To get started simply click the start button which will start the timer of only 2 minutes. There are 8 total questions, each with 4 possible answers. If the time runs out or the submit button is clicked the ending page will display. That page contains the total amount of right answers, wrong answers and your percentage score. Clicking reset here will start the game over and give a chance for a better score.


Challenge
-------------------
The challenge of this project was to create a game that displays a number of questions to the user when the start button is clicked and then check the users answers for correctness all while enforcing a time limit.
This project starts a countdown interval and display every question with their potential answers once started. Each question and answer is generated onto the page from and array and each is given an id dynamically using the value of "i" in the loop. The answers are checked using a series of if statements and are pushed to either correct, incorrect or unanswered.

