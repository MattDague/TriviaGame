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
        interval = setInterval(count, 1000);
        clockRunning = true;
    }

};
// countdown function 
function count() {
    time--;
    var converted = timeConverter(time);
    console.log(time);
    $("#display").text(converted);
    if (time == 0) {
        endGame()
    };
};

//converter for minutes to seconds
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
};

//end of game function
function endGame() {
    
    answerChecker();
    clockRunning = false;
    clearInterval(interval);
    $("#display").hide();
    $("#quiz").html("<h5>Right answers: " + rightAnswers + " </h5><br><h5>Wrong answers: " + wrongAnswers + "</h5><br>");
    var score = Math.ceil((rightAnswers / 8) * 100);
    $("#quiz").append("<h3>Your score is: " + score + "%!</h3>");

    var button = "<br><br> <button type='submit' id='restartButton' class='btn btn-primary btn-lg btn-dark'>Play Again?</button>";
    $("#quiz").append(button);
    $("#restartButton").on("click", function () {
        restart();
    });

};

function restart() {
    $("#quiz").html("");

    $("#display").show();
    $("#display").text("02:00");
    gameStart()

}
//win/loss check

function answerChecker() {
    // checks question 1
    if ($("#answer01").is(":checked")) {
        rightAnswers++
    }
    else {
        wrongAnswers++
    };
    // checks question 2
    if ($("#answer12").is(":checked")) {
        rightAnswers++
    }
    else {
        wrongAnswers++
    };
    // checks question 3
    if ($("#answer21").is(":checked")) {
        rightAnswers++
    }
    else {
        wrongAnswers++
    };
    // checks question 4
    if ($("#answer33").is(":checked")) {
        rightAnswers++
    }
    else {
        wrongAnswers++
    };
    // checks question 5
    if ($("#answer41").is(":checked")) {
        rightAnswers++
    }
    else {
        wrongAnswers++
    };
    // checks question 6
    if ($("#answer50").is(":checked")) {
        rightAnswers++
    }
    else {
        wrongAnswers++
    };
    // checks question 7
    if ($("#answer60").is(":checked")) {
        rightAnswers++
    }
    else {
        wrongAnswers++
    };
    // checks question 8
    if ($("#answer73").is(":checked")) {
        rightAnswers++
    }
    else {
        wrongAnswers++
    };
};