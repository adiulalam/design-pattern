// Context
const trafficLight = (state) => ({
	changeState(newState) {
		state = newState;
	},
	displayState() {
		console.log(`Traffic light is ${state.name}`);
	},
});

// State functions
const redState = () => ({
	name: "Red",
});

const greenState = () => ({
	name: "Green",
});

// Usage
const initialTrafficLight = trafficLight(redState());
initialTrafficLight.displayState(); // Output: Traffic light is Red

initialTrafficLight.changeState(greenState());
initialTrafficLight.displayState(); // Output: Traffic light is Green
