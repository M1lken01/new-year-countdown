//let countdownDate = new Date;
//countdownDate.setTime(1672531200000);
let targetDate = new Date('2022-12-31T23:00:00');
let timeZoneDiff = 3600000 // 1 hour
let countDownStart = 5000 // 5 sec

updateTime();

function updateTime() {
    let currentDate = new Date();
    if (targetDate - currentDate <= (timeZoneDiff + countDownStart))
        document.body.classList.add('end');
    if (targetDate - currentDate <= timeZoneDiff) {
        console.log('happy new year')
    } else {
        let timer = new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).format(targetDate - currentDate);
        let timerOutput = document.getElementsByClassName('number');
        for (let i = 0; i < timerOutput.length; i++) {
            timerOutput[i].innerHTML = timer.split(':')[i];
        }
        setTimeout(function() {
            updateTime()
        }, 1000);
    }
}