// Builder function
const PizzaBuilder = () => {
	let size;
	let crust;
	let toppings = [];

	return {
		setSize: (pizzaSize) => {
			size = pizzaSize;
			return this;
		},
		setCrust: (pizzaCrust) => {
			crust = pizzaCrust;
			return this;
		},
		addTopping: (topping) => {
			toppings.push(topping);
			return this;
		},
		build: () => ({
			size,
			crust,
			toppings,
		}),
	};
};

// Usage
const pizza = PizzaBuilder()
	.setSize("Large")
	.setCrust("Thin")
	.addTopping("Pepperoni")
	.addTopping("Mushrooms")
	.build();

console.log(pizza);
// Output: { size: 'Large', crust: 'Thin', toppings: ['Pepperoni', 'Mushrooms'] }
