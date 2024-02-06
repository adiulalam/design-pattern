// Element
const Circle = () => ({
	accept(visitor) {
		visitor.visitCircle(this);
	},
});

// Visitor
const AreaVisitor = {
	visitCircle(circle) {
		console.log("Calculating area of circle");
		const area = Math.PI * circle.radius * circle.radius;
		console.log(`Area of the circle: ${area}`);
	},
};

// Usage
const circle = Circle();
circle.radius = 5; // Set the radius of the circle
circle.accept(AreaVisitor);
