const adminLogin = "Admin";
const adminPassword = "Admin123!";

const userLogin = "User";
const userPassword = "User123!";


const login = prompt("Введіть ваш логін:");

console.log(`Ви ввели логін: ${login}`);

if (login === adminLogin) {

  const password = prompt("Введіть пароль для Admin:");
  if (password === adminPassword) {
    alert("привіт, Admin");
  } else if (password === null || password === "") {
    alert("Cancelled");
  } else {
    alert("Невірний пароль для Admin");
  }
} else if (login === userLogin) {

  const password = prompt("Введіть пароль для User:");
  if (password === userPassword) {
    alert("привіт, User");
  } else if (password === null || password === "") {
    alert("Cancelled");
  } else {
    alert("Невірний пароль для User");
  }
} else if (login === null || login === "") {

  alert("Cancelled");
} else {

  alert("Невідомий користувач");
}
