// Product interface
class Vehicle {
	start() {
		return "Generic vehicle is starting.";
	}
}

// Concrete product classes
class Car extends Vehicle {
	start() {
		return "Car is starting.";
	}
}

class Bicycle extends Vehicle {
	start() {
		return "Bicycle is starting.";
	}
}

// Creator class
class VehicleFactory {
	// Factory method
	createVehicle(type) {
		switch (type) {
			case "Car":
				return new Car();
			case "Bicycle":
				return new Bicycle();
			default:
				throw new Error("Invalid vehicle type");
		}
	}
}

// Usage
const vehicleFactory = new VehicleFactory();

const car = vehicleFactory.createVehicle("Car");
console.log(car.start()); // Output: Car is starting.

const bicycle = vehicleFactory.createVehicle("Bicycle");
console.log(bicycle.start()); // Output: Bicycle is starting.
