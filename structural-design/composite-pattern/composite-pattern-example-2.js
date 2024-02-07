// Component
class Graphic {
	draw() {
		console.log("Drawing graphic");
	}
}

// Composite
class Group {
	constructor() {
		this.graphics = [];
	}

	add(graphic) {
		this.graphics.push(graphic);
	}

	draw() {
		this.graphics.forEach((g) => g.draw());
	}
}

// Usage
const circle = new Graphic();
const square = new Graphic();
const compositeGroup = new Group();
compositeGroup.add(circle);
compositeGroup.add(square);

compositeGroup.draw(); // Output: Drawing graphic \n Drawing graphic
