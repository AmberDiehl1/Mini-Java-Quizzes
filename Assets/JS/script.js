    // figure out score correct vs incorrect; add scores to local storage to keep highscore and create a page dedicated to highscore.;
    // setting attributes; create appends; event listener; local storage
    // I need each answer choice to be graded 
    // I need the final grade/score to be saved on the local storage to create a highscore page. 
    // In order to save a highscore people need a place to initial and submit their scores. 

    // questions 
    var questions = [
        {
            title: 'Commonly used data types DO NOT include:',
            choices: [
                { text:'Strings', correct: false},
                { text:'Booleans', correct: false}, 
                { text:'Alerts', correct: true},  
                { text:'Numbers', correct: false},
            ],
        },
        {
            title: 'The condition in an if / else statement is enclosed within ____.',
            choices:  [
                { text:'Quotes', correct: false},
                { text:'Curly brackets', correct: false}, 
                { text:'Parentheses', correct: true},  
                { text:'Square brackets', correct: false},
            ],
        },
        {
            title: 'Arrays in JavaScript can be used to store ____.',
            choices: [ 
                { text:'Numbers and strings', correct: false},
                { text:'Other arrays', correct: false}, 
            { text:'Booleans', correct: false},  
            { text:'All of the above', correct: true},
        ],
    },
    {
        title:
        'String values must be enclosed within ____ when being assigned to variables.',
        choices: [ 
            { text:'Commas', correct: false},
            { text:'Curly brackets', correct: false}, 
            { text:'Quotes', correct: true},  
            { text:'Parentheses', correct: false},
        ],
    },
    {
        title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: [ 
            { text:'JavaScript', correct: false},
            { text:'Terminal / bash', correct: false}, 
            { text:'For loops', correct: false},  
            { text:'Console.log', correct: true},
        ],
    },
];

var startEl = document.getElementsByClassName('buttonConfig');
var titleEl = document.getElementById('questionTitles');
var questionEl = document.getElementById('questionChoices');
var questionsindex = 0;
var score = 0;

function startQuiz (){
    questionsindex =0;
    score =0;
    showQuiz();
}

function showQuiz (){
    quizTimer();
    hideChoices();
    var currentQuestion = questions[questionsindex];
    var questionNumber = questionsindex + 1;
    titleEl.innerHTML = questionNumber + '.' + currentQuestion.title;
    for (let index = 0; index < questions[questionsindex].length; index++) {
        var next = questions[index];
        var nextBtn = document.createElement('button');
        nextBtn.textContent = next;
        questionEl.appendChild(nextBtn);
    }

    currentQuestion.choices.forEach(choice => {
        var extraButton = document.createElement('button');
        extraButton.innerHTML= choice.text;
        extraButton.classList.add('buttonConfig2');
        questionEl.appendChild(extraButton);
        if(choice.correct){
            extraButton.dataset.correct = choice.correct;
        }
        extraButton.addEventListener('click',selectAnswer);
    });   
}

// clears the previous answer choices
function hideChoices() {
    while(questionEl.firstChild){
        questionEl.removeChild(questionEl.firstChild);
    } 
}

// checks the answers user selects and determines if its correct from the questions variable. added 2 classes for correct & incorrect to style them.
function selectAnswer(e){
    var selectedAns = e.target;
    var correctOrNot = selectedAns.dataset.correct === 'true';
    if(correctOrNot){
        selectedAns.classList.add('correct');
        score++;
        // go to the next question
    }else{
        selectedAns.classList.add('incorrect')
        // take 10 seconds away from time. show the -10 on the screen
        startsecs -= 10;
        // go to the next question
    }
    // takes away the multiple click option 
    Array.from(questionEl.children).forEach(extraButton => {
        if(extraButton.dataset.correct === 'true'){
            extraButton.classList.add('correct');
        }
        extraButton.disabled = true;
    });
}

// timer portion
var startsecs = 100;
function quizTimer() {
    var timer = setInterval(function () {
        if (startsecs <= 0) {
            clearInterval(timer);
        };
        document.getElementById('countdown').innerHTML = startsecs;
        startsecs--;
    }, 1000);
}

function scoredQuiz(){
    hideChoices();
    questionEl.innerHTML = 'You scored'+($(score)/$(questions.length))*100 +'%!';
    // add a textbox for initials to save to local storage for highscore page. 
    startEl.innerHTML = 'Play Again';
    
}
// startEl.addEventListener('click',function() {
//     startQuiz();
// });
startQuiz();
















