// Component
class Coffee {
	constructor() {
		this.cost = 5;
		this.description = "Coffee";
	}
}

// Decorator
class WithMilk {
	constructor(beverage) {
		this.beverage = beverage;
		this.cost = beverage.cost + 2;
		this.description = `${beverage.description}, with Milk`;
	}
}

// Usage
const myCoffee = new Coffee();
const coffeeWithMilk = new WithMilk(myCoffee);

console.log(coffeeWithMilk); // Output: WithMilk { beverage: Coffee { cost: 5, description: 'Coffee' }, cost: 7, description: 'Coffee, with Milk' }
