const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerELement = document.getElementById('question-container')
const questionELement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");

var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;

let shuffledQuestions,currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> 
{
    currentQuestionIndex++
    setNextQuestion()    
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerELement.classList.remove('hide')
    setNextQuestion()
}

// timer.addEventListener("click", function () {
//     if (holdInterval === 0) {
//         holdInterval = setInterval(function () {
//             secondsLeft--;
//             currentTime.textContent = "Time: " + secondsLeft;

//             if (secondsLeft <= 0) {
//                 clearInterval(holdInterval);
//                 finished();
//                 currentTime.textContent = "Out of time";
//             }
//         }, 1000);
//     }
//     render(questionIndex);
// });

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionELement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}

function resetState() {
    clearStatusClass(document.body),
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
};

function selectAnswer(e) {
    const selectedButton = e.target; 
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct),
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
     
    if (shuffledQuestions.length > currentQuestionIndex + 1 ) {
        nextButton.classList.remove('hide')

    } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')

    }
};

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')   
}

const questions = [ {
        question:'What does HTML stand for?',
        answers: [
            {text: 'A. HyperText Markup Language ', correct: true},
            {text: 'B. Hide My Mail Later', correct: false},
            {text: 'C. Hippo Tiger Moose Lynx', correct: false},
            {text: 'D. Hit The Man Lois', correct: false}
        ]
    },
    {
        question:'What does JS stand for?',
        answers: [
            {text: 'A. Java Script ', correct: true},
            {text: 'B. Just Saying', correct: false},
            {text: 'C. Junior High', correct: false},
            {text: 'D. Job Security', correct: false}
        ]
    },
    {
        question:'What does CSS stand for?',
        answers: [
            {text: 'A. Cascading Style Sheet ', correct: true},
            {text: 'B. Cascading Sheet Style', correct: false},
            {text: 'C. Correct Street Style', correct: false},
            {text: 'D. Cat Snake Snort', correct: false}
        ]
    }
];

questionIndex++;

if (questionIndex >= questions.length) {
    finished();
    createDiv.textContent = "Score:  " + score + "/" + questions.length + " correct";
} else {
    render(questionIndex);
}
questionsDiv.appendChild(createDiv);


function finished() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Finished"

    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);

            window.location.replace("./HighScores.html");
        }
    });

}