let secretNumber = Math.floor(Math.random() * 100) + 1;
function checkNumber() {
    const userNumber = Number(document.getElementById('number').value);
    const result = document.getElementById('result');

    if (userNumber < secretNumber) {
        result.textContent = 'Введіть більше число';
    } else if (userNumber > secretNumber) {
        result.textContent = 'Введіть менше число';
    } else {
        result.textContent = 'Чіназес, ви вгадали';
    }
}