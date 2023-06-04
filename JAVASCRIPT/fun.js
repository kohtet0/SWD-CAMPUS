// function run() {
//     console.log("one");
//     console.log("two");
//     console.log("three");
// };

// // run();

// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");

// function createTriangle() {
//     console.log("*");
//     console.log("**");
//     console.log("***");
//     console.log("****");
//         return "I'm triangle";
// }

// console.log(createTriangle());

// function createTriangle() {
//     console.log("*");
//     console.log("**");
//     console.log("***");
//     console.log("****");
//         return 0;
// }

// console.log(createTriangle());

//If U know your age, I can find birth year
// //2023

// function findBirthYear(age = 0) {
//   let birthYear = 2023 - age;
//   return birthYear;
// }

// console.log(findBirthYear(22));
// console.log(findBirthYear(32));
// console.log(findBirthYear(12));
// console.log(findBirthYear(24));
// console.log(findBirthYear());

// exercises
// =========
// let results = [];
// let index = 0;

// function roomArea(width, breadth) {
//   let roomArea = width * breadth;
//   let result = {
//     width: width + "ft",
//     breadth: breadth + "ft",
//     roomArea: roomArea + "sqft",
//   };
//   results[index] = result;
//   index++;
//   return results;
// }

// console.log(roomArea(22, 70));
// console.log(roomArea(50, 30));
// console.log(roomArea(24, 30));

// console.table(results);

// let rates = {
//   USD: 2100,
//   SGD: 1574,
//   EUR: 2251,
// };

// function toMMK(amount, fromCurrency) {
//   let currentRate = rates[fromCurrency];
//   return amount * currentRate + " MMK";
// }

// console.log(toMMK(150, "USD"));
// console.log(toMMK(79, "SGD"));
// console.log(toMMK(30, "EUR"));

// function mmkToCurrency(amount, toCurrency) {
//   let currentRate = rates[toCurrency];
//   return amount / currentRate + " " + toCurrency;
// }

// console.log(mmkToCurrency(150000, "USD"));
// console.log(mmkToCurrency(200000, "SGD"));
// console.log(mmkToCurrency(300000, "EUR"));

// let a;
// let b;
// function Aa(x, y) {
//  return  x + y;
// };
// console.log(Aa(55, 5))

// 450 USD = ? EUR
// 500 SGD = ? USD
//550 EUR = ? SGD

// let rates = {
//   USD: 2100,
//   SGD: 1574,
//   EUR: 2251,
// };

// function usdToEUR(amount, toEUR) {
//   usdPrice = amount * usd
//   currentRate = rates[toEUR];
//   return amount * currentRate + " EUR";
// };

// console.log(usdToEUR(450, "EUR"));

// let run = function () {
//   return "I'm fun expression";
// }

// console.log(run());

// (function () {
//   console.log("I'm IIFE");
//   return "I'm IIFE";
// })();

// let x = function x() {
//   return "x";
// };

// let y = function y() {
//   return x() + "y";
// };

// console.log(y());

// {
//   let x = 1;
//   console.log(x)
// }

// let x;
// function run() {
//   let x = "x";
//   console.log(x);
// }

// run();
// console.log(x);

// console.log(x());

// function x() {
//   return "x";
// };

// console.log(y());

// let y = function y() {
//   return "y";
// };
