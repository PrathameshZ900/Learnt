// Singleton Pattern and Object Creation in JavaScript

/* 
    Singleton Pattern:
    The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.
    This is useful in cases like managing shared resources or configurations where multiple instances might create issues.
*/

const Singleton = (function () {
    let instance; // Store the single instance

    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance(); // Create instance if not already created
            }
            return instance;
        }
    };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true (Both point to the same instance)


/*
    Object Creation:
    1. Object Literals:
       The most common way to create objects in JavaScript.
*/
const user = {
    name: "John Doe",
    age: 30,
    isAdmin: true
};

/*
    2. Object.create():
       Creates a new object with the specified prototype object and properties.
*/

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person); // 'me' inherits from 'person'
me.name = "Matthew";  // 'name' is a property set on 'me', but not on 'person'
me.isHuman = true;    // Overriding inherited property
me.printIntroduction();  // My name is Matthew. Am I human? true


/*
    Object Methods:
    1. Object.freeze():
       Prevents any modifications to the object (like making the object immutable).
*/

const obj = { name: "Alice" };
Object.freeze(obj);
obj.name = "Bob";  // No effect since the object is frozen
console.log(obj.name);  // "Alice"


/*
    2. Object.keys(), Object.values(), Object.entries():
       These methods are used to retrieve the keys, values, and key-value pairs of an object.
*/

const userDetails = { id: 1, name: "Sammy", email: "sammy@example.com" };
console.log(Object.keys(userDetails));   // ['id', 'name', 'email']
console.log(Object.values(userDetails)); // [1, 'Sammy', 'sammy@example.com']
console.log(Object.entries(userDetails));// [['id', 1], ['name', 'Sammy'], ['email', 'sammy@example.com']]


/*
    3. Object.assign():
       Used to copy values from one or more source objects to a target object.
*/

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }


/*
    Destructuring Objects:
    This syntax allows us to extract properties from objects and assign them to variables.
*/

const course = {
    courseName: "JavaScript",
    price: 1000,
    instructor: "Hitesh"
};

const { courseName, instructor } = course;
console.log(courseName); // "JavaScript"
console.log(instructor); // "Hitesh"


/*
    Key Interview Concepts:
    1. Prototypes and Inheritance:
       JavaScript objects have a prototype, and all objects inherit properties and methods from their prototype.
*/

function Hero(name, ability) {
    this.name = name;
    this.ability = ability;
}

Hero.prototype.getDetails = function () {
    return `${this.name} can ${this.ability}`;
};

const thor = new Hero("Thor", "fly");
console.log(thor.getDetails());  // Thor can fly


/*
    2. Closures:
       A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
*/

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


/*
    3. this Keyword:
       'this' refers to the object from which the function was called.
*/

const userObj = {
    name: "John",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

userObj.greet();  // Hello, John


/*
    4. Object-Oriented Programming (OOP):
       JavaScript supports OOP principles such as encapsulation, inheritance, and polymorphism.
*/

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
        super(name, speed);  // Call the parent constructor
        this.brand = brand;
    }

    move() {
        console.log(`${this.brand} ${this.name} is moving at ${this.speed} km/h`);
    }
}

const myCar = new Car("Sedan", 120, "Toyota");
myCar.move();  // Toyota Sedan is moving at 120 km/h


/*
    Singleton vs Factory Pattern (Interview Focus):
    
    Singleton Pattern:
    - Ensures only one instance of a class is created, which is shared across the application.

    Factory Pattern:
    - A pattern that allows for creating objects without specifying the exact class of the object to be created.
*/

class CarFactory {
    createCar(name) {
        return new Car(name);
    }
}

class TruckFactory {
    createTruck(name) {
        return new Truck(name);
    }
}

class VehicleFactory {
    createVehicle(type, name) {
        switch (type) {
            case "car":
                return new CarFactory().createCar(name);
            case "truck":
                return new TruckFactory().createTruck(name);
        }
    }
}

const vehicleFactory = new VehicleFactory();
const newCar = vehicleFactory.createVehicle("car", "Honda");
console.log(newCar);  // Car { name: 'Honda' }


/*
    Best Practices in Object-Oriented JavaScript (Interview Tips):
    1. Encapsulation: Keep data and methods inside objects/classes.
    2. Abstraction: Hide unnecessary details from the user, and expose only what is needed.
    3. Modularity: Break down functionality into smaller, reusable modules.
    4. Polymorphism: Use a unified interface for different object types, especially with inheritance.
*/
