// Adaptee
class LegacyLibrary {
	specificRequest() {
		console.log("Legacy library specificRequest method");
	}
}

// Adapter
class Adapter {
	constructor() {
		this.legacyLibrary = new LegacyLibrary();
	}

	makeRequest() {
		this.legacyLibrary.specificRequest();
	}
}

// Usage
const adapter = new Adapter();
adapter.makeRequest(); // Output: Legacy library specificRequest method
