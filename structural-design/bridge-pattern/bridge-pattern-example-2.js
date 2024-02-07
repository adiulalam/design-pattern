// Abstraction
class Shape {
	constructor(drawFunc) {
		this.drawFunc = drawFunc;
	}

	draw() {
		this.drawFunc();
	}
}

// Implementations
class Circle {
	draw() {
		console.log("Drawing Circle");
	}
}

class Square {
	draw() {
		console.log("Drawing Square");
	}
}

// Usage
const circle = new Shape(new Circle().draw);
const square = new Shape(new Square().draw);

circle.draw(); // Output: Drawing Circle
square.draw(); // Output: Drawing Square
