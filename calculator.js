function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return "Error: Division by zero";
      }
      return a / b;
    default:
      return "Error: Invalid operator";
  }
}

// Example usage:
console.log("5 + 3 =", calculator(5, 3, '+'));
console.log("10 - 4 =", calculator(10, 4, '-'));
console.log("6 * 7 =", calculator(6, 7, '*'));
console.log("8 / 2 =", calculator(8, 2, '/'));
console.log("8 / 0 =", calculator(8, 0, '/'));
