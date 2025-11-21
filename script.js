const secretNumber = Math.floor(Math.random() * 100) + 1;
let timer = 30;
let timerId = null;

function checkNumber() {
    const userNumber = Number(document.getElementById('number').value);
    const result = document.getElementById('result');
    const value = document.getElementById('number').value;
        if (!/^\d+$/.test(value)) {
            return result.textContent = 'Тільки цифри';
        }

        if (userNumber > 100) {
        return result.textContent = 'Максимум 100';
    }
    
        if (!timerId) {
                startTimer();
        }

    if (userNumber < secretNumber) {
        result.textContent = 'Введіть більше число';
    } else if (userNumber > secretNumber) {
        result.textContent = 'Введіть менше число';
    } else {
         clearInterval(timerId);
        result.textContent = 'Чіназес, ви вгадали';
    }
}
function startTimer() {
    const timerEl = document.getElementById('timer');

    timerId = setInterval(() => {
        timer--;
        timerEl.textContent = `Час: ${timer} сек`;

        if (timer <= 0) {
            clearInterval(timerId);
            timerEl.textContent = "час закінчився";
        }
    }, 1000);
}


const gameBox = document.querySelector('#game');
const result = document.querySelector('#resul');

const size = 10;
const totalCells = size * size;

let hiddenCells = new Set();
let foundCount = 0;

while (hiddenCells.size < 10) {
  hiddenCells.add(Math.floor(Math.random() * totalCells));
}

for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.id = i;


  cell.addEventListener('click', () => {
    const id = Number(cell.dataset.id);

    if (hiddenCells.has(id)) {
      cell.classList.add('found');
      hiddenCells.delete(id);
      foundCount++;

      if (foundCount === 10) {
        result.textContent = 'ти знайшов усі клітинки';
        const allCells = document.querySelectorAll('.cell');
        allCells.forEach(c => {
          if (!c.classList.contains('found')) {
            c.classList.add('miss');
          }
        });
      }
    } else {
      cell.classList.add('miss');
    }
  });

  gameBox.append(cell);
}

