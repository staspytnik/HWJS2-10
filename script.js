//!Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

let sec = 0;

const timerId = setInterval(() => {
  sec += 1;
  console.log(sec);
  if (sec === 5) {
    clearInterval(timerId);
  }
}, 1000);

//! Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

// const box = document.querySelector(".box");
// let position = 0;
// let size = 50;

// const animationId = setInterval(() => {
//   position += 10;
//   box.style.left = position + "px";
//   box.style.top = position + "px";

//   size += 1;
//   box.style.width = size + "px";
//   box.style.height = size + "px";
// }, 100);

//!Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

let score = 0;
let timeLeft = 10;
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("timer");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  score++;
  scoreElement.textContent = score;
});

const gameInterval = setInterval(() => {
  timeLeft--;
  timeElement.textContent = `Час: ${timeLeft}`;
  if (timeLeft === 0) {
    clearInterval(gameInterval);
    btn.disabled = true;
    alert(`Ваш рахунок: ${score}`);
  }
}, 1000);

//!Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

const button = document.getElementById("startBtn");

button.addEventListener("click", () => {
  const seconds = Number(document.getElementById("seconds").value);

  setTimeout(() => {
    alert(`Минуло ${seconds}сек`);
  }, seconds * 1000);
});