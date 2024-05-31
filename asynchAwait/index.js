`use strict`;

// creating promise

// const p = new Promise((resolve, reject) => {
//   resolve(`New Promise`);
// });

// let value;
// always return a promise
// async function getData() {
//   return `Namastey`; // return promise
// }

// getData().then((x) => {
//   console.log(x);
//   value = x;
// });
// async function getData() {
//   return p; // return promise
// }

// getData().then((x) => {
//   console.log(x);
// });

// using await with asynch

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`A new Promise!`);
//   }, "10000");
// });

// function getData() {
//   p.then((data) => console.log(data));
// }

// Now handling promise using await
// async function getData() {
//   // JS Engine was waiting for promise to be resolved.
//   const data = await p;
//   console.log(data);
//   return data;
// }
// console.log(getData().then((x) => console.log(x)));
// async function getData() {
//   // JS Engine was waiting for promise to be resolved.
//   const data = await p;
//   console.log(data);
//   return data;
// }

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`A new Promise!`);
  }, "10000");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`A new Promise!`);
  }, "5000");
});

// function handlePromises() {
//   const val1 = p1.then((x) => {
//     console.log(x);
//   });

//   console.log(`Hello JavaScript`);

//   const val2 = p2.then((x) => {
//     console.log(x);
//   });

//   console.log(`Namastey JavaScript`);
// }

// handlePromises();
async function handlePromises() {
  console.log(`Hello World!`);

  // JS Engine awaiting promise to be resolved!
  const val = await p1;
  console.log(`Namasty JS!`);
  console.log(val);

  const val2 = await p2;
  console.log(`Namasty Python!`);
  console.log(val2);
}

// handlePromises();
