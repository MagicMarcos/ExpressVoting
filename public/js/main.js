const COUNTER_KEY = 'my-counter';

document.querySelectorAll('.submitBtn').forEach(el => {
  el.addEventListener('click', setStorage);
});

function setStorage() {
  const duration = moment.duration(120000, 's');
  window.localStorage.setItem(COUNTER_KEY, duration.asSeconds());
}

function countDown(countDownTime) {
  const time = moment.duration(countDownTime, 's');
  const oneSecond = moment.duration(1000, 's');

  const timer = setInterval(() => {
    const currentTime = time.subtract(oneSecond).asSeconds();

    updateDOMTimer(currentTime);

    if (currentTime > 0) {
      window.localStorage.setItem(COUNTER_KEY, currentTime);
    } else {
      window.localStorage.removeItem(COUNTER_KEY);
      clearInterval(timer);
      window.location.reload();
    }
  }, 1000);
  // clearInterval(timer);
}

function updateDOMTimer(currentTime) {
  document.querySelector('.timer').innerText =
    moment(currentTime).format('mm:ss');
}

window.onload = () => {
  const countDownTime = window.localStorage.getItem(COUNTER_KEY);
  if (countDownTime !== null) {
    countDown(countDownTime);
  }
};
