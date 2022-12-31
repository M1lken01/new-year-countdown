//let countdownDate = new Date;
//countdownDate.setTime(1672531200000);
let targetDate = new Date('2022-12-31T23:00:00');

updateTime();

function updateTime() {
    let currentDate = new Date();
    let timeLeft = targetDate - currentDate;
    let timer = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(timeLeft);
    let timerOutput = document.getElementsByClassName('number');
    for (let i = 0; i < timerOutput.length; i++) {
        timerOutput[i].innerHTML = timer.split(':')[i];
    }
    setTimeout(function() {
        updateTime()
    }, 1000);
}