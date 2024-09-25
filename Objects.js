// Singleton Pattern and Object Creation in JavaScript

// Singleton Pattern
// The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. This can be useful in cases where having multiple instances of an object might create issues, like managing shared resources or configurations.

// In JavaScript, Singleton can be implemented using closures or immediately-invoked function expressions (IIFE) to maintain the single instance. Here’s a simple example:

const Singleton = (function () {
    let instance;

    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true

// Object Creation
// - Object Literals: The most common way to create objects in JavaScript.

const user = {
    name: "John Doe",
    age: 30,
    isAdmin: true
};

// - Object.create(): Creates a new object with the specified prototype object and properties.

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);
me.name = "Matthew"; // 'name' is a property set on 'me', but not on 'person'
me.isHuman = true;
me.printIntroduction(); // My name is Matthew. Am I human? true

Object Methods

1. Object.freeze()
   - Freezes an object, preventing new properties from being added or existing properties from being removed/modified.
   - This is useful for creating immutable objects.

const obj = { name: "Alice" };
Object.freeze(obj);
obj.name = "Bob"; // No effect
console.log(obj.name); // "Alice"

2. Object.keys(), Object.values(), Object.entries()
   - Object.keys(): Returns an array of the object’s keys.
   - Object.values(): Returns an array of the object’s values.
   - Object.entries(): Returns an array of key-value pairs as an array.

const user = { id: 1, name: "Sammy", email: "sammy@example.com" };
console.log(Object.keys(user));   // ['id', 'name', 'email']
console.log(Object.values(user)); // [1, 'Sammy', 'sammy@example.com']
console.log(Object.entries(user));// [['id', 1], ['name', 'Sammy'], ['email', 'sammy@example.com']]

3. Object.assign()
   - Used to copy the values of all enumerable properties from one or more source objects to a target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

Destructuring Objects
- A convenient way of extracting multiple properties from an object and assigning them to variables.
  
const course = {
    courseName: "JavaScript",
    price: 1000,
    instructor: "Hitesh"
};

const { courseName, instructor } = course;
console.log(courseName); // JavaScript
console.log(instructor); // Hitesh

Key Interview Concepts

1. Prototypes and Inheritance
   - JavaScript objects have a prototype. A prototype is also an object.
   - All JavaScript objects inherit properties and methods from their prototype.

function Hero(name, ability) {
    this.name = name;
    this.ability = ability;
}

Hero.prototype.getDetails = function () {
    return `${this.name} can ${this.ability}`;
};

const thor = new Hero("Thor", "fly");
console.log(thor.getDetails()); // Thor can fly

2. Closures
   - A closure is a function that remembers its outer variables even after the outer function has executed.

function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2

3. this Keyword
   - Refers to the object from which a function is called.

const user = {
    name: "John",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

user.greet(); // Hello, John

4. Object-Oriented Programming (OOP)
   - JavaScript allows for OOP principles like encapsulation, inheritance, and polymorphism.

class Vehicle {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    move() {
        console.log(`${this.name} is moving at ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    constructor(name, speed, brand) {
        super(name, speed);
        this.brand = brand;
    }

    move() {
        console.log(`${this.brand} ${this.name} is moving at ${this.speed} km/h`);
    }
}

const myCar = new Car("Sedan", 120, "Toyota");
myCar.move(); // Toyota Sedan is moving at 120 km/h

Singleton vs Factory Pattern (Interview Focus)
- Singleton Pattern: Ensures that a class has only one instance. Useful in scenarios where multiple instances would lead to inconsistent states, like in managing application configurations.
  
- Factory Pattern: This pattern allows for creating objects without specifying the exact class of object that will be created.

class Car {
    constructor(name) {
        this.name = name;
    }
}

class Truck {
    constructor(name) {
        this.name = name;
    }
}

class VehicleFactory {
    createVehicle(type, name) {
        switch (type) {
            case "car":
                return new Car(name);
            case "truck":
                return new Truck(name);
        }
    }
}

const factory = new VehicleFactory();
const myCar = factory.createVehicle("car", "Honda");
console.log(myCar); // Car { name: 'Honda' }

Best Practices in Object-Oriented JavaScript (Interview Tips)
1. Encapsulation: Keep data and methods inside objects/classes.
2. Abstraction: Hide unnecessary details from the user and expose only what is needed.
3. Modularity: Break down the functionality into smaller, reusable modules.
4. Polymorphism: Use a unified interface for different object types, especially with inheritance.