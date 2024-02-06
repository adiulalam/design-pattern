// Handler interface
class Handler {
	constructor(successor) {
		this.successor = successor;
	}

	handleRequest(request) {
		if (this.canHandle(request)) {
			this.handle(request);
		} else if (this.successor) {
			this.successor.handleRequest(request);
		} else {
			console.log("Request cannot be handled by any handler");
		}
	}

	canHandle(request) {
		throw new Error("This method must be overridden");
	}

	handle(request) {
		throw new Error("This method must be overridden");
	}
}

// Concrete handlers
class HandlerA extends Handler {
	canHandle(request) {
		return request === "A";
	}

	handle(request) {
		console.log("Handler A is handling the request");
	}
}

class HandlerB extends Handler {
	canHandle(request) {
		return request === "B";
	}

	handle(request) {
		console.log("Handler B is handling the request");
	}
}

// Usage
const handlerA = new HandlerA();
const handlerB = new HandlerB();

handlerA.successor = handlerB;

handlerA.handleRequest("A"); // Output: Handler A is handling the request
handlerA.handleRequest("B"); // Output: Handler B is handling the request
handlerA.handleRequest("C"); // Output: Request cannot be handled by any handler
