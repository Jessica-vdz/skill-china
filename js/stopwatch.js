let timer;
let isRunning = false;
let time = 0;

const stopwatch = document.getElementById("stopwatch");
const startPauseButton = document.getElementById("startPauseButton");
const resetButton = document.getElementById("resetButton");

function updateStopwatch() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    stopwatch.textContent = `${hours}:${minutes}:${seconds}`;
}

// Functie om de timer te starten of te pauzeren
function toggleTimer() {
    if (isRunning) {
        clearInterval(timer);
        startPauseButton.textContent = "Start"; 
    } else {
        timer = setInterval(() => {
            time++;
            updateStopwatch();
        }, 500); // made it two times faster
        startPauseButton.textContent = "Pauze";
    }
    isRunning = !isRunning;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    updateStopwatch();
    startPauseButton.textContent = "Start";
}
startPauseButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetStopwatch);