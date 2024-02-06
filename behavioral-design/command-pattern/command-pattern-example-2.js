// Command interface
class Command {
	execute() {
		throw new Error("This method must be overridden");
	}

	undo() {
		throw new Error("This method must be overridden");
	}
}

// Concrete commands
class CreateCommand extends Command {
	constructor(receiver, data) {
		super();
		this.receiver = receiver;
		this.data = data;
	}

	execute() {
		this.receiver.create(this.data);
	}

	undo() {
		this.receiver.remove(this.data);
	}
}

class UpdateCommand extends Command {
	constructor(receiver, oldData, newData) {
		super();
		this.receiver = receiver;
		this.oldData = oldData;
		this.newData = newData;
	}

	execute() {
		this.receiver.update(this.oldData, this.newData);
	}

	undo() {
		this.receiver.update(this.newData, this.oldData);
	}
}

// Receiver
class Database {
	create(data) {
		console.log(`Creating data: ${data}`);
	}

	remove(data) {
		console.log(`Removing data: ${data}`);
	}

	update(oldData, newData) {
		console.log(`Updating data from ${oldData} to ${newData}`);
	}
}

// Usage
const database = new Database();

const createCommand = new CreateCommand(database, "New Record");
const updateCommand = new UpdateCommand(database, "Old Record", "Updated Record");

createCommand.execute(); // Output: Creating data: New Record
updateCommand.execute(); // Output: Updating data from Old Record to Updated Record
updateCommand.undo(); // Output: Updating data from Updated Record to Old Record
