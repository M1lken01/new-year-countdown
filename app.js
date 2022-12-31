//et timeZone = new Intl.DateTimeFormat('en-GB').resolvedOptions().timeZone;
let timeZone = +1;
let targetDate = new Date('2023-12-31T24:00:00');
let timeZoneDiff = 3600000 * timeZone
let countDownStart = 10000 // 10 sec

updateTime();

function updateTime() {
    let currentDate = new Date();
    let timeLeft = targetDate.getTime() - currentDate.getTime();
    let timeLeftDate = new Date(timeLeft - timeZoneDiff);
    if (timeLeft <= countDownStart) {
        document.body.classList.add('countdown');
    }
    if (timeLeft <= 0) {
        document.body.classList.add('end');
        console.log('happy new year');
    } else {
        let timer = new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            //timezone
        }).format(timeLeftDate);
        let timerOutput = document.getElementsByClassName('number');
        let checks = 0;
        for (let i = 0; i < timerOutput.length; i++) {
            timerOutput[i].innerHTML = timer.split(':')[i];
            if (i == 0) {
                checks++;
            } else if (timerOutput[i - 1].classList.contains('red')) {
                checks++;
            }
            if (timer.split(':')[i] == '00' && !timerOutput[i].classList.contains('red') && checks == i + 1) {
                timerOutput[i].classList.add('red');
            }
        }
        setTimeout(function() {
            updateTime()
        }, 1000);
    }
}