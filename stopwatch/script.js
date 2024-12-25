const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapList = document.getElementById("laps");

let seconds = 0;
let intervalId = null;

function updateTime() {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60 )).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}

startButton.addEventListener("click", () => {
    if (intervalId) return;
    intervalId = setInterval(() => {
        seconds++;
        updateTime();
    }, 1000);
    startButton.disabled = true;
});

stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    startButton.disabled = false;
});

resetButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    updateTime();
    lapList.innerhtml = "";
    startButton.disabled = false;
});

lapButton.addEventListener("click", () => {
    const lapTime = document.createElement("li");
    lapTime.textContent = timeDisplay.textContent;
    lapList.appendChild(lapTime);
});

updateTime();