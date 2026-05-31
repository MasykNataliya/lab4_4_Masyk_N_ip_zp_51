// 1.Заданий масив цілих чисел. Побудувати новий масив, в якому спочатку стоять
// числа, що діляться на 2, потім ті, що діляться на 2 та 3, потім на 3. Надрукувати вхідний та вихідний масиви.Застосувати функції
// 2.Упорядкувати масив у порядку зростання.(метод Швидкого
// сортування)Надрукувати вхідний та вихідний масив. Застосувати функції

function buildArray(numbers) {
  const divisibleBy2 = [];
  const divisibleBy2And3 = [];
  const divisibleBy3 = [];

  for (const num of numbers) {
    if (num % 2 === 0 && num % 3 === 0) {
      divisibleBy2And3.push(num);
    } else if (num % 2 === 0) {
      divisibleBy2.push(num);
    } else if (num % 3 === 0) {
      divisibleBy3.push(num);
    }
  }
  return divisibleBy2.concat(divisibleBy2And3).concat(divisibleBy3);
}

// тести
const inputArray = [2, 3, 4, 6, 9, 12, 15, 18, 20];
const outputArray = buildArray(inputArray);

console.log("Вхідний масив:", inputArray);
console.log("Вихідний масив:", outputArray);
