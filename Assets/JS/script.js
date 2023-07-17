var startEl = document.getElementById('startButton');
var titleEl = document.getElementById('questionTitles');
var QsEl = document.getElementById('questionChoices');
var hideEl= document.getElementsByClassName('hidden');
var questionsindex =0;

var questions = [
  {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
},
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
},
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
},
{
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

function startQuiz () {
//   need to create a title element, hide the start button after it is clicked, need to create buttons for the choice objects, need to show the correct answer.
// we only want to loop through the length of the choices array. we have to grab each of the index arrays
// need to add the click portion and increment each question in after the click and you need to make a separate function.
titleEl.textContent = questions[questionsindex].title;
for (let index = 0; index < questions[questionsindex].choices.length; index++) {
  const choiceq = questions[questionsindex].choices[index];
  var choicebutton = document.createElement('button');
  choicebutton.textContent = choiceq;
  QsEl.appendChild(choicebutton);
  console.log(choiceq)
}
};

// timer portion
var startsecs = 120;
function quizTimer(){
var timer = setInterval(function() {
    if(startsecs <= 0){
        clearInterval(timer);
        alert('Your quiz is over! Please see where you landed on the highscore list!');
    };
    console.log('timer function');
    document.getElementById('countdown').innerHTML=startsecs;
    startsecs--;
}, 1000);
};

// function selectAnswer(){
    
// }

// function scoreAnswers() {
    
// }

// function hideQuestions(){

// }
















startEl.addEventListener('click', function(){
startQuiz(); quizTimer();
// disappear();
});
