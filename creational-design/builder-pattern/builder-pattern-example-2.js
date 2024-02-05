// Builder class
class CarBuilder {
	constructor() {
		this.car = new Car();
	}

	setModel(model) {
		this.car.model = model;
		return this;
	}

	setEngine(engine) {
		this.car.engine = engine;
		return this;
	}

	setWheels(wheels) {
		this.car.wheels = wheels;
		return this;
	}

	build() {
		return this.car;
	}
}

// Product class
class Car {
	constructor() {
		this.model = "";
		this.engine = "";
		this.wheels = 0;
	}

	getInfo() {
		return `Car Model: ${this.model}, Engine: ${this.engine}, Wheels: ${this.wheels}`;
	}
}

// Usage
const carBuilder = new CarBuilder();
const car = carBuilder.setModel("Sedan").setEngine("V6").setWheels(4).build();

console.log(car.getInfo());
// Output: Car Model: Sedan, Engine: V6, Wheels: 4
