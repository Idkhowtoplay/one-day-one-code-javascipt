const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        correct: 0,
    },
    {
        question: "Berapa hasil dari 5 + 3?",
        options: ["5", "8", "10", "15"],
        correct: 1,
    },
    {
        question: "Siapa penemu lampu pijar?",
        options: ["Isaac Newton", "Albert Einstein", "Thomas Edison", "Nikola Tesla"],
        correct: 2,
    },
    {
        question: "Planet terbesar dalam tata surya adalah?",
        options: ["Bumi", "Mars", "Jupiter", "Venus"],
        correct: 2,
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("questions-container");
const resultContainer = document.getElementById("result");
const scoreText = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        <div class="options">
            ${currentQuestion.options
                .map(
                    (option, index) => 
                        `<button onclick="checkAnswer(${index})">${option}</button>`
                )
            .join("")}
        </div>
    `;
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreText.textContent = `Skor Anda: ${score} dari ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    loadQuestion();
}

loadQuestion();