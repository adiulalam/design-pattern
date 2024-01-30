function createSingleton() {
	let instance;
	const data = Object.freeze(["data", "test"]);

	const fetchData = () => {
		console.log("getting data");
		return data;
	};

	return {
		getInstance() {
			if (!instance) {
				instance = { data, fetchData };
			}
			return instance;
		},
	};
}

// Usage
const singletonFactory = createSingleton();
const singletonInstance1 = singletonFactory.getInstance();
const singletonInstance2 = singletonFactory.getInstance();

console.log(singletonInstance1 === singletonInstance2); // true

const getData = singletonInstance1.fetchData();
console.log("🚀 ~ getData:", getData); // ["test", "data"]

try {
	// Attempt to modify the data array (won't work due to Object.freeze)
	singletonInstance1.data.push("new data");
} catch (e) {
	console.error("Error can't push data");
}

console.log(singletonInstance1.fetchData()); // ["test", "data"]
