// Subject class
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	notifyObservers(data) {
		this.observers.forEach((observer) => observer.update(data));
	}
}

// Observer class
class Observer {
	constructor(name) {
		this.name = name;
	}

	update(data) {
		console.log(`${this.name} received update: ${data}`);
	}
}

// Usage
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Hello World!");
// Output:
// Observer 1 received update: Hello World!
// Observer 2 received update: Hello World!
