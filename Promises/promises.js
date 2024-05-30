`use strict`;

// const cart = [`Pants`, `Shirt`, `Kurta`];

// consuming/handling Promises

// createOrder(cart); // gives us orderId
// proceedToPayment(orderId); // Takes OrderId and will take us to payment page

// written using callbacks

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// Now written using Promises
// const promise = createOrder(cart);

// will return an empty object {data: undefined}, and all lines of code after promise will start executing and after some time data in that object will filled automatidcally by the promise object and we will have all the order details.

// promise.then((orderId) => {
//   proceedToPayment(orderId);
// }); // here we are attaching proceedToPayment callback to the promise object.

// const githubAPI = `https://api.github.com/users/coolprogrammerarpit007`;
// const user = fetch(githubAPI); // will return an promise object
// const data = user.then((x) => {
//   // console.log(x.json());
//   return x.json();
// });

// so what happens is, JS will continue executing line by line, fetch returns a promise object , which is an async operation so it takes some time to return data, but JS don't wait for anyone so when user got printed, in that time promise is pending, but after some time it rerurns data and promise state got fulfilled so that's why this inconsistency.

// promise brings more trust as promise object has only three states, pending, fulifilled and reject so gives more control over transaction and second thing promise objects are Immutable.

// const userData = data.then((x) => {
//   console.log(x);
// });

// Interview :- What is Promise?
// A promise is an object representing eventual completion or faliure of an asynchronous operation.
//  when writing promise chain, remember to always return a promise.

// Creating Our own Promise

// const cart = [`Pants`, `Shirt`, `Kurta`];

// Creating the promise
// we create promise by using the promise constructor, this promise constructor will take a callbcak function which has two parameters, resolve and reject

// function validateCart(cart) {
//   return true;
// }

// function validatePayment(orderId) {
//   return true;
// }

// const createOrder = function (cart) {
//   const promise = new Promise((resolve, reject) => {
//     // write logic of code
//     // create order and return orderId

//     if (!validateCart(cart)) {
//       const err = new Error(`cart is not valid!`);
//       reject(err);
//     }

//     // logic for create order
//     // const orderId = DBcall();// return orderId
//     let orderId = `12345`;
//     if (orderId) {
//       setTimeout(() => {
//         resolve(orderId);
//       }, "5000");
//     }
//   });

// return promise;
// };

// const proceedToPayment = function (orderId) {
//   return new Promise((resolve, reject) => {
//     if (!validatePayment(orderId)) {
//       reject(err);
//     }

//     let paymentId = `245678`;
//     if (paymentId) {
//       setTimeout(() => {
//         resolve(paymentId);
//       }, "5000");
//     }
//   });
// };

// consuming of promise
// const promise = createOrder(cart); // gives orderId
// console.log(promise);

// promise
//   .then((orderId) => {
//     console.log(orderId);
//     // proceedToPayment(orderId);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//     return orderId;
//   })
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((paymentInfo) => {
//     console.log(paymentInfo);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ***********************************************************
// ***********************************************************

// Promise.all()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`P1 got fulfilled!`);
  }, "3000");
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`P2 got fulfilled!`);
  }, "5000");
  // setTimeout(() => {
  //   reject(`P2 got rejeeted!`);
  // }, "1000");
});
const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve(`P3 got fulfilled!`);
  // }, "2000");
  setTimeout(() => {
    reject(`P3 got rejected!`);
  }, "2000");
});

// Promise.all([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error(err));

// 2. Promise.allSettled([])
// Promise.allSettled([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error(err));

// // 3. Promise.race()
// Promise.race([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error(err));
// 3. Promise.race()
Promise.any([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
