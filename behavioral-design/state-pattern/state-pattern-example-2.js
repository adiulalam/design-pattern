// Context
class TrafficLight {
	constructor() {
		this.state = new RedState(this);
	}

	setState(state) {
		this.state = state;
	}

	displayState() {
		console.log(`Traffic light is ${this.state.name}`);
	}
}

// State classes
class RedState {
	constructor(trafficLight) {
		this.name = "Red";
		this.trafficLight = trafficLight;
	}

	displayState() {
		this.trafficLight.displayState();
		console.log("Red");
	}
}

class GreenState {
	constructor(trafficLight) {
		this.name = "Green";
		this.trafficLight = trafficLight;
	}

	displayState() {
		this.trafficLight.displayState();
		console.log("Green");
	}
}

// Usage
const trafficLight = new TrafficLight();
trafficLight.displayState(); // Output: Traffic light is Red

trafficLight.setState(new GreenState(trafficLight));
trafficLight.displayState(); // Output: Traffic light is Green
