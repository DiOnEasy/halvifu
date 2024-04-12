
const targetDate = new Date("2024-05-14T00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const formatNumber = (number) => {
    return (number < 10 ? '0' : '') + number;
};

// Обновляем отображение оставшегося времени на странице
document.getElementById('days').innerText = formatNumber(days);
document.getElementById('hours').innerText = formatNumber(hours);
document.getElementById('minutes').innerText = formatNumber(minutes);
document.getElementById('seconds').innerText = formatNumber(seconds);

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerText = "EXPIRED";
  }
};

updateCountdown();

const timer = setInterval(updateCountdown, 1000);