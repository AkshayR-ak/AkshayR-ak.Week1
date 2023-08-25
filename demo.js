let quizData = [
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementbyId()",
        b: "getElementbyClass()",
        c: "Both a and b",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is not a primitive data type in JavaScript?",

        a: "Number",
        b: "String",
        c: "Boolean",
        d: "Object",
        correct: "d",
    },
    {
        question: "What does the “typeof” operator do in JavaScript?",
        a: "Returns the data type of a variable",
        b: "Checks if a variable is defined",
        c: "Assigns a value to a variable",
        d: "Concatenates two strings",
        correct: "a",
    },
    {
        question: "Which of the following is not a comparison operator in JavaScript?",
        a: "==",
        b: "===",
        c: "!=",
        d: "=<",
        correct: "d",
    },
];
let quiz = document.getElementById("quiz");
let answerElements = document.querySelectorAll(".answer");

let questionElement = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
let deselectAnswers = () => { answerElements.forEach((answer) => (answer.checked == false)); };
let getSelected = () => {
    let answer;
    answerElements.forEach((answerElements) => {
        if (answerElements.checked) answer = answerElements.id;
    }); return answer;
};
let loadQuiz = () => {
    deselectAnswers();
    let currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();

submitButton.addEventListener("click", () => {
    let answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++; currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="history.go(0)">take test again</button> ` }
    }
});