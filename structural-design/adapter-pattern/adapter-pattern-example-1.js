// Adaptee
const legacyLibrary = {
	request() {
		console.log("Legacy library request method");
	},
};

// Adapter
const adapter = {
	makeRequest() {
		legacyLibrary.request();
	},
};

// Usage
adapter.makeRequest(); // Output: Legacy library request method
