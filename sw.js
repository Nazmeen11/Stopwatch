let timer;
let isRunning = false;
let seconds = 0;

const display = document.getElementById('display');


document.getElementById('start').onclick = function() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            display.innerHTML = new Date(seconds * 1000).toISOString().substr(11, 8);
        }, 1000);
    }
};

document.getElementById('stop').onclick = function() {
    clearInterval(timer);
    isRunning = false;
};

document.getElementById('reset').onclick = function() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    display.innerHTML = "00:00:00";
};
