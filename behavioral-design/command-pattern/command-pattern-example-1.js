// Commands
const createCommand = (receiver, data) => ({
	execute: () => receiver.create(data),
	undo: () => receiver.remove(data),
});

const updateCommand = (receiver, data, newData) => ({
	execute: () => receiver.update(data, newData),
	undo: () => receiver.update(newData, data),
});

// Receiver
const database = {
	create: (data) => console.log(`Creating data: ${data}`),
	remove: (data) => console.log(`Removing data: ${data}`),
	update: (oldData, newData) => console.log(`Updating data from ${oldData} to ${newData}`),
};

// Usage
const create = createCommand(database, "New Record");
const update = updateCommand(database, "Old Record", "Updated Record");

create.execute(); // Output: Creating data: New Record
update.execute(); // Output: Updating data from Old Record to Updated Record
update.undo(); // Output: Updating data from Updated Record to Old Record
