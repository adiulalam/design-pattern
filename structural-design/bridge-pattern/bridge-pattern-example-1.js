// Abstraction
const shape = (drawFunc) => ({
	draw() {
		drawFunc();
	},
});

// Implementations
const drawCircle = () => {
	console.log("Drawing Circle");
};

const drawSquare = () => {
	console.log("Drawing Square");
};

// Usage
const circle = shape(drawCircle);
const square = shape(drawSquare);

circle.draw(); // Output: Drawing Circle
square.draw(); // Output: Drawing Square
