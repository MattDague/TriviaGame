var trivia = [
    {
        question: "What is Erins real first name?",
        answers: ["Erin", "Kelly", "Maggie", "Astrid"],
        correct: "Kelly"

    },
    {
        question: "What is the name of Michael Scott's book?",
        answers: ["Threat Level Midnight", "Make Friends First, Sales Second, Love Third", "Somehow I Manage", "I am Beyone, Always"],
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
        question: "What did Prison Mike go to Jail for?",
        answers: ["Stealing the President's rubies", "Kidnapping the President's son", "Framing the President for murder", "Framed for murder by the President"],
        correct: "Kidnapping the President's son"
    },
    {
        question: "Which of the following is not real a Shrute family member?",
        answers: ["Moisley", "Zeke", "Eldred", "Honk"],
        correct: "Moisley"
    },
    {
        question: "What award does Toby win at the last Dundies",
        answers: ["Extreme Repulsiveness", "Gross Incompetence", "Excedingly Off-Putting", "Worst Dad"],
        correct: "Extreme Repulsiveness"
    },
    {
        question: "Which of the following is not one of Pam's Desert Island Movies?",
        answers: ["Fargo", "The Princess Bride", "Dazed and Confused", "The Goonies"],
        correct: "The Goonies"
    },

]

//start button functionality
$("#startButton").on("click", function () {

    //hide start button
    $("#startButton").css("display", "none")

    //in progress -display all questions

    for (var j = 0; trivia.length; j++) {
        var addBreak = "<br><br>"
        $("#quiz").append(addBreak)
        $("#quiz").append(trivia[j].question)
        

        for (var i = 0; i < 4; i++) {
            //variable for applying html to each answer and giving them a name
            var current = "<br><input type='radio' name='q" + j + "Answer'> " + trivia[j].answers[i] + "</input>";
            $("#quiz").append(current);
    
        };

        
    }


    //working display for 1st question
    // $("#quiz").append(trivia[0].question);

    // for (var i = 0; i < 4; i++) {
    //     var current = "<br><input type='radio' name='q1Answer'> " + trivia[0].answers[i] + "</input>";
    //     $("#quiz").append(current);

    // };
});


