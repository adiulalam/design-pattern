# Introduction to Decorator Pattern

The Decorator Pattern is a structural design pattern that allows behavior to be added to individual objects dynamically without affecting the behavior of other objects from the same class. It enhances the functionality of objects by wrapping them with decorator objects that provide additional features or modifications. This pattern promotes the open/closed principle by allowing behavior to be extended without modifying existing code, thus enabling flexible and reusable object compositions.

## When to Use Decorator Pattern:

- When you need to add or modify behavior of individual objects dynamically at runtime.
- When you want to avoid subclassing to add functionality, especially when dealing with a large number of variations.
- When you want to keep the responsibilities of objects separate and easy to understand.

## Benefits of Decorator Pattern:

- **Dynamic Behavior Extension:** Allows behavior to be added or modified dynamically at runtime without affecting other objects.
- **Flexible Composition:** Enables flexible object compositions by combining multiple decorators to create complex behaviors.
- **Single Responsibility Principle:** Each decorator class handles a single responsibility, promoting separation of concerns and simplifying maintenance.
- **Open/Closed Principle:** Promotes the open/closed principle by allowing behavior to be extended without modifying existing code.
