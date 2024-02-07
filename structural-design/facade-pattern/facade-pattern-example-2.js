// Subsystem
class EncryptionModule {
	encryptData(data) {
		console.log("Encrypting data:", data);
		// Encryption logic here
		return "EncryptedData";
	}
}

class CompressionModule {
	compressData(data) {
		console.log("Compressing data:", data);
		// Compression logic here
		return "CompressedData";
	}
}

// Facade
class DataProcessor {
	constructor() {
		this.encryptionModule = new EncryptionModule();
		this.compressionModule = new CompressionModule();
	}

	process(data) {
		const encryptedData = this.encryptionModule.encryptData(data);
		const compressedData = this.compressionModule.compressData(encryptedData);
		return compressedData;
	}
}

// Usage
const dataProcessor = new DataProcessor();
const processedData = dataProcessor.process("SensitiveData");
console.log(processedData); // Output: CompressedData
