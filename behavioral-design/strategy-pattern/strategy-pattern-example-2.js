// Strategies
class Operation {
	operate(a, b) {
		throw new Error("This method must be overridden");
	}
}

class AddStrategy extends Operation {
	operate(a, b) {
		return a + b;
	}
}

class SubtractStrategy extends Operation {
	operate(a, b) {
		return a - b;
	}
}

class MultiplyStrategy extends Operation {
	operate(a, b) {
		return a * b;
	}
}

// Context
class Calculator {
	constructor(strategy) {
		this.strategy = strategy;
	}

	execute(a, b) {
		return this.strategy.operate(a, b);
	}
}

// Usage
const add = new Calculator(new AddStrategy());
const subtract = new Calculator(new SubtractStrategy());
const multiply = new Calculator(new MultiplyStrategy());

console.log(add.execute(5, 3)); // Output: 8
console.log(subtract.execute(5, 3)); // Output: 2
console.log(multiply.execute(5, 3)); // Output: 15
