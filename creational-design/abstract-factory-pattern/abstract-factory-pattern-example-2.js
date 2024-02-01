// Abstract product classes
class Window {
	open() {
		return "Window is opened.";
	}
}

class Door {
	close() {
		return "Door is closed.";
	}
}

// Concrete product implementations
class WoodenWindow extends Window {
	open() {
		return "Wooden window is opened.";
	}
}

class WoodenDoor extends Door {
	close() {
		return "Wooden door is closed.";
	}
}

// Abstract factory class
class WoodenHouseFactory {
	// Factory methods
	createWindow() {
		return new WoodenWindow();
	}

	createDoor() {
		return new WoodenDoor();
	}
}

// Usage
const woodenHouseFactory = new WoodenHouseFactory();

const woodenWindow = woodenHouseFactory.createWindow();
console.log(woodenWindow.open()); // Output: Wooden window is opened.

const woodenDoor = woodenHouseFactory.createDoor();
console.log(woodenDoor.close()); // Output: Wooden door is closed.
