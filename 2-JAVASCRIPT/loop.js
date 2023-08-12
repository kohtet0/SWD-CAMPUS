// for (let i = 1; i < 6; i++) {
//   createTriangle();
// }

// function createTriangle() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   console.log("* * * *");
// }

// for (let i = 1; i < 6; i++) {
//   console.log("Ko Htet");
//   console.log("Item");
//   console.log("twice");
// }

// function createTriangle() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }

// for (let i = 1; i < 100; i += 5 ) {
//   createTriangle();
//   console.log("I'm loops", i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log("I'm loops", i);
//   if (i === 5) continue;
// }

// const fruits = ["apple", "orange", "mango", "lemon", "banana"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log("I'm processing", i, fruits[i]);
// }

// // for of
// for (fruit of fruits) {
//   console.log(fruit);
// }

// // for in
// for (x in fruits) {
//   console.log(x, fruits[x]);
// }

// let greeting = "Hello World!"
// console.log(greeting)

const obj = {
  name: "Ko Htet",
  age: 13,
  township: "Yangon",
  job: "IT",
};

for (x in obj) {
  console.log(x, "; ", obj[x]);
}
