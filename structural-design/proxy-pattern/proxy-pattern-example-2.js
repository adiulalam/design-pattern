// Real Subject
class NetworkResource {
	fetchData() {
		console.log("Fetching data from network...");
		// Simulate fetching data from network
		return "Data from network";
	}
}

// Proxy
class CachedNetworkResource {
	constructor() {
		this.networkResource = new NetworkResource();
		this.cachedData = null;
	}

	fetchData() {
		if (!this.cachedData) {
			console.log("Fetching data from network...");
			this.cachedData = this.networkResource.fetchData();
		}
		console.log("Returning cached data...");
		return this.cachedData;
	}
}

// Usage
const cachedNetworkResource = new CachedNetworkResource();
console.log(cachedNetworkResource.fetchData()); // Output: Fetching data from network... \n Data from network
console.log(cachedNetworkResource.fetchData()); // Output: Returning cached data... \n Data from network
