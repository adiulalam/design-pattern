// Handlers
const handleRequest = (request) => {
	if (request === "A") {
		console.log("Handler A is handling the request");
		return;
	}
	console.log("Passing request to the next handler");
	nextHandler(request);
};

const nextHandler = (request) => {
	if (request === "B") {
		console.log("Handler B is handling the request");
		return;
	}
	console.log("Request cannot be handled by any handler");
};

// Usage
handleRequest("A"); // Output: Handler A is handling the request
handleRequest("B"); // Output: Handler B is handling the request
handleRequest("C"); // Output: Request cannot be handled by any handler
