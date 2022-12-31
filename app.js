let timeZone = +1;

let targetDate = new Date('2022-12-31T24:00:00');
let timeZoneDiff = 3600000 * timeZone
let countDownStart = 10000 // 10 sec

updateTime();

function updateTime() {
    let currentDate = new Date();
    let timeLeft = targetDate.getTime() - currentDate.getTime() - timeZoneDiff;
    document.getElementById('a').innerHTML = targetDate.getTime();
    document.getElementById('b').innerHTML = currentDate.getTime();
    document.getElementById('c').innerHTML = timeZoneDiff;
    document.getElementById('d').innerHTML = timeLeft;
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
        }).format(timeLeft);
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

function w() {
    console.log('xd')
    timeZone = document.getElementsByTagName('input')[0].value;
    timeZoneDiff = 3600000 * timeZone;
    updateTime();
    if (document.getElementsByClassName('end').length)
        document.getElementsByClassName('end')[0].classList.remove('end');
    if (document.getElementsByClassName('countdown').length)
        document.getElementsByClassName('countdown')[0].classList.remove('countdown');
    while (document.getElementsByClassName('red').length > 0) {
        document.getElementsByClassName('red')[0].classList.remove('red');
    }
}