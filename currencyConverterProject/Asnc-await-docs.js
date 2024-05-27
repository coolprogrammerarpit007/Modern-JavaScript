`use strict`;

// Async Functions
// Async function provide us with a clean and concise syntax that enables us to write less code to accomplish the same outcome we would get with promises. Async is nothing more than syntactic sugar for promises.

const addNumbers = async function (num1, num2) {
  const sum = await (num1 + num2);
  // console.log(`Sum of Numbers: ${sum}`);
  return sum;
};

addNumbers(25, 75).then((data) => {
  console.log(data);
});
