// $(document).ready(function() {

// Variables
var trivia = {
startupScreen: "",
correct: 0,
incorrect: 0,
unanswered: 0,
questionCounter: 0,
timeCounter: 20,
clock: "",
gameHTML: "",

questionsArray: [
    "Which one is not a starter?", "Which Pokemon uses a stone to evolve?", "Which Pokemon became endangered due to hunting?", "How many 'eeveelutions' are there?", "Besides the Pokeball, Great Ball, Ultra Ball, and Master Ball, what other ball could be used to catch pokemon?"],

answersArray: [
    ["Bulbasaur", "Blastoise", "Pidgeotto", "Charmeleon"], ["Meowth", "Poliwag", "Snorlax", "Pikachu" ], ["Farfetched", "Doduo", "Krabby", "Onix"], ["2", "3", "5", "8"], ["Premier Ball", "Super Ball", "Safari Ball", "Dive Ball"]
],

 correctAnswers: [
    "Pidgeotto", "Pikachu", "Farfetched", "Safari Ball"]

};


// Functions
function startScreen(){
    trivia.startupScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Can you catch 'em all?</a></p>";
    $(".main-area").html(trivia.startupScreen)
};

function timer(){
    trivia.clock = setInterval(twentySeconds, 1000);
    function twentySeconds(){
        if (trivia.timeCounter === 0){
            timeOutLoss();
            clearInterval(trivia.clock);
        }
        if (trivia.timeCounter > 0) {
            trivia.timeCounter --;
        }
        $(".timer").html(trivia.timeCounter);
    }};

function wait(){
    if (trivia.questionCounter < 4) {
        trivia.questionCounter ++;
        generateHTML();
        trivia.timeCounter = 20;
        timer();
    }
    else {
        finScreen();
    }};

    function win() {
        trivia.correct ++;
        trivia.gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + trivia.correctAnswers[trivia.questionCounter] + "</p>";
        $(".main-area").html(trivia.gameHTML);
        setTimeout(wait, 4000);
    };

    function loss() {
        trivia.incorrect ++;
        trivia.gameHTML = "<p class='text-center time-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "/span></p>" + "<p class =''text-center'>Wrong! The correct answer is: " + trivia.correctAnswers[trivia.questionCounter] + "</p";
        $(".main-area").html(trivia.gameHTML);
        setTimeout(wait, 4000);
    };

    function timeOutLoss() {
        trivia.unanswered ++;
        trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + trivia.correctAnswers[trivia.questionCounter] + "</p>";
        $(".main-area").html(trivia.gameHTML);
        setTimeout(wait, 4000);
    };

    function finalScreen() {
        trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + trivia.correct + "</p>" + "<p>Wrong Answers: " + trivia.incorrect + "</p>" + "<p>Unanswered: " + trivia.unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".main-area").html(trivia.gameHTML);
    };

    function resetGame() {
        trivia.questionCounter = 0;
        trivia.correct = 0;
        trivia.incorrect = 0;
        trivia.unanswered = 0;
        trivia.timeCounter = 20;
        generateHTML();
        timer();
    };

    function generateHTML() {
        trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + trivia.questionsArray[trivia.questionCounter] + "</p><button class='first-answer answer'>A. " + trivia.answerArray[trivia.questionCounter][0] + "</button><br><button class='answer'>B. " + trivia.answerArray[trivia.questionCounter][1]+ "</button><br><button class='answer'>D. "+ trivia.answerArray[trivia.questionCounter][2]+ "</button><br><button class='answer'>D. "+ trivia.answerArray[trivia.questionCounter][3]+ "</button>";
        $(".main-area").html(trivia.gameHTML);
    };



    startScreen();

    $("body").on("click", ".start-button", function(event){event.preventDefault();
    generateHTML();
    timer();
    });

    $("body").on("click", "answer", function(event){
        selectedAnser = $(this).text();
        if (selectedAnser === trivia.correctAnswers[trivia.questionCounter]) {
            clearInterval(trivia.clock);
            win();
        }
        else {
            clearInterval(trivia.clock);
            loss();
        }
    });

    $("body").on("click", ".reset-button", function (event){
        resetGame();
    });





// })//$(document).ready(function() {

