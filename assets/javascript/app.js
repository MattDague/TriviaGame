//full list of questions and answers as objects within an array
var trivia = [
    {
        question: "What is Erin's real first name?",
        answers: ["Erin", "Kelly", "Maggie", "Astrid"],
        // The "correct" part of the object ended up not being used but I left it for clarity on what the correct answer is
        correct: "Kelly"
    },
    {
        question: "What is the name of Michael Scott's book?",
        answers: ["Threat Level Midnight", "Make Friends First, Sales Second, Love Third", "Somehow I Manage", "I am Beyonce, Always"],
        correct: "Somehow I Manage"
    },
    {
        question: "What is the worst pizza place in Scranton?",
        answers: ["Alfredo's Pizza Castle", "Pizza by Alfredo", "Alfredo's Pizza", "Alfredo's Pizza Cafe"],
        correct: "Pizza by Alfredo"
    },
    {
        question: "Who is not a character in Threat Level Midnight?",
        answers: ["Cherokee Jack", "Goldenface", "Catherine Zeta-Jones", "Michael Klump"],
        correct: "Michael Klump"
    },
    {
        question: "What did Prison Mike go to jail for?",
        answers: ["Stealing the President's rubies", "Kidnapping the President's son", "Framing the President for murder", "Framed for murder by the President"],
        correct: "Kidnapping the President's son"
    },
    {
        question: "Which of the following is not real a Schrute family member?",
        answers: ["Moisley", "Zeke", "Eldred", "Honk"],
        correct: "Moisley"
    },
    {
        question: "What award does Toby win at the last Dundies?",
        answers: ["Extreme Repulsiveness", "Gross Incompetence", "Excedingly Off-Putting", "Worst Dad"],
        correct: "Extreme Repulsiveness"
    },
    {
        question: "Which of the following is not one of Pam's desert island movies?",
        answers: ["Fargo", "The Princess Bride", "Dazed and Confused", "The Goonies"],
        correct: "The Goonies"
    },

]
//variables for correct answers at end
var rightAnswers = 0
var wrongAnswers = 0
var unanswered = 0
var clockRunning = false
var time = 120
var setInterval
var interval


//start button functionality
$("#startButton").on("click", function () {

    //hide start button
    $("#startButton").css("display", "none")

    //clicking this button calls gamestart function
    gameStart();

});

//begin game
function gameStart() {
    //starting display for countdown timer
    clearInterval(interval);
    $("#display").text("02:00");
    time = 120
    timeStart();



    //display all questions
    for (var j = 0; j < trivia.length; j++) {
        var addBreak = "<br><br>"
        $("#quiz").append(addBreak)
        $("#quiz").append("<h6>" + trivia[j].question + "</h5>")
        console.log(trivia[j].question)

        //displays all possible answers for each question
        for (var i = 0; i < trivia[j].answers.length; i++) {
            //variable for applying html to each answer and giving them a name
            var current = "<br><input type='radio' name='q" + j + "Answer' id='answer" + j + i + "'> " + trivia[j].answers[i] + "</input>";
            $("#quiz").append(current);
            console.log(trivia[j].answers[i])

        };

    };

    //creates submit button
    var button = "<br><br> <button type='submit' id='endButton' class='btn btn-primary btn-lg btn-dark'>Submit</button>";
    $("#quiz").append(button);
    $("#endButton").on("click", function () {
        endGame()
    });
};

//starts countdown
function timeStart() {

    if (clockRunning == false) {
        // turns clock on and sets interval to 1 second
        interval = setInterval(count, 1000);
        clockRunning = true;
    }

};
// countdown function 
function count() {
    // -- so that clock time goes down instead of up
    time--;
    var converted = timeConverter(time);
    $("#display").text(converted);
    if (time == 0) {
        endGame()
    };
};

//converter for minutes to seconds
function timeConverter(t) {
    //var for minutes and seconds
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    //display for seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    //display for minutes
    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //final display
    return minutes + ":" + seconds;
};

//end of game function
function endGame() {
    // end game runs functions to check answer
    answerChecker();
    clockRunning = false;
    clearInterval(interval);

    // hides clock display, replaces html of quiz with lines showing right answers, wrong answers, unanswered, and final score %
    $("#display").hide();
    $("#quiz").html("<h5>Right answers: " + rightAnswers + " </h5><br><h5>Wrong answers: " + wrongAnswers + "</h5><br>");
    //formula for unanswered
    var unanswered = trivia.length - (rightAnswers + wrongAnswers)
    $("#quiz").append("<h5>Unanswered: " + unanswered + "</h5><br>");
    //formula for determining % score
    var score = Math.ceil((rightAnswers / trivia.length) * 100);
    $("#quiz").append("<h2>Your score is: " + score + "%!</h2>");
    console.log(trivia.length)
    console.log(rightAnswers)
    console.log(wrongAnswers)
    console.log(unanswered)

    // restart button
    var button = "<br><br> <button type='submit' id='restartButton' class='btn btn-primary btn-lg btn-dark'>Play Again?</button>";
    $("#quiz").append(button);
    $("#restartButton").on("click", function () {
        restart();
    });

};

// function to restart, sets variables to 0 and calls game start
function restart() {
    $("#quiz").html("");
    $("#display").show();
    rightAnswers = 0
    wrongAnswers = 0
    unanswered = 0
    gameStart()

}
//win/loss check
function answerChecker() {
    // checks question 1
    if ($("#answer01").is(":checked")) {
        rightAnswers++
    }
    //need to check against each answer in order to populate unanswered
    else if  (($("#answer00").is(":checked")) || ($("#answer02").is(":checked")) || ($("#answer03").is(":checked"))) {
        wrongAnswers++
    };
    // checks question 2
    if ($("#answer12").is(":checked")) {
        rightAnswers++
    }
    else if  (($("#answer10").is(":checked")) || ($("#answer11").is(":checked")) || ($("#answer13").is(":checked"))) {
        wrongAnswers++
    };
    // checks question 3
    if ($("#answer21").is(":checked")) {
        rightAnswers++
    }
    else if (($("#answer20").is(":checked")) || ($("#answer22").is(":checked")) || ($("#answer23").is(":checked"))) {
        wrongAnswers++
    };
    // checks question 4
    if ($("#answer33").is(":checked")) {
        rightAnswers++
    }
    else if (($("#answer30").is(":checked")) || ($("#answer31").is(":checked")) || ($("#answer32").is(":checked"))) {
        wrongAnswers++
    };
    // checks question 5
    if ($("#answer41").is(":checked")) {
        rightAnswers++
    }
    else if (($("#answer40").is(":checked")) || ($("#answer42").is(":checked")) || ($("#answer43").is(":checked"))) {
        wrongAnswers++
    };
    // checks question 6
    if ($("#answer50").is(":checked")) {
        rightAnswers++
    }
    else if (($("#answer51").is(":checked")) || ($("#answer52").is(":checked")) || ($("#answer53").is(":checked"))) {
        wrongAnswers++
    };
    // checks question 7
    if ($("#answer60").is(":checked")) {
        rightAnswers++
    }
    else if (($("#answer60").is(":checked")) || ($("#answer62").is(":checked")) || ($("#answer63").is(":checked"))) {
        wrongAnswers++
    };
    // checks question 8
    if ($("#answer73").is(":checked")) {
        rightAnswers++
    }
    else if (($("#answer70").is(":checked")) || ($("#answer71").is(":checked")) || ($("#answer72").is(":checked"))) {
        wrongAnswers++
    };
};