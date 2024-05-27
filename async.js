`use strict`;

// Asynchronous JavaScript

// Synchronous Code:- When we write a program in JavaScript, it executes line by line. When a line is completely executed, then and then only does the code move forward to execute the next line.

// Asnchroous JavaScript:- With asynchronous code, multiple tasks can execute at the same time while tasks in the background finish. This is what we call non-blocking code. The execution of other code won't stop while an asynchronous task finishes its work.

let greetOne = `Hello`;
let greetTwo = `World`;
// console.log(greetOne);
// setTimeout(() => {
// console.log(`Asnnchronous Code to be implemented!`);
// }, "10000");

// console.log(greetTwo);

// n the above example, if you run the code on your machine you will see greet_one and greet_two logged even there is code in between those 2 logs.

// Now, setTimeout is asynchronous so it runs in background, allowing code after it to execute while it runs. After 10 seconds, Asynchronous will print because we set a time of 10 seconds in setTimeout to execute it after 10 seconds.

// *********************************
// How callbacks work in JS
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Implementing call

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

// Implemennting callback

function compute(callback, num1, num2) {
  return callback(num1, num2);
}

// console.log(compute(add, 15, 25));

// Welcome to the Callback Hell

// Callbacks are great, but you don't want to use them excessively. If you do, you'll get something called "callback hell". This happens when you nest callbacks within callbacks many levels deep.

// The shape of callback hell is like a pyramid and is also called the “pyramid of doom”. It makes the code very difficult to maintain and understand. Here's an example of callback hell:

// setTimeout(() => {
//   console.log(`One Second`);
//   setTimeout(() => {
//     console.log(`Two Second`);
//     setTimeout(() => {
//       console.log(`Three Second`);
//       setTimeout(() => {
//         console.log(`Four Secods`);
//       }, "1000");
//     }, "1000");
//   }, "1000");
// }, "1000");

// Callback hell can be avoided by simply using promises

// ********************************
// ********************************

// Promises in JavaScript
// A promise is placeholder for the future result of an asynchronous operation. In simple words, we can say it is a container for a future value.

// Consuming Promise
// How to Consume Promises
// We can consume a promise using the then() method on the promise. Producing code is code that can take some time to complete. Consuming code is code that must wait for the result.

// So if we consume a promise, this means that when we make a request, we wait for the result. Then after result arrives, we perform some operation on those results.

// const request = fetch(`https://course-api.com/react-store-products`).then(
//   (response) => {
//     return response.json();
//   }
// );

// request.then((data) => {
//   console.log(data);
// });

// We make a request to the country API. Then, after the fetch request, we use the then() method to consume the promise. After that, we return a bunch of information like header, status, and so on (you can see it in the below output image).

// So we specifically need data which we need to convert to JSON which returns a promise. The data which is returned when we make a API request gets returned in the form of a promise.

// To handle that promise, we again use the then() method to log data from the response. Using multiple then() methods on a single request is called chaining promises.

// *************************************************
// *************************************************

// Creating your own promise
// [Promises are asynchronous in nature. We can create any task to be asynchronous by creating our own promises. We can handle them using the then() and catch() methods

// Creating lottery Game using Promise
// const lottery = new Promise((resolve, reject) => {
//   // catching chances of a gambler to win the lottery

//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve(`Gambler Won!`);
//     } else {
//       reject(`Gambler Lost his money!`);
//     }
//   });
// });

// lottery
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((lose) => {
//     console.log(lose);
//   });

// ***************************************************
// ***************************************************

// Consuming promise using the async await
