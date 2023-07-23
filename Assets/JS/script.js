// I need the final grade/score to be saved on the local storage to create a highscore page.  

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
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: [ 
            { text:'JavaScript', correct: false},
            { text:'Terminal / bash', correct: false}, 
            { text:'For loops', correct: false},  
            { text:'Console.log', correct: true},
        ],
    },
];



var startEl = document.querySelector('.buttonConfig');
var titleEl = document.getElementById('questionTitles');
var questionEl = document.getElementById('questionChoices');
var questionsindex = 0;
var currentQuestion = questions[questionsindex];
var score = 0;
var inputInitials = document.getElementById('initials');
var finalBtn = document.getElementById('highscoreSubmit')


function showQuiz() {
    quizTimer();
    questionEl.classList.remove('hidden');
    questionsindex = 0;
    score = 0;
    var questionNumber = questionsindex + 1;
    titleEl.innerText = questionNumber + '.' + questions[questionsindex].title;

    currentQuestion.choices.forEach(choice => {
        if(choice.text){
            var extraButton = document.createElement('button');
            extraButton.innerText= choice.text;
            extraButton.classList.add('buttonConfig2');
            questionEl.appendChild(extraButton);
            if(choice.correct){
                extraButton.dataset.correct = choice.correct;
            }
            extraButton.addEventListener('click',selectAnswer);
        }
    });  

}

// checks the answers user selects and determines if its correct from the questions variable. added 2 classes for correct & incorrect to style them.
function selectAnswer(e) {
    var selectedAns = e.target;
    if(selectedAns.dataset.correct === 'true'){
        selectedAns.classList.add('correct');
        score++;
        questionsindex += 1;
    }else{
        selectedAns.classList.add('incorrect')
        // take 10 seconds away from time. show the -10 on the screen
        startsecs -= 10;
       questionsindex += 1;
    }
    // takes away the multiple click option 
    Array.from(questionEl.children).forEach(extraButton => {
        if(extraButton.dataset.correct === 'true'){
            extraButton.classList.add('correct');
        }
        extraButton.disabled = true;
    });
    setTimeout(() => {
        // remove html elements to prepare for next question. 
        var buttons = document.getElementsByClassName('buttonConfig2')
        // makes a copy of Array so it doesn't affect our buttons copy. 
        var buttonsCopy = [...buttons];
        for (let index = 0; index < buttonsCopy.length; index++) {
            var element = buttonsCopy[index];
            element.remove();
        }
        // if ('there are no more questions') {
        //     // clearInterval(including timer and title element.)
        // } else {
        nextQuestion();
        // }
    },1000);
}

function nextQuestion(){
     titleEl.textContent = questions[questionsindex].title;
    questions[questionsindex].choices.forEach(choice => {
        var extraButton = document.createElement('button');
        extraButton.innerText= choice.text;
        extraButton.classList.add('buttonConfig2');
        questionEl.appendChild(extraButton);
        if(choice.correct){
            extraButton.dataset.correct = choice.correct;
        }
        extraButton.addEventListener('click',selectAnswer);
    });   
}

// timer portion
var startsecs = 100;
function quizTimer() {
    var timer = setInterval(function () {
        if (startsecs <= 0 ) {
            clearInterval(timer);
        };
        document.getElementById('countdown').innerHTML = startsecs;
        startsecs--;
    }, 1000);
}

function scoredQuiz(){
    hideChoices();
    inputInitials.classList.remove('hidden');
    finalBtn.classList.remove('hidden');
    var finalScore = ($(score)/$(questions.length))*100
    questionEl.innerText = 'You scored'+ finalScore +'%!';
    var initialBox = inputInitials.value 
    + finalBtn;
    // add a textbox for initials to save to local storage for highscore page. 
    startEl.innerText = 'Play Again';
    
}

function hideChoices() {
    
}

function highscore() {
    localStorage.setItem(json.stringify(finalScore), JSON.stringify(initialBox));
}

startEl.addEventListener('click', showQuiz);
















