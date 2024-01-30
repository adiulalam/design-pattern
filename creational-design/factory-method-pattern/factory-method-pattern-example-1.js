// Product interface
const Product = () => ({
	getDescription: () => "Generic Product",
});

// Concrete product implementations
const ConcreteProductA = () => {
	const product = Product();
	product.getDescription = () => "Product A";
	return product;
};

const ConcreteProductB = () => {
	const product = Product();
	product.getDescription = () => "Product B";
	return product;
};

// Factory function
const createProduct = (type) => {
	switch (type) {
		case "A":
			return ConcreteProductA();
		case "B":
			return ConcreteProductB();
		default:
			throw new Error("Invalid product type");
	}
};

// Usage
const productA = createProduct("A");
console.log(productA.getDescription()); // Output: Product A

const productB = createProduct("B");
console.log(productB.getDescription()); // Output: Product B
