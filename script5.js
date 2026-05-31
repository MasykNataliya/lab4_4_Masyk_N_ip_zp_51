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
