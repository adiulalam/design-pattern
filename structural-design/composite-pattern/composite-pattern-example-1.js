// Component
const graphic = () => ({
	draw() {
		console.log("Drawing graphic");
	},
});

// Composite
const group = (...graphics) => ({
	draw() {
		graphics.forEach((g) => g.draw());
	},
});

// Usage
const circle = graphic();
const square = graphic();
const compositeGroup = group(circle, square);

compositeGroup.draw(); // Output: Drawing graphic \n Drawing graphic
