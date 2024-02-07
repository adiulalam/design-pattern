// Component
const coffee = () => ({
	cost: 5,
	description: "Coffee",
});

// Decorator
const withMilk = (beverage) => ({
	cost: beverage.cost + 2,
	description: `${beverage.description}, with Milk`,
});

// Usage
const myCoffee = coffee();
const coffeeWithMilk = withMilk(myCoffee);

console.log(coffeeWithMilk); // Output: { cost: 7, description: 'Coffee, with Milk' }
