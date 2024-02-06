// Subject function
const Subject = () => {
	let observers = [];

	return {
		addObserver: (observer) => {
			observers.push(observer);
		},
		removeObserver: (observer) => {
			observers = observers.filter((obs) => obs !== observer);
		},
		notifyObservers: (data) => {
			observers.forEach((observer) => observer.update(data));
		},
	};
};

// Observer function
const Observer = (name) => ({
	update: (data) => {
		console.log(`${name} received update: ${data}`);
	},
});

// Usage
const subject = Subject();

const observer1 = Observer("Observer 1");
const observer2 = Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Hello World!");
// Output:
// Observer 1 received update: Hello World!
// Observer 2 received update: Hello World!
