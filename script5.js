// Функція checkForSpam(message) приймає рядок
// (параметр message), перевіряє його на вміст
// заборонених слів spam і sale, і повертає
// результат перевірки. Слова в рядку
// параметра message можуть бути в довільному
// регістрі, наприклад SPAM або sAlE.
// Доповни код функції таким чином, що:
//  Якщо знайдено заборонене слово
// (spam або sale), то функція повертає
// буль true
//  Якщо в рядку відсутні заборонені слова,
// функція повертає буль false

function checkForSpam(message) {
  const normalized = message.toLowerCase();

  return normalized.includes("spam") || normalized.includes("sale");
}

// Тести
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
