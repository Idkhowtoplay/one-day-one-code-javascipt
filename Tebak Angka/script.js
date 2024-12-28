let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const resetButton = document.getElementById("resetButton");
const minRangeInput = document.getElementById("minRange");
const maxRangeInput = document.getElementById("maxRange");
const setRangeButton = document.getElementById("setRange");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

checkButton.addEventListener("click", () => {
    const userGuess = Number(guessInput.value);
    attempts++;
    
    if (attempts> maxAttempts) {
        feedback.textContent = `Game over! Anda telah melebihi ${maxAttempts} percobaan. Angka yang benar adalah ${randomNumber}.`;
        feedback.style.color = "red";
        checkButton.disabled = true;
        return;
    }

    if (userGuess === randomNumber) {
        feedback.textContent = `Selamat! Anda menebak angka dengan benar: ${randomNumber}.`;
        feedback.style.color = "green";
        checkButton.disabled = true;
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Terlalu rendah! Coba lagi.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Terlalu tinggi! Coba lagi.";
        feedback.style.color = "red";
    }

    attemptsDisplay.textContent = `Jumlah percobaan: ${attempts}`;
    guessInput.value = "";
});

resetButton.addEventListener("click", () => {
    attempts = 0;
    feedback.textContent = "";
    attemptsDisplay.textContent = "";
    guessInput.value = "";
    checkButton.disabled = false;
    randomNumber = Math.floor(Math.random() * 100) + 1;
});

setRangeButton.addEventListener("click", () => {
    const minRange = Number(minRangeInput.value)
    const maxRange = Number(maxRangeInput.value);

    if(minRange >= maxRange || minRange < 1) {
        feedback.textContent = "Rentang tidak valid. Pastikan Min lebih kecil dari Max";
        feedback.style.color = "red";
        return;
    }

    randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    feedback.textContent = `Rentang angka diatur dari ${minRange} hingga ${maxRange}. Mulai tebak!`;
    feedback.style.color = "blue";

    attempts = 0;
    attemptsDisplay.textContent = "";
    guessInput.value = "";
    checkButton.disabled = false;
});
