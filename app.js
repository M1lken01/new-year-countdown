let timeZone = new Intl.DateTimeFormat('en-GB').resolvedOptions().timeZone;

let offset = 60;
let countdownDate = new Date;
countdownDate.setTime(1672531200000);

updateTime();

function updateTime() {
    const now = new Date;
    const currentDate = new Date();
    const timeLeft = countdownDate - currentDate;
    let timer = formatTime(timeLeft);
    let timerOutput = document.getElementsByClassName('number');
    for (let i = 0; i < timerOutput.length; i++) {
        timerOutput[i].innerHTML = timer.split(':')[i];
    }
    setTimeout(function() {
        updateTime()
    }, 1000);
}

function formatTime(time) {
    let formattedTime = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(time);
    return formattedTime;
}