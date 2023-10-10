let timeZone = +1;
const targetDate = new Date('2023-12-31T24:00:00');
const countDownStart = 4000; // 4 sec
const countDown = document.URL.split('?countdown=')[1] == false ? false : true;

function updateTime() {
  const timeZoneDiff = 3600000 * timeZone;
  const currentTime = new Date();
  const timeLeft = countDown ? targetDate.getTime() - currentTime.getTime() - timeZoneDiff : currentTime.getTime();

  console.log(timeLeft);

  if (timeLeft <= countDownStart) document.body.classList.add('countdown');
  if (timeLeft <= 0) return document.body.classList.add('end');

  const timerArray = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
    .format(new Date(timeLeft))
    .split(':');
  const timerDisplayNumbers = document.getElementsByClassName('number');
  const reds = document.getElementsByClassName('red').length;

  for (let i = 0; i < timerDisplayNumbers.length; i++) {
    timerDisplayNumbers[i].innerHTML = timerArray[i];
    if (timerArray[i] === '00' && !timerDisplayNumbers[i].classList.contains('red') && reds >= i) timerDisplayNumbers[i].classList.add('red');
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  document.getElementById('weekDay').innerHTML = days[currentTime.getDay()];
  document.getElementById('month').innerHTML = months[currentTime.getMonth()];
  document.getElementById('monthDay').innerHTML = currentTime.getDate();
  document.getElementById('year').innerHTML = currentTime.getFullYear();

  setTimeout(updateTime, 1000);
}

updateTime();

const setTimezone = (zone) => (timeZone = zone);
