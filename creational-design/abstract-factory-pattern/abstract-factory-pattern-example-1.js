// Abstract product interfaces
const Engine = () => ({
	start: () => "Engine is starting.",
});

const Tire = () => ({
	roll: () => "Tire is rolling.",
});

// Concrete product implementations
const SportsCarEngine = () => {
	const engine = Engine();
	engine.start = () => "Sports car engine is roaring.";
	return engine;
};

const SportsCarTire = () => {
	const tire = Tire();
	tire.roll = () => "Sports car tire is spinning fast.";
	return tire;
};

// Abstract factory function
const CarFactory = () => ({
	createEngine: () => SportsCarEngine(),
	createTire: () => SportsCarTire(),
});

// Usage
const sportsCarFactory = CarFactory();

const sportsCarEngine = sportsCarFactory.createEngine();
console.log(sportsCarEngine.start()); // Output: Sports car engine is roaring.

const sportsCarTire = sportsCarFactory.createTire();
console.log(sportsCarTire.roll()); // Output: Sports car tire is spinning fast.
