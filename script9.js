// Візуальний елемент
// «Підказка при
// уведенні»

// Надати можливість виведення підказки при наборі
// тексту у елемент уведення «текстове поле».
// Передбачити можливість створення списку слів-
// підказок.

const hints = ["Київ", "Львів", "Одеса", "Харків", "Дніпро"];

const inputField = document.getElementById("inputField");
const suggestionsBox = document.getElementById("suggestions");

inputField.addEventListener("input", function () {
  const text = inputField.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (text) {
    const results = hints.filter((h) => h.toLowerCase().includes(text));
    for (let word of results) {
      const div = document.createElement("div");
      div.textContent = word;
      div.onclick = function () {
        inputField.value = word;
        suggestionsBox.innerHTML = "";
      };
      suggestionsBox.appendChild(div);
    }
  }
});
