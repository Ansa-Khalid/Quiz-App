const quizData=[
    {
    question:'What is the meaning of Pakistan?',
    a:'Muslim Land',
    b:'Land of five rivers',
    c:'Desert',
    d:'Holy Land',
    correct:'d'
    },
    {
    question: 'Solve : 200 - (96 ÷ 4)',
    a: 105,
    b: 176,
    c: 26,
    d: 16,
    correct:'b'
    },
    {
    question:'Who is the father of Internet?',
    a: 'Denis Riche',
    b: 'Martin Cooper',
    c: 'Vint Cerf',
    d: 'Charles Babbage',
    correct:'c'
    },
    {
    question:'National fish of Pakistan is',
    a: 'Goldfish',
    b: 'Whale',
    c: 'Himalayan mahseer or golden mahseer',
    d: 'White dolphin',
    correct:'c'
    },
    {
    question:'National flower of Pakistan is',
    a: 'Rose',
    b: 'Tea Rose',
    c: 'Jasmine',
    d: 'Iris',
    correct:'c'
    },
    {
    question:'National instrument of Pakistan is',
    a: 'Piano',
    b: 'Dhol',
    c: 'Guitar',
    d: 'Dafli',
    correct:'d'
    },
    {
    question:'National vegetable of Pakistan is',
    a: 'Broccoli',
    b: 'Tomato',
    c: 'Okra (lady finger)',
    d: 'Cucumber',
    correct:'c'
    },
    {
    question:'National dish of Pakistan is',
    a: 'Pulao',
    b: 'Chicken Tandoori',
    c: 'Chicken Rice',
    d: 'Biryani',
    correct:'d'
    },
    {
    question:'National fruit of Pakistan is',
    a: 'Mango',
    b: 'Banana',
    c: 'Pine Apple',
    d: 'Grapes',
    correct:'a'
    },
    {
    question:'National beverage of Pakistan is',
    a: 'CocaCola',
    b: 'Orange Juice',
    c: 'Sugarcane Juice',
    d: 'Lassi',
    correct:'c'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});