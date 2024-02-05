// Prototype function
const animalPrototype = {
	init(name, sound) {
		this.name = name;
		this.sound = sound;
	},
	makeSound() {
		console.log(`${this.name} says ${this.sound}`);
	},
	clone() {
		const clone = Object.create(this);
		return clone;
	},
};

// Usage
const cat = animalPrototype.clone();
cat.init("Cat", "Meow");
cat.makeSound(); // Output: Cat says Meow

const dog = animalPrototype.clone();
console.log("🚀 ~ dog:", dog);
dog.init("Dog", "Woof");
dog.makeSound(); // Output: Dog says Woof
