const timeDisplay = document.getElementById("time-display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapList = document.getElementById("laps");
const countdownInput = document.getElementById("countdown-input");
const startCountdownButton = document.getElementById("start-countdown");

let timeInterval;
let elapsedTime = 0;
let isRunning = false;
let countdownInterval;
let countdownTime = 0;

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
    timeDisplay.textContent = formatTime(elapsedTime);
}

startButton.addEventListener("click", () => {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
        elapsedTime += 1000;
        updateDisplay();
    }, 1000);
});

stopButton.addEventListener("click", () => {
    isRunning = false;
    clearInterval(timerInterval);
});

resetButton.addEventListener("click", () => {
    isRunning = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay();
    lapList.innerHTML = "";
});

lapButton.addEventListener("click", () => {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap: ${lapTime}`;
    lapList.appendChild(lapItem);
});

startCountdownButton.addEventListener("click", () => {
    const inputTime = parseInt(countdownInput.value, 10);
    if (isNaN(inputTime) || inputTime <= 0) {
        alert("Harap masukkan waktu yang valid dalam detik.")
        return;
    }

    countdownTime = inputTime * 1000;
    updateDisplayCountdown();
    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        countdownTime -= 1000;
        updateDisplayCountdown();

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            alert("Waktu habis!");
        }
    }, 1000);
});

function updateDisplayCountdown() {
    timeDisplay.textContent = formatTime(countdownTime);
}
