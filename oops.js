`use strict`;

// Object Oriented Programming
// JavaScript is a prototype based procedural language, which means it supports both functunal and object oriented approach to program.

// OOPS is quite different in JavaScript, we have an object linked to prototype. A prototype contains all the methods and properties which are acessible to all objects which are linked to prototpe. This is called prototpe Inheritace or Prototype deligation.

// There are three main ways to implement Prototypal Inheritance in JavaScript:
// 1. Using Constructor Functions
// 2. Using ES6 Classes
// 3. Using Object.create()

// Implementing Prototypal Inheritance Using the constructor function

function User(name) {
  this.name = name;
}

User.prototype.pritName = function () {
  console.log(this);
};

// we can also link a variable to prototpe
User.prototype.species = `Homospaciens`;

let kedar = new User(`kedar`);
// console.log(kedar);
// kedar.pritName();

// We can access the prototype of the constructor function with the following syntax:
User.__proto__;

// The object prototype is the same as the constructor function prototype.
kedar.__proto__ === User.prototype; // True

User.prototype.isPrototypeOf(kedar); // True

// *************************************************
// *************************************************

// Prototypal Inheritance of built-in-objects
// Implementig our own Method to Array.prototype
const arr = [1, 2, 4, 4, 5, 5];

Array.prototype.unique = function () {
  return [...new Set(this)];
};

arr.unique();

// *******************************************************
// *******************************************************

// Implementing Prototypal Inheritace with ES6 classes in JS
// We can implement OOP using classes, but behind the scenes it uses prototypal inheritance.
//  This method was introduced to make sense to people coming from other languages like C++ and Java.

class UserClass {
  constructor(firstName) {
    this.firstName = firstName;
  }
  pritName() {
    console.log(this.firstName);
  }
}

const user1 = new UserClass(`Arpit Mishra`);
// console.log(user1);

// Remember that whenever we create an object of a class, a constructor is invoked first. If there is no constructor, the default constructor is invoked which does nothing.

// Three thing to remember when implementing class
// a). Classes are not hoisted
// b). Classes are first-class citizens.
// c). Classes are executed in strict mode.

// ********************************************************
// ********************************************************

// Getters and setters in JavaScript
// Remember-> Getters and setters are always Implemented together in class

class UserClass2 {
  constructor(firstName) {
    this._firstName = firstName;
  }

  // Implemetig getter and setters
  get getNewName() {
    return this._firstName;
  }

  set setNewName(firstName) {
    this._firstName = firstName;
  }

  pritUserName() {
    console.log(this._firstName);
  }
}

const newUser = new UserClass2(`Arpit Mishra`);
// console.log(newUser);
newUser.setNewName = `Rajesh Sharma`;
newUser.getNewName;
// newUser.pritUserName();

// ************************************************************
// ************************************************************
// ************************************************************

// Implemnting static method, which is bound to class
// Static methods are bound to a class
// and not to the instances of class or object of the class.
// We can access static methods through classes
//  only and not through the object of that class.

class UserClass3 {
  constructor(firstName) {
    this.firstName = firstName;
  }

  // Public Method -> Available to all objects
  pritName() {
    console.log(this.firstName);
  }

  // Implementing a static method
  static anonmous() {
    console.log(`Anonmous Code!`);
  }
}

const staticUser = new UserClass3(`Ramesh`);
// staticUser.anonmous(); // error

// *************************************************
// *************************************************

// Implemeting Prototypal Innheritance using the object.create()
// The Object.create() static method creates a new object,
// using an existing object as the prototype of the
//  newly created object.

const userObj = {
  init(name) {
    this.name = name;
  },
  printName() {
    console.log(this.name);
  },
};

const newUserObj = Object.create(userObj);
// newUserObj.init(`Ramesh Chauhan`);
// newUserObj.printName();

// *****************************************
// *****************************************

// How Inheritance works in JS?
// Implementation of Inheriatnce using the constructor function

function LoggedInUser(name, password) {
  this.name = name;
  this.password = password;
}

LoggedInUser.prototype.newPrintName = function () {
  console.log(this.name);
};

function AdminUser(name, password, course) {
  LoggedInUser.call(this, name, password);
  this.course = course;
}

// now setting the Prototype of AdminUser
AdminUser.prototype = Object.create(LoggedInUser);

AdminUser.prototype.stats = function () {
  console.log(`All company stats are given to the Admin of the company!`);
};

const companyUser = new AdminUser(`Mohan`, 12345678, `Managment`);
// console.log(companyUser);

// Make sure to point the child (Admin) prototype to the parent (User) function immediately after the child (Admin) function. Because it returns an empty object and removes all methods on the child (Admin) function. So always create methods of the child (Admin) function after pointing the child (Admin) prototype to the parent (User) prototype.

// Now, Implementing Inheritance b/w classes
// class User {
//   constructor(name, password) {
//     this.name = name;
//     this.password = password;
//   }

//   printName() {
//     console.log(this.name);
//   }
// }

// class Admin extends User {
//   constructor(name, password, course) {
//     super(name, password);
//     this.course = course;
//   }

//   Stats() {
//     console.log("Stats");
//   }
// }

// const kedar = new Admin("kedar", 123456, "JavaScript");
// kedar.printName();

// So we have 2 classes, User and Admin. When we want to inherit, we simply add extends and the class we want to inherit from in-front of the child class similar to the syntax shown in the above code.

// When we are done with that, in the constructor of the child class, we call the super() method to pass an argument to the parent class which is required. That's how we can implement inheritance in JavaScript using ES6 syntax.

// We can also override the parent method by implementing a method with the same name in the child class.

// *******************************************************************
// *******************************************************************

// How Encapulation works in classes
// Encapsulation can be defined as “the packing of data and functions into one component”.

// Encapsulation enables “controlling access to that component”. When we have the data and related methods in a single unit, we can control how is it accessed outside the unit. This process is called Encapsulation.
