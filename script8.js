// Є двовимірний масив додатніх і від’ємних чисел.
// (об’явити проініціалізувати генератором випадкових
// чисел). Вивести у Console браузера.
// Створити два масива: масив додатніх чисел і масив від’ємних чисел.
// Третій елемент у додатньому масиві заміни на від’ємне значення, яке буде введено за допомогою prompt
// Вивести у Console браузера.

const rows = 2;
const cols = 5;
const matrix = [];

for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < cols; j++) {
    const randomNum = Math.floor(Math.random() * 21) - 10; // від -10 до 10
    row.push(randomNum);
  }
  matrix.push(row);
}

console.log("Двовимірний масив 2×5:", matrix);

const positives = [];
const negatives = [];

for (const row of matrix) {
  const posRow = [];
  const negRow = [];
  for (const num of row) {
    if (num > 0) {
      posRow.push(num);
    } else if (num < 0) {
      negRow.push(num);
    }
  }
  positives.push(posRow);
  negatives.push(negRow);
}

console.log("Двовимірний масив додатніх чисел:", positives);
console.log("Двовимірний масив від’ємних чисел:", negatives);

if (positives[0].length >= 3) {
  const newNegative = Number(prompt("Введіть від’ємне число:"));
  positives[0][2] = newNegative;
}

console.log("Оновлений масив додатніх чисел:", positives);

console.log("Масив додатніх чисел:", positives);
console.log("Масив від’ємних чисел:", negatives);

if (positives.length >= 3) {
  const newNegative = Number(prompt("Введіть від’ємне число:"));
  positives[2] = newNegative;
}

console.log("Оновлений масив додатніх чисел:", positives);
