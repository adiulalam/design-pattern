// Real Subject
const networkResource = () => ({
	fetchData() {
		console.log("Fetching data from network...");
		// Simulate fetching data from network
		return "Data from network";
	},
});

// Proxy
const cachedNetworkResource = (() => {
	let cachedData;

	return {
		fetchData() {
			if (!cachedData) {
				console.log("Fetching data from network...");
				cachedData = networkResource().fetchData();
			}
			console.log("Returning cached data...");
			return cachedData;
		},
	};
})();

// Usage
console.log(cachedNetworkResource.fetchData()); // Output: Fetching data from network... \n Data from network
console.log(cachedNetworkResource.fetchData()); // Output: Returning cached data... \n Data from network
