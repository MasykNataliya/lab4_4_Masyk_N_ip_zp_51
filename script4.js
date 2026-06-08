// Станція з продажу ремонтних дроїдів.
// Оголоси функцію makeTransaction, яка очікує два
// параметри, значення яких будуть задаватися під час
// її виклику: • quantity— перший параметр, число, що
// містить кількість замовлених дроїдів • pricePerDroid
// — другий параметр, число, що містить вартість
// одного дроїда
// Напиши код функції так, щоб вона повертала рядок
// з повідомленням про покупку ремонтних дроїдів:
// &quot;You ordered &lt;quantity&gt; droids worth &lt;totalPrice&gt;
// credits!&quot;, де:
// • &lt;quantity&gt; — це кількість замовлених дроїдів
// • &lt;totalPrice&gt; — це загальна вартість замовлення,
// тобто вартість усіх замовлених дроїдів

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;

  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
