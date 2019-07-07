var trivia = 
    {q1: {
        question: "What is Erins real first name?",
        answers: ["Erin", "Kelly", "Maggie", "Astrid"],
    },
}



$("#startButton").on("click", function() {
    $("#quiz").html(trivia.q1.question);
    
    for (var i = 0; i < trivia.q1.answers.length; i++){
        var current = "<br><input type='radio' name='q1Answer'> " + trivia.q1.answers[i] + "</input>";
        // $(this).val(trivia.q1.answers[i] + )
        $("#quiz").append(current)
        // $(trivia.q1.answers[i]).attr("class", "test")
    };
});


