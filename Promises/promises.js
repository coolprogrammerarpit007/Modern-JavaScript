`use strict`;

const cart = [`Pants`, `Shirt`, `Kurta`];

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
