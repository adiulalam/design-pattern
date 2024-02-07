// Subsystem
const encryptionModule = {
	encryptData(data) {
		console.log("Encrypting data:", data);
		// Encryption logic here
		return "EncryptedData";
	},
};

const compressionModule = {
	compressData(data) {
		console.log("Compressing data:", data);
		// Compression logic here
		return "CompressedData";
	},
};

// Facade
const dataProcessor = (data) => {
	const encryptedData = encryptionModule.encryptData(data);
	const compressedData = compressionModule.compressData(encryptedData);
	return compressedData;
};

// Usage
const processedData = dataProcessor("SensitiveData");
console.log(processedData); // Output: CompressedData
