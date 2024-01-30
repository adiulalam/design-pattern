class DatabaseConnection {
	constructor() {
		if (DatabaseConnection.instance) {
			return DatabaseConnection.instance;
		}

		// Private members
		this.connectionConfig = {
			host: "localhost",
			user: "user",
			password: "password",
		};

		// Simulate connecting to the database
		this.connect();

		// Save the instance
		DatabaseConnection.instance = this;
	}

	connect() {
		console.log("Connecting to the database with config:", this.connectionConfig);
		// Logic to establish a database connection goes here
	}

	query(sql) {
		console.log(`Executing query: ${sql}`);
		// Logic to execute the database query goes here
	}

	// Other database-related methods can be added here

	static getInstance() {
		if (!DatabaseConnection.instance) {
			DatabaseConnection.instance = new DatabaseConnection();
		}
		return DatabaseConnection.instance;
	}
}

// Usage
const dbConnection1 = new DatabaseConnection();
dbConnection1.query("SELECT * FROM users");

const dbConnection2 = DatabaseConnection.getInstance();
dbConnection2.query('INSERT INTO products (name, price) VALUES ("Product A", 49.99)');

console.log(dbConnection1 === dbConnection2); // true (both instances refer to the same connection)
