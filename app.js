//const timeZone = new Intl.DateTimeFormat('en-GB').resolvedOptions().timeZone;
const timeZone = +1;
const targetDate = new Date('2023-12-31T24:00:00');
const timeZoneDiff = 3600000 * timeZone;
const countDownStart = 4000; // 4 sec

function updateTime() {
  const timeLeft = targetDate.getTime() - new Date().getTime();

  if (timeLeft <= countDownStart) document.body.classList.add('countdown');
  if (timeLeft <= 0) return document.body.classList.add('end');

  const timerArray = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
    .format(new Date(timeLeft - timeZoneDiff))
    .split(':');
  const timerDisplayNumbers = document.getElementsByClassName('number');
  const reds = document.getElementsByClassName('red').length;

  for (let i = 0; i < timerDisplayNumbers.length; i++) {
    timerDisplayNumbers[i].innerHTML = timerArray[i];
    if (timerArray[i] === '00' && !timerDisplayNumbers[i].classList.contains('red') && reds >= i) timerDisplayNumbers[i].classList.add('red');
  }
  setTimeout(updateTime, 1000);
}

updateTime();
