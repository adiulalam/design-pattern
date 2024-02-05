// Prototype class
class CarPrototype {
	constructor() {
		this.model = "";
		this.color = "";
	}

	clone() {
		const clone = new this.constructor();
		clone.model = this.model;
		clone.color = this.color;
		return clone;
	}
}

// Usage
const originalCar = new CarPrototype();
originalCar.model = "Sedan";
originalCar.color = "Blue";

const clonedCar = originalCar.clone();
clonedCar.color = "Red";
console.log(clonedCar.model); // Output: Sedan
console.log(clonedCar.color); // Output: Blue
