// Strategies
const addStrategy = (a, b) => a + b;
const subtractStrategy = (a, b) => a - b;
const multiplyStrategy = (a, b) => a * b;

// Context
const calculator = (strategy) => (a, b) => strategy(a, b);

// Usage
const add = calculator(addStrategy);
const subtract = calculator(subtractStrategy);
const multiply = calculator(multiplyStrategy);

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 15
