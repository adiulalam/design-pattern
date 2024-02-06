// Element
class Square {
	accept(visitor) {
		visitor.visitSquare(this);
	}
}

// Visitor
class PerimeterVisitor {
	visitSquare(square) {
		console.log("Calculating perimeter of square");
		const perimeter = 4 * square.side;
		console.log(`Perimeter of the square: ${perimeter}`);
	}
}

// Usage
const square = new Square();
square.side = 5; // Set the side length of the square
const perimeterVisitor = new PerimeterVisitor();
square.accept(perimeterVisitor);
